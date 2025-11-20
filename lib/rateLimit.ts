import { NextRequest } from 'next/server';

// Simple in-memory rate limiter
// For production, consider using Vercel Edge Config or Upstash Redis
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

export interface RateLimitConfig {
  interval: number; // Time window in milliseconds
  maxRequests: number; // Max requests per interval
}

export function rateLimit(config: RateLimitConfig) {
  return async (request: NextRequest): Promise<{ success: boolean; remaining: number }> => {
    // Get client identifier (IP address)
    const ip = request.headers.get('x-forwarded-for') ||
               request.headers.get('x-real-ip') ||
               'unknown';

    const now = Date.now();
    const rateLimitKey = `${ip}:${request.nextUrl.pathname}`;

    // Get current rate limit data
    const rateData = rateLimitMap.get(rateLimitKey);

    // If no data or window expired, create new window
    if (!rateData || now > rateData.resetTime) {
      rateLimitMap.set(rateLimitKey, {
        count: 1,
        resetTime: now + config.interval
      });
      return { success: true, remaining: config.maxRequests - 1 };
    }

    // Increment counter
    rateData.count++;

    // Check if limit exceeded
    if (rateData.count > config.maxRequests) {
      return { success: false, remaining: 0 };
    }

    return { success: true, remaining: config.maxRequests - rateData.count };
  };
}

// Cleanup old entries periodically (every 10 minutes)
setInterval(() => {
  const now = Date.now();
  for (const [key, value] of rateLimitMap.entries()) {
    if (now > value.resetTime) {
      rateLimitMap.delete(key);
    }
  }
}, 10 * 60 * 1000);
