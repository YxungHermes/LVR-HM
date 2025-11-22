import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

/**
 * GET /api/leads/[id] - Get single lead with activities and notes
 */
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Get lead data
    const { data: lead, error: leadError } = await supabaseAdmin
      .from('leads')
      .select('*')
      .eq('id', params.id)
      .single();

    if (leadError || !lead) {
      return NextResponse.json({ error: 'Lead not found' }, { status: 404 });
    }

    // Get activities
    const { data: activities } = await supabaseAdmin
      .from('lead_activities')
      .select('*')
      .eq('lead_id', params.id)
      .order('created_at', { ascending: false });

    // Get notes
    const { data: notes } = await supabaseAdmin
      .from('lead_notes')
      .select('*')
      .eq('lead_id', params.id)
      .order('created_at', { ascending: false });

    return NextResponse.json({
      lead,
      activities: activities || [],
      notes: notes || [],
    }, { status: 200 });
  } catch (error) {
    console.error('Error in GET /api/leads/[id]:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

/**
 * PATCH /api/leads/[id] - Update lead
 */
export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();

    const { data, error } = await supabaseAdmin
      .from('leads')
      .update(body as any)
      .eq('id', params.id)
      .select()
      .single();

    if (error) {
      console.error('Error updating lead:', error);
      return NextResponse.json({ error: 'Failed to update lead' }, { status: 500 });
    }

    return NextResponse.json({ lead: data }, { status: 200 });
  } catch (error) {
    console.error('Error in PATCH /api/leads/[id]:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

/**
 * DELETE /api/leads/[id] - Delete lead
 */
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { error } = await supabaseAdmin
      .from('leads')
      .delete()
      .eq('id', params.id);

    if (error) {
      console.error('Error deleting lead:', error);
      return NextResponse.json({ error: 'Failed to delete lead' }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error in DELETE /api/leads/[id]:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
