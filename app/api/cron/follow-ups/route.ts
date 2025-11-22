import { NextRequest, NextResponse } from 'next/server';
import { processScheduledFollowUps } from '@/lib/email-automation';

/**
 * GET /api/cron/follow-ups - Process scheduled follow-ups
 *
 * This endpoint should be called by a cron job (e.g., Vercel Cron, GitHub Actions)
 * to check for leads that need follow-up emails
 *
 * Add this to vercel.json:
 * {
 *   "crons": [{
 *     "path": "/api/cron/follow-ups",
 *     "schedule": "0 * * * *"
 *   }]
 * }
 */
export async function GET(request: NextRequest) {
  // Verify request is from cron (optional - use Vercel Cron secret)
  const authHeader = request.headers.get('authorization');
  const cronSecret = process.env.CRON_SECRET;

  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    console.log('⏰ Running scheduled follow-up check...');
    await processScheduledFollowUps();

    return NextResponse.json({
      success: true,
      message: 'Follow-up processing completed',
      timestamp: new Date().toISOString(),
    }, { status: 200 });
  } catch (error) {
    console.error('Error processing follow-ups:', error);
    return NextResponse.json({
      error: 'Failed to process follow-ups',
      details: error instanceof Error ? error.message : 'Unknown error',
    }, { status: 500 });
  }
}
