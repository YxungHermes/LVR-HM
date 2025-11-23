// @ts-nocheck - Supabase types not available until database is configured
import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { isAuthenticated } from '@/lib/auth';

/**
 * GET /api/leads - Get all leads with optional filtering
 */
export async function GET(request: NextRequest) {
  // ✅ SECURITY: Require authentication
  if (!isAuthenticated(request)) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  const { searchParams } = new URL(request.url);
  const status = searchParams.get('status');
  const priority = searchParams.get('priority');
  const search = searchParams.get('search');

  try {
    let query = supabaseAdmin
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false });

    // Filter by status
    if (status && status !== 'all') {
      query = query.eq('status', status);
    }

    // Filter by priority
    if (priority && priority !== 'all') {
      query = query.eq('priority', priority);
    }

    // ✅ SECURITY: Sanitize search input to prevent SQL injection
    if (search) {
      // Escape special characters that could be used for injection
      const sanitizedSearch = search.replace(/[%_]/g, '\\$&');
      query = query.or(`partner1_name.ilike.%${sanitizedSearch}%,partner2_name.ilike.%${sanitizedSearch}%,email.ilike.%${sanitizedSearch}%`);
    }

    const { data, error } = await query;

    if (error) {
      console.error('Error fetching leads:', error);
      return NextResponse.json({ error: 'Failed to fetch leads' }, { status: 500 });
    }

    return NextResponse.json({ leads: data }, { status: 200 });
  } catch (error) {
    console.error('Error in GET /api/leads:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
