-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Leads table
CREATE TABLE IF NOT EXISTS leads (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),

  -- Contact Information
  partner1_name TEXT NOT NULL,
  partner1_pronouns TEXT,
  partner2_name TEXT NOT NULL,
  partner2_pronouns TEXT,
  email TEXT NOT NULL,
  phone TEXT,

  -- Event Details
  wedding_date DATE,
  location TEXT,
  event_type TEXT NOT NULL,
  event_subtype TEXT,
  session_tier TEXT,
  guest_count TEXT,

  -- Vision & Style
  tradition TEXT,
  tradition_other TEXT,
  film_style TEXT,

  -- What They're Looking For
  deliverables TEXT[],
  budget_range TEXT,

  -- Story & Notes
  how_you_met TEXT,
  additional_notes TEXT,

  -- Lead Source & Timeline
  how_did_you_hear TEXT,
  booking_timeline TEXT,

  -- CRM Fields
  status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'proposal_sent', 'booked', 'declined', 'archived')),
  priority TEXT DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high')),
  assigned_to TEXT,
  last_contacted_at TIMESTAMP WITH TIME ZONE,
  next_follow_up_at TIMESTAMP WITH TIME ZONE,
  estimated_value DECIMAL(10, 2),

  -- Metadata
  source TEXT DEFAULT 'consultation-form',
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT
);

-- Lead notes table
CREATE TABLE IF NOT EXISTS lead_notes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  lead_id UUID NOT NULL REFERENCES leads(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_by TEXT,
  note TEXT NOT NULL,
  note_type TEXT DEFAULT 'general' CHECK (note_type IN ('general', 'call', 'email', 'meeting', 'task'))
);

-- Lead activities table (timeline/history)
CREATE TABLE IF NOT EXISTS lead_activities (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  lead_id UUID NOT NULL REFERENCES leads(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  activity_type TEXT NOT NULL CHECK (activity_type IN ('status_change', 'email_sent', 'email_received', 'note_added', 'proposal_sent', 'payment_received')),
  description TEXT NOT NULL,
  metadata JSONB,
  created_by TEXT
);

-- Email templates table
CREATE TABLE IF NOT EXISTS email_templates (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  name TEXT NOT NULL,
  subject TEXT NOT NULL,
  body_html TEXT NOT NULL,
  body_text TEXT NOT NULL,
  template_type TEXT NOT NULL CHECK (template_type IN ('confirmation', 'follow_up', 'proposal', 'booking_confirmation', 'reminder', 'custom')),
  is_active BOOLEAN DEFAULT true,
  variables TEXT[]
);

-- Indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
CREATE INDEX IF NOT EXISTS idx_leads_wedding_date ON leads(wedding_date);
CREATE INDEX IF NOT EXISTS idx_leads_next_follow_up ON leads(next_follow_up_at);
CREATE INDEX IF NOT EXISTS idx_lead_notes_lead_id ON lead_notes(lead_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_lead_activities_lead_id ON lead_activities(lead_id, created_at DESC);

-- Function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to auto-update updated_at on leads table
CREATE TRIGGER update_leads_updated_at
  BEFORE UPDATE ON leads
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Trigger to auto-update updated_at on email_templates table
CREATE TRIGGER update_email_templates_updated_at
  BEFORE UPDATE ON email_templates
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Function to log activity when lead status changes
CREATE OR REPLACE FUNCTION log_lead_status_change()
RETURNS TRIGGER AS $$
BEGIN
  IF OLD.status IS DISTINCT FROM NEW.status THEN
    INSERT INTO lead_activities (lead_id, activity_type, description, metadata)
    VALUES (
      NEW.id,
      'status_change',
      'Status changed from ' || OLD.status || ' to ' || NEW.status,
      jsonb_build_object('old_status', OLD.status, 'new_status', NEW.status)
    );
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to automatically log status changes
CREATE TRIGGER log_status_change_trigger
  AFTER UPDATE OF status ON leads
  FOR EACH ROW
  EXECUTE FUNCTION log_lead_status_change();

-- Insert default email templates
INSERT INTO email_templates (name, subject, body_html, body_text, template_type, variables) VALUES
(
  'Client Confirmation Email',
  'We received your consultation request, {{partner1_name}}!',
  '<html><body><h1>Thanks for reaching out, {{partner1_name}} & {{partner2_name}}!</h1><p>I''m excited to learn more about your {{event_type}} on {{wedding_date}}.</p><p><strong>What happens next:</strong></p><ul><li>I''ll review your information within 24 hours</li><li>You''ll receive a personalized proposal with pricing and availability</li><li>We''ll schedule a call to discuss your vision</li></ul><p>Talk soon,<br/>Michael</p></body></html>',
  'Thanks for reaching out, {{partner1_name}} & {{partner2_name}}! I''m excited to learn more about your {{event_type}} on {{wedding_date}}.\n\nWhat happens next:\n- I''ll review your information within 24 hours\n- You''ll receive a personalized proposal with pricing and availability\n- We''ll schedule a call to discuss your vision\n\nTalk soon,\nMichael',
  'confirmation',
  ARRAY['partner1_name', 'partner2_name', 'event_type', 'wedding_date']
),
(
  '24 Hour Follow-up',
  'Quick question about your {{event_type}}, {{partner1_name}}',
  '<html><body><p>Hi {{partner1_name}} & {{partner2_name}},</p><p>I reviewed your consultation request for {{wedding_date}} and wanted to follow up personally.</p><p>Based on what you shared, I think {{collection_suggestion}} would be perfect for your celebration.</p><p>Want to hop on a quick 15-minute call this week? I can walk you through what that would look like and answer any questions.</p><p>Best,<br/>Michael</p></body></html>',
  'Hi {{partner1_name}} & {{partner2_name}},\n\nI reviewed your consultation request for {{wedding_date}} and wanted to follow up personally.\n\nBased on what you shared, I think {{collection_suggestion}} would be perfect for your celebration.\n\nWant to hop on a quick 15-minute call this week? I can walk you through what that would look like and answer any questions.\n\nBest,\nMichael',
  'follow_up',
  ARRAY['partner1_name', 'partner2_name', 'wedding_date', 'collection_suggestion']
);

-- Enable Row Level Security (RLS)
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE lead_notes ENABLE ROW LEVEL SECURITY;
ALTER TABLE lead_activities ENABLE ROW LEVEL SECURITY;
ALTER TABLE email_templates ENABLE ROW LEVEL SECURITY;

-- RLS Policies (adjust based on your auth setup)
-- For now, allow service role to access everything
-- You'll want to add proper policies based on your authentication
CREATE POLICY "Service role can do everything on leads" ON leads
  FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "Service role can do everything on lead_notes" ON lead_notes
  FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "Service role can do everything on lead_activities" ON lead_activities
  FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "Service role can do everything on email_templates" ON email_templates
  FOR ALL USING (auth.role() = 'service_role');
