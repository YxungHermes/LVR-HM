/**
 * TypeScript interfaces for Consultation Form and n8n Webhook Integration
 */

export interface AdditionalPartner {
  name: string;
  pronouns?: string;
}

export interface ConsultationFormData {
  // Contact Information
  partner1Name: string;
  partner1Pronouns?: string;
  partner2Name: string;
  partner2Pronouns?: string;
  additionalPartners?: AdditionalPartner[];
  email: string;
  phone?: string;

  // Event/Session Details
  weddingDate: string;
  location: string;
  venueName?: string;
  locationDetails?: string;
  eventType: 'elopement' | 'intimate' | 'full' | 'large' | 'destination' | 'adventure';
  adventureTier?: 'social' | 'story' | 'signature';
  isMultiDay?: boolean;
  numberOfDays?: number;
  guestCount?: string;

  // Cultural Context
  tradition?: 'western' | 'catholic' | 'jewish' | 'hindu' | 'muslim' | 'south-asian' | 'east-asian' | 'multicultural' | 'other';
  traditionOther?: string;

  // Vision & Style
  filmStyle: 'cinematic' | 'romantic' | 'documentary' | 'editorial' | 'energetic';
  keyMoments?: string[];

  // What They're Looking For
  deliverables?: string[];
  budgetRange?: string;
  deliveryTimeline?: 'standard' | 'rush' | 'flexible';

  // Their Story
  howYouMet?: string;
  inspirationLinks?: string;
  additionalNotes?: string;

  // Next Steps
  howDidYouHear?: 'instagram' | 'google' | 'planner' | 'friend' | 'venue' | 'theknot' | 'other';
  bookingTimeline?: 'asap' | '1-2-weeks' | '2-4-weeks' | '1-2-months' | 'researching';
  contactPreference?: 'email' | 'phone' | 'either';
}

export interface N8nWebhookPayload {
  // Primary contact info
  partner1Name: string;
  partner1Pronouns?: string;
  partner2Name: string;
  partner2Pronouns?: string;
  additionalPartners?: AdditionalPartner[];
  email: string;
  phone?: string;

  // Event details
  weddingDate: string;
  eventType: string;
  eventTypeFormatted: string;
  location: string;
  venueName?: string;
  locationDetails?: string;
  guestCount?: string;

  // Adventure session specific
  adventureTier?: string;
  adventureTierFormatted?: string;
  isMultiDay?: boolean;
  numberOfDays?: number;

  // Cultural context
  tradition?: string;
  traditionFormatted?: string;

  // Vision & preferences
  filmStyle: string;
  filmStyleFormatted: string;
  keyMoments?: string[];
  keyMomentsCount?: number;

  // Deliverables & budget
  deliverables?: string[];
  deliverablesFormatted?: string[];
  budgetRange?: string;
  budgetRangeFormatted?: string;
  deliveryTimeline?: string;
  deliveryTimelineFormatted?: string;

  // Story & inspiration
  howYouMet?: string;
  inspirationLinks?: string;
  additionalNotes?: string;

  // Lead source & urgency
  howDidYouHear?: string;
  howDidYouHearFormatted?: string;
  bookingTimeline?: string;
  bookingTimelineFormatted?: string;
  contactPreference?: string;

  // Metadata
  submittedAt: string;
  source: string;
}
