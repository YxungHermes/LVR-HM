/**
 * Google Analytics 4 (GA4) Event Tracking Utility
 *
 * Centralized tracking for all GA4 events across the site.
 * Works alongside the @next/third-parties GoogleAnalytics component.
 *
 * Setup:
 * - GA4 is already installed via app/layout.tsx
 * - Add NEXT_PUBLIC_GA_MEASUREMENT_ID to Vercel environment variables
 * - Events are automatically sent to GA4 dashboard
 *
 * GA4 Configuration:
 * - Account: Michael Andrade Studio – Analytics
 * - Property: michael-andrade.com
 * - Measurement ID: G-CWZ8Q1MPE3
 * - Time Zone: America/New_York
 * - Enhanced Measurement: ON (auto-tracks scrolls, outbound clicks, file downloads)
 */

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      params?: Record<string, any>
    ) => void;
    dataLayer?: any[];
  }
}

/**
 * Track a custom GA4 event
 *
 * @param eventName - Name of the event (e.g., 'form_submit', 'cta_click')
 * @param eventParams - Additional parameters for the event
 *
 * @example
 * trackEvent('consultation_form_view', { page: '/consultation' });
 * trackEvent('cta_click', { cta_location: 'hero', cta_text: 'Book Consultation' });
 */
export function trackEvent(eventName: string, eventParams?: Record<string, any>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
}

/**
 * Track page view (handled automatically by Next.js GoogleAnalytics component)
 * Only use this for manual tracking if needed
 */
export function trackPageView(url: string) {
  if (typeof window !== 'undefined' && window.gtag && process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
}

/**
 * Track consultation form view
 * Fires when user lands on /consultation page
 */
export function trackConsultationFormView() {
  trackEvent('view_consultation_form', {
    form_name: 'Wedding Consultation Form',
    engagement_type: 'form_view',
  });
}

/**
 * Track consultation form submission
 * Fires when user successfully submits the consultation form
 *
 * @param eventType - Type of event (e.g., 'elopements', 'weddingDay')
 * @param budgetRange - Selected budget range
 */
export function trackConsultationFormSubmit(eventType?: string, budgetRange?: string) {
  // GA4 recommended event for lead generation
  trackEvent('generate_lead', {
    form_name: 'Wedding Consultation Form',
    event_type: eventType || 'not_specified',
    budget_range: budgetRange || 'not_specified',
    currency: 'USD',
  });

  // Also track as conversion
  trackEvent('consultation_submit', {
    form_name: 'Wedding Consultation Form',
    event_type: eventType || 'not_specified',
    budget_range: budgetRange || 'not_specified',
  });
}

/**
 * Track CTA button clicks
 *
 * @param ctaLocation - Where the CTA appears (e.g., 'hero', 'footer', 'offerings')
 * @param ctaText - The button text (e.g., 'Book Your Consultation')
 * @param destination - Where the CTA leads (e.g., '/consultation')
 */
export function trackCTAClick(ctaLocation: string, ctaText: string, destination?: string) {
  trackEvent('cta_click', {
    cta_location: ctaLocation,
    cta_text: ctaText,
    destination: destination || 'unknown',
    engagement_type: 'button_click',
  });
}

/**
 * Track video interactions
 *
 * @param action - Video action ('play', 'pause', 'complete', 'progress')
 * @param videoLocation - Where video appears (e.g., 'hero', 'portfolio')
 * @param videoTitle - Title or description of the video
 * @param progress - Playback progress percentage (0-100)
 */
export function trackVideoInteraction(
  action: 'play' | 'pause' | 'complete' | 'progress',
  videoLocation: string,
  videoTitle?: string,
  progress?: number
) {
  trackEvent('video_' + action, {
    video_location: videoLocation,
    video_title: videoTitle || 'unnamed_video',
    video_progress: progress,
    engagement_type: 'video_interaction',
  });
}

/**
 * Track outbound link clicks
 * Enhanced Measurement tracks this automatically, but use this for custom tracking
 *
 * @param url - The external URL clicked
 * @param linkText - The link text or description
 */
export function trackOutboundLink(url: string, linkText?: string) {
  trackEvent('click', {
    link_url: url,
    link_text: linkText || url,
    outbound: true,
  });
}

/**
 * Track scroll depth milestones
 *
 * @param percentage - Scroll depth percentage (25, 50, 75, 90, 100)
 * @param page - Page path where scroll occurred
 */
export function trackScrollDepth(percentage: number, page?: string) {
  trackEvent('scroll', {
    percent_scrolled: percentage,
    page_path: page || (typeof window !== 'undefined' ? window.location.pathname : 'unknown'),
  });
}

/**
 * Track navigation clicks
 *
 * @param destination - The page being navigated to
 * @param navLocation - Where the nav link appears ('header', 'footer', 'mobile')
 */
export function trackNavigation(destination: string, navLocation: string) {
  trackEvent('navigation_click', {
    destination,
    nav_location: navLocation,
    engagement_type: 'navigation',
  });
}

/**
 * Track file downloads
 * Enhanced Measurement tracks this automatically
 *
 * @param fileName - Name of the file downloaded
 * @param fileExtension - File type (e.g., 'pdf', 'jpg')
 */
export function trackFileDownload(fileName: string, fileExtension?: string) {
  trackEvent('file_download', {
    file_name: fileName,
    file_extension: fileExtension || 'unknown',
    link_url: fileName,
  });
}

/**
 * Track search queries (if you add search functionality later)
 *
 * @param searchTerm - The search query
 */
export function trackSearch(searchTerm: string) {
  trackEvent('search', {
    search_term: searchTerm,
  });
}

/**
 * Track errors or important user actions
 *
 * @param errorMessage - Description of the error
 * @param errorLocation - Where the error occurred
 */
export function trackError(errorMessage: string, errorLocation?: string) {
  trackEvent('exception', {
    description: errorMessage,
    fatal: false,
    error_location: errorLocation || 'unknown',
  });
}

/**
 * Set user properties (use sparingly, respects privacy)
 *
 * @param properties - User properties to set
 */
export function setUserProperties(properties: Record<string, any>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('set', 'user_properties', properties);
  }
}
