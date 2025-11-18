# CONSULTATION FORM FIELD MAPPING
================================

## File Location
**Form Component:** `/home/user/LVR-HM/app/consultation/page.tsx` (1,387 lines)
**API Route:** `/home/user/LVR-HM/app/api/consultation/route.ts` (806 lines)
**Type Definitions:** `/home/user/LVR-HM/types/consultation.ts`

---

## FORM FIELDS (in order they appear)

### SECTION 1: About Your Celebration

**1. partner1Name**
- Type: text
- Label: "Partner 1 Name"
- Required: Yes
- Placeholder: "Alex"
- Default: ""

**2. partner1Pronouns**
- Type: text
- Label: "Pronouns (optional)"
- Required: No
- Placeholder: "they/them, she/her, he/him..."
- Default: ""

**3. partner2Name**
- Type: text
- Label: "Partner 2 Name"
- Required: Yes
- Placeholder: "Jordan"
- Default: ""

**4. partner2Pronouns**
- Type: text
- Label: "Pronouns (optional)"
- Required: No
- Placeholder: "they/them, she/her, he/him..."
- Default: ""

**5. additionalPartners**
- Type: array of objects
- Label: "+ Add Another Partner"
- Required: No
- Structure: `[{ name: string, pronouns: string }]`
- Default: []
- Note: Dynamic field for polyamorous/multiple partner celebrations

**6. email**
- Type: email
- Label: "Email Address"
- Required: Yes
- Placeholder: "your.names@email.com"
- Validation: Email format regex `/\S+@\S+\.\S+/`
- Default: ""

**7. phone**
- Type: tel
- Label: "Phone Number (optional)"
- Required: No
- Placeholder: "(555) 123-4567"
- Auto-formatting: Yes (formats as (XXX) XXX-XXXX)
- Default: ""

**8. weddingDate**
- Type: date
- Label: "Wedding Date" (or "Session Date" for adventure)
- Required: Yes
- Default: ""

**9. eventType**
- Type: radio
- Label: "What are you celebrating?"
- Required: Yes
- Options:
  - `elopement` → "Elopement (just the two of you + officiant)"
  - `intimate` → "Intimate Wedding (up to 50 guests)"
  - `full` → "Full Wedding Day (50-150 guests)"
  - `large` → "Large Celebration (150+ guests)"
  - `destination` → "Destination Wedding"
  - `adventure` → "Couples Film / Adventure Session"
- Default: ""

**10. adventureTier** (CONDITIONAL: Only shows if eventType === 'adventure')
- Type: radio
- Label: "Which adventure tier?"
- Required: Yes (when visible)
- Options:
  - `social` → "The Social — $750 (Up to 2 hours, 1-min social-ready film, vertical format)"
  - `story` → "The Story — $1,200 (3 hours, 2-3 min narrative film, up to 2 locations)"
  - `signature` → "The Signature — $2,000 (4-5 hours, 3-5 min cinematic film, documentary-style + audio recording)"
- Default: ""

**11. location**
- Type: text
- Label: "Location"
- Required: Yes
- Placeholder: "Brooklyn, NY" or "Catskills, NY" (depending on event type)
- Default: ""

**12. locationDetails** (CONDITIONAL: Only shows if eventType === 'adventure')
- Type: textarea
- Label: "Location Details (optional)"
- Required: No
- Placeholder: "Tell us about the location(s)..."
- Default: ""

**13. venueName** (CONDITIONAL: Hidden if eventType === 'adventure')
- Type: text
- Label: "Venue Name (optional)"
- Required: No
- Placeholder: "The Foundry, Brooklyn Winery, etc."
- Default: ""

**14. isMultiDay**
- Type: checkbox
- Label: "This is a multi-day event"
- Required: No
- Default: false

**15. numberOfDays** (CONDITIONAL: Only shows if isMultiDay === true)
- Type: number
- Label: "How many days?"
- Required: Yes (when visible)
- Default: ""

**16. guestCount** (CONDITIONAL: Hidden if eventType === 'adventure')
- Type: text
- Label: "Guest Count (optional)"
- Required: No
- Placeholder: "Approximately how many guests?"
- Default: ""

---

### SECTION 2: Your Vision & Style

**17. tradition** (CONDITIONAL: Hidden if eventType === 'adventure')
- Type: select dropdown
- Label: "Tradition / Cultural Context"
- Required: Yes (when visible)
- Options:
  - `western` → "Western/Non-denominational"
  - `catholic` → "Catholic/Christian"
  - `jewish` → "Jewish"
  - `hindu` → "Hindu"
  - `muslim` → "Muslim"
  - `south-asian` → "South Asian"
  - `east-asian` → "East Asian"
  - `multicultural` → "Multicultural/Interfaith"
  - `other` → "Other (please specify)"
- Default: ""

**18. traditionOther** (CONDITIONAL: Only shows if tradition === 'other')
- Type: text
- Label: "Please specify your tradition"
- Required: Yes (when visible)
- Default: ""

**19. filmStyle**
- Type: radio
- Label: "What film style resonates with you?"
- Required: Yes
- Options:
  - `cinematic` → "Cinematic & Dramatic (Epic, emotional, theatrical)"
  - `romantic` → "Romantic & Dreamy (Soft, intimate, ethereal)"
  - `documentary` → "Documentary & Candid (Real moments, unscripted)"
  - `editorial` → "Editorial & Artistic (Fashion-forward, curated)"
  - `energetic` → "Bold & Energetic (Fast-paced, vibrant, fun)"
- Default: ""

**20. keyMoments** (CONDITIONAL: Hidden if eventType === 'adventure')
- Type: checkbox (multiple select)
- Label: "Which moments are most important to you? (Select all that apply)"
- Required: No
- Options:
  - `getting-ready` → "Getting ready"
  - `first-look` → "First look"
  - `ceremony` → "Ceremony"
  - `vows` → "Vows"
  - `rings` → "Ring exchange"
  - `kiss` → "First kiss"
  - `family` → "Family portraits"
  - `couple` → "Couple portraits"
  - `cocktail` → "Cocktail hour"
  - `reception` → "Reception entrance"
  - `speeches` → "Speeches/toasts"
  - `dancing` → "Dancing"
- Default: []

---

### SECTION 3: What You're Looking For

**21. deliverables** (CONDITIONAL: Hidden if eventType === 'adventure')
- Type: checkbox (multiple select)
- Label: "What deliverables are you interested in? (Select all that apply)"
- Required: No
- Options:
  - `highlight` → "Highlight Film (3-5 min cinematic film)"
  - `ceremony` → "Full Ceremony Edit (uncut ceremony)"
  - `reception` → "Full Reception Edit (speeches, dances, etc.)"
  - `teaser` → "Social Media Teaser (30-60 sec)"
  - `documentary` → "Documentary Edit (longer narrative edit)"
  - `raw` → "Raw Footage Files"
  - `cinematic-storytelling` → "Cinematic Storytelling"
  - `voice-recording` → "Voice & Story Recording"
- Default: []

**22. budgetRange** (CONDITIONAL: Hidden if eventType === 'adventure')
- Type: select dropdown
- Label: "Investment Range"
- Required: Yes (when visible)
- Options:
  - `2k-4k` → "$2,000 - $4,000"
  - `4k-7k` → "$4,000 - $7,000"
  - `7k-12k` → "$7,000 - $12,000"
  - `12k-20k` → "$12,000 - $20,000"
  - `20k+` → "$20,000+"
  - `flexible` → "Flexible / Not sure yet"
- Default: ""

**23. deliveryTimeline**
- Type: radio
- Label: "Delivery Timeline Preference"
- Required: No
- Options:
  - `standard` → "Standard (8-12 weeks)"
  - `rush` → "Rush (4-6 weeks)"
  - `flexible` → "Flexible"
- Default: "standard"

---

### SECTION 4: Tell Us Your Story (All Optional)

**24. howYouMet**
- Type: textarea
- Label: "How did you meet?"
- Required: No
- Placeholder: "Share your story..."
- Default: ""

**25. inspirationLinks**
- Type: textarea
- Label: "Inspiration Links (Pinterest, Instagram, YouTube, etc.)"
- Required: No
- Placeholder: "Paste any links to videos or styles you love..."
- Default: ""

**26. additionalNotes**
- Type: textarea
- Label: "Anything else you'd like us to know?"
- Required: No
- Placeholder: "Special moments, family dynamics, accessibility needs, etc."
- Default: ""

---

### SECTION 5: Next Steps

**27. howDidYouHear**
- Type: select dropdown
- Label: "How did you hear about us?"
- Required: Yes
- Options:
  - `instagram` → "Instagram/Social Media"
  - `google` → "Google Search"
  - `planner` → "Wedding Planner/Vendor"
  - `friend` → "Friend or Family Referral"
  - `venue` → "Venue Recommendation"
  - `theknot` → "The Knot/WeddingWire"
  - `other` → "Other"
- Default: ""

**28. bookingTimeline**
- Type: select dropdown
- Label: "When are you looking to book?"
- Required: No
- Options:
  - `asap` → "ASAP - date is coming up!"
  - `1-2-weeks` → "Within 1-2 weeks"
  - `2-4-weeks` → "Within 2-4 weeks"
  - `1-2-months` → "Within 1-2 months"
  - `researching` → "Still browsing/researching"
- Default: ""

**29. contactPreference**
- Type: radio
- Label: "Preferred contact method"
- Required: No
- Options:
  - `email` → "Email"
  - `phone` → "Phone call"
  - `either` → "Either is fine"
- Default: "email"

---

## FORM SUBMISSION

### API Route
`/home/user/LVR-HM/app/api/consultation/route.ts`

### Submission Method
- HTTP POST to `/api/consultation`
- Content-Type: `application/json`

### Payload Structure
```typescript
{
  // Contact Information
  partner1Name: string;
  partner1Pronouns?: string;
  partner2Name: string;
  partner2Pronouns?: string;
  additionalPartners?: AdditionalPartner[];
  email: string;
  phone?: string;

  // Event Details
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
```

### What Happens After Submission

1. **Server-side validation** (checks required fields)
2. **Resend email sent** to `RESEND_TO_EMAIL` with formatted HTML email
3. **n8n webhook called** (fire-and-forget, non-blocking) to:
   - `https://michael-andrade.app.n8n.cloud/webhook/wedding-inquiry`
   - Sends all 30+ fields with both raw and formatted values
4. **User redirected** to `/consultation/success` page
5. **Response returned** with `{ success: true, message: "Consultation request received", emailId: string }`

---

## CONDITIONAL FIELDS

### Fields that only show for WEDDINGS (eventType !== 'adventure'):
- `venueName` (optional)
- `guestCount` (optional)
- `tradition` (required)
- `traditionOther` (required if tradition === 'other')
- `keyMoments` (optional checkboxes)
- `deliverables` (optional checkboxes)
- `budgetRange` (required)

### Fields that only show for ADVENTURE SESSIONS (eventType === 'adventure'):
- `adventureTier` (required, replaces budgetRange)
- `locationDetails` (optional textarea)

### Fields that show conditionally:
- `traditionOther` → Only if `tradition === 'other'`
- `numberOfDays` → Only if `isMultiDay === true`
- `adventureTier` → Only if `eventType === 'adventure'`
- `locationDetails` → Only if `eventType === 'adventure'`

---

## VALIDATION

### Client-Side Validation
- **Email format:** Regex `/\S+@\S+\.\S+/`
- **Required field checks:** Different required fields based on event type
- **Section completion tracking:** Visual indicators for completed sections
- **Error highlighting:** Scrolls to first error and highlights section
- **Phone auto-formatting:** Formats as `(555) 123-4567`

### Server-Side Validation
- Checks `partner1Name`, `partner2Name`, `email` are present
- Returns 400 error if missing required fields
- Returns 500 error if Resend email fails

---

## CALCULATED/DERIVED FIELDS

None - all fields are user-input. However, the **n8n webhook payload** includes derived/formatted fields:

- `eventTypeFormatted` (e.g., "Intimate Wedding" instead of "intimate")
- `budgetRangeFormatted` (e.g., "$4k - $7k" instead of "4k-7k")
- `bookingTimelineFormatted` (e.g., "Within 1-2 weeks" instead of "1-2-weeks")
- `howDidYouHearFormatted` (e.g., "Instagram/Social Media" instead of "instagram")
- `filmStyleFormatted` (e.g., "Cinematic & Dramatic" instead of "cinematic")
- `adventureTierFormatted` (e.g., "The Social — $750" instead of "social")
- `deliverablesFormatted` (array of human-readable strings)
- `submittedAt` (ISO timestamp, e.g., "2025-11-18T14:30:00.000Z")
- `source` (always "consultation-form")
- `keyMomentsCount` (number of selected key moments)

---

## SUCCESS/CONFIRMATION PAGE

**Path:** `/home/user/LVR-HM/app/consultation/success/page.tsx`

**What it shows:**
- Thank you message
- Confirmation that request was received
- 24-hour response time promise
- Link back to homepage

---

## TOTAL FIELD COUNT

**Base Fields:** 29 fields
**Dynamic Fields:** additionalPartners (array, unlimited)
**Conditional Fields:** 6 fields (only show based on other selections)

**Total Possible Fields:** 35+ (depending on selections)

---

## ADDITIONAL NOTES

### Form Features
- **Accordion-based UI:** 5 collapsible sections
- **Progress tracking:** Visual checkmarks for completed sections
- **Live summary sidebar:** Shows form preview as user types
- **Auto-save state:** No (form clears on refresh)
- **Multi-partner support:** Allows adding unlimited additional partners
- **Responsive design:** Mobile-optimized with Tailwind CSS
- **Animations:** Framer Motion for smooth transitions

### Accessibility
- Proper label/input associations
- ARIA attributes for screen readers
- Keyboard navigation support
- Focus management
- Error announcements

### Phone Number Formatting
- Auto-formats as user types
- Accepts: `5551234567`, `555-123-4567`, `(555) 123-4567`
- Outputs: `(555) 123-4567`

### Data Flow
```
User fills form
  ↓
Client-side validation
  ↓
POST to /api/consultation
  ↓
Server-side validation
  ↓
Resend email sent (BLOCKING)
  ↓
n8n webhook fired (NON-BLOCKING, fire-and-forget)
  ↓
User redirected to /consultation/success
```

---

## WEBHOOK PAYLOAD (sent to n8n)

The webhook receives ALL form fields PLUS formatted versions:

```typescript
{
  // All 29+ original form fields
  partner1Name: string,
  partner2Name: string,
  email: string,
  // ... etc ...

  // PLUS formatted/derived fields:
  eventTypeFormatted: string,
  budgetRangeFormatted: string,
  bookingTimelineFormatted: string,
  howDidYouHearFormatted: string,
  filmStyleFormatted: string,
  adventureTierFormatted?: string,
  traditionFormatted?: string,
  deliverablesFo
rmatted?: string[],
  submittedAt: string, // ISO timestamp
  source: "consultation-form",
  keyMomentsCount?: number
}
```

This ensures Airtable receives human-readable values that match single-select dropdown options!

---

**End of Field Mapping**
