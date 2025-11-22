// @ts-nocheck - Supabase types not available until database is configured
import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

/**
 * POST /api/leads/[id]/notes - Add note to lead
 */
export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();

    // @ts-ignore - Supabase types not available until runtime
    const { data, error } = await supabaseAdmin
      .from('lead_notes')
      .insert({
        lead_id: params.id,
        note: body.note,
        note_type: body.note_type || 'general',
        created_by: body.created_by || null,
      })
      .select()
      .single();

    if (error) {
      console.error('Error adding note:', error);
      return NextResponse.json({ error: 'Failed to add note' }, { status: 500 });
    }

    // Also log as activity
    // @ts-ignore - Supabase types not available until runtime
    await supabaseAdmin
      .from('lead_activities')
      .insert({
        lead_id: params.id,
        activity_type: 'note_added',
        description: `Note added: ${body.note.substring(0, 50)}${body.note.length > 50 ? '...' : ''}`,
        metadata: { note_type: body.note_type || 'general' },
      });

    return NextResponse.json({ note: data }, { status: 201 });
  } catch (error) {
    console.error('Error in POST /api/leads/[id]/notes:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
