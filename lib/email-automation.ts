import { Resend } from 'resend';
import { supabaseAdmin } from './supabase';

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailTemplate {
  id: string;
  name: string;
  subject: string;
  body_html: string;
  body_text: string;
  variables: string[] | null;
}

interface SendEmailParams {
  to: string;
  templateType: 'confirmation' | 'follow_up' | 'proposal' | 'booking_confirmation' | 'reminder' | 'custom';
  variables: Record<string, string>;
  from?: string;
  replyTo?: string;
  leadId?: string;
}

/**
 * Replace template variables with actual values
 * Example: "Hello {{partner1_name}}" → "Hello John"
 */
function replaceVariables(template: string, variables: Record<string, string>): string {
  let result = template;

  Object.entries(variables).forEach(([key, value]) => {
    const regex = new RegExp(`{{${key}}}`, 'g');
    result = result.replace(regex, value || '');
  });

  return result;
}

/**
 * Get email template from database by type
 */
async function getEmailTemplate(templateType: string): Promise<EmailTemplate | null> {
  const { data, error } = await supabaseAdmin
    .from('email_templates')
    .select('*')
    .eq('template_type', templateType)
    .eq('is_active', true)
    .single();

  if (error) {
    console.error('Error fetching email template:', error);
    return null;
  }

  return data;
}

/**
 * Send automated email using template
 */
export async function sendAutomatedEmail({
  to,
  templateType,
  variables,
  from = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
  replyTo,
  leadId
}: SendEmailParams): Promise<{ success: boolean; emailId?: string; error?: string }> {
  try {
    // Get template from database
    const template = await getEmailTemplate(templateType);

    if (!template) {
      return { success: false, error: `Template ${templateType} not found or inactive` };
    }

    // Replace variables in subject and body
    const subject = replaceVariables(template.subject, variables);
    const html = replaceVariables(template.body_html, variables);
    const text = replaceVariables(template.body_text, variables);

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from,
      to,
      replyTo: replyTo || from,
      subject,
      html,
      text,
    });

    if (error) {
      console.error('Error sending email:', error);
      return { success: false, error: error.message };
    }

    console.log(`✅ Email sent successfully: ${data?.id}`);

    // Log activity if leadId is provided
    if (leadId && data?.id) {
      await logEmailActivity(leadId, templateType, subject, data.id);
    }

    return { success: true, emailId: data?.id };
  } catch (error) {
    console.error('Error in sendAutomatedEmail:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

/**
 * Log email activity to lead timeline
 */
async function logEmailActivity(
  leadId: string,
  emailType: string,
  subject: string,
  emailId: string
): Promise<void> {
  await supabaseAdmin
    .from('lead_activities')
    .insert({
      lead_id: leadId,
      activity_type: 'email_sent',
      description: `Email sent: ${subject}`,
      metadata: {
        email_type: emailType,
        email_id: emailId,
      },
    });
}

/**
 * Send client confirmation email immediately after consultation submission
 */
export async function sendClientConfirmation(lead: any): Promise<void> {
  const variables = {
    partner1_name: lead.partner1_name,
    partner2_name: lead.partner2_name,
    event_type: formatEventType(lead.event_type),
    wedding_date: lead.wedding_date ? new Date(lead.wedding_date).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }) : 'your upcoming date',
  };

  await sendAutomatedEmail({
    to: lead.email,
    templateType: 'confirmation',
    variables,
    replyTo: process.env.RESEND_FROM_EMAIL,
    leadId: lead.id,
  });
}

/**
 * Schedule follow-up email (24 hours later)
 * In production, you'd use a job queue like BullMQ or Inngest
 * For now, this sets a next_follow_up_at timestamp
 */
export async function scheduleFollowUp(leadId: string): Promise<void> {
  const followUpDate = new Date();
  followUpDate.setHours(followUpDate.getHours() + 24);

  await supabaseAdmin
    .from('leads')
    .update({ next_follow_up_at: followUpDate.toISOString() })
    .eq('id', leadId);

  console.log(`📅 Follow-up scheduled for ${followUpDate.toISOString()}`);
}

/**
 * Send follow-up email
 */
export async function sendFollowUpEmail(leadId: string): Promise<void> {
  // Get lead data
  const { data: lead, error } = await supabaseAdmin
    .from('leads')
    .select('*')
    .eq('id', leadId)
    .single();

  if (error || !lead) {
    console.error('Lead not found for follow-up:', leadId);
    return;
  }

  // Determine collection suggestion based on budget and event type
  const collectionSuggestion = getCollectionSuggestion(lead);

  const variables = {
    partner1_name: lead.partner1_name,
    partner2_name: lead.partner2_name,
    wedding_date: lead.wedding_date ? new Date(lead.wedding_date).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }) : 'your date',
    collection_suggestion: collectionSuggestion,
  };

  await sendAutomatedEmail({
    to: lead.email,
    templateType: 'follow_up',
    variables,
    leadId: lead.id,
  });

  // Update lead status
  await supabaseAdmin
    .from('leads')
    .update({
      status: 'contacted',
      last_contacted_at: new Date().toISOString(),
      next_follow_up_at: null,
    })
    .eq('id', leadId);
}

/**
 * Helper: Get collection suggestion based on lead data
 */
function getCollectionSuggestion(lead: any): string {
  if (lead.event_type === 'elopement') return 'our Elopement collection';
  if (lead.event_type === 'engagement') return 'a Couples Film session';
  if (lead.event_type === 'destination') return 'our Destination Wedding package';
  if (lead.budget_range && lead.budget_range.includes('8k')) return 'our premium Wedding Day Films collection';
  return 'our Wedding Day Films collection';
}

/**
 * Helper: Format event type for emails
 */
function formatEventType(eventType: string): string {
  const types: Record<string, string> = {
    wedding: 'wedding',
    elopement: 'elopement',
    engagement: 'engagement session',
    anniversary: 'anniversary film',
    destination: 'destination wedding',
  };
  return types[eventType] || 'celebration';
}

/**
 * Check for leads that need follow-up and send emails
 * Run this on a cron job (e.g., every hour)
 */
export async function processScheduledFollowUps(): Promise<void> {
  console.log('🔍 Checking for scheduled follow-ups...');

  const { data: leads, error } = await supabaseAdmin
    .from('leads')
    .select('*')
    .eq('status', 'new')
    .not('next_follow_up_at', 'is', null)
    .lte('next_follow_up_at', new Date().toISOString());

  if (error) {
    console.error('Error fetching leads for follow-up:', error);
    return;
  }

  if (!leads || leads.length === 0) {
    console.log('✅ No follow-ups due at this time');
    return;
  }

  console.log(`📧 Processing ${leads.length} follow-up(s)...`);

  for (const lead of leads) {
    try {
      await sendFollowUpEmail(lead.id);
      console.log(`✅ Follow-up sent to ${lead.email}`);
    } catch (error) {
      console.error(`❌ Failed to send follow-up to ${lead.email}:`, error);
    }
  }
}
