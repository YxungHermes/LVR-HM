# Client Estimator Page Blueprint

**Feature**: Professional Client Estimator & Quote Builder
**Status**: Future Feature / Not Yet Implemented
**Priority**: High
**Estimated Complexity**: Medium-High

---

## Overview

A comprehensive, interactive estimator page that allows Love, Violeta Rose to create professional, itemized quotes for wedding videography projects. This tool will streamline the quoting process, ensure pricing consistency, and provide clients with transparent, detailed estimates.

The page functions as a long-form editor with modular cost sections, real-time calculations, and a sticky summary sidebar showing the running total.

---

## 1. Project Header Section

The top section contains core project metadata and identification.

### Fields:

**Project Name** (Large title field)
- Text input, large serif font
- Example: "Sarah & James - Napa Wedding Film"
- Required field

**Project Type** (Dropdown)
- Options:
  - Wedding Day Film
  - Elopement
  - Destination Wedding
  - Adventure Session
  - Commercial Project
  - Event Coverage
  - Other
- Required field
- Affects default pricing templates

**Date Selector**
- Event date picker
- Shows: "Saturday, June 15, 2025"
- Optional: Season affects pricing (peak vs. off-season)

**Client Information**
- Client Name(s) (text input)
- Email (text input, validated)
- Phone (text input, formatted)
- Location/Venue (text input)

**Status Tag** (Dropdown with visual indicator)
- Options:
  - Draft (gray)
  - Awaiting Review (yellow)
  - Sent to Client (blue)
  - Awaiting Deposit (orange)
  - Booked (green)
  - Locked (red)
- Displayed as colored badge/pill
- Affects edit permissions (locked = read-only)

---

## 2. Line-Item Cost Groups

Modular, collapsible sections that build the estimate. Each section auto-calculates and displays subtotal on the right.

### A. Travel

**Purpose**: Calculate travel fees based on distance and additional costs.

**Fields:**

**Travel Distance Slider**
- Range: 0-500 miles
- Display: "150 miles"
- Auto-calculation: Miles × Cost-per-Mile
- Cost-per-Mile: $0.67 (IRS standard rate, adjustable)

**Additional Travel Fees Toggle**
- Options:
  - Parking fees (text input for amount)
  - Hotel accommodation (toggle + amount)
  - Airfare (toggle + amount)
  - Rental car (toggle + amount)
  - Per diem (auto-calculated based on days)

**Section Subtotal** (right-aligned)
- Shows: "Travel Total: $XXX"
- Updates in real-time

---

### B. Filming Hours

**Purpose**: Calculate on-site filming time and crew costs.

**Fields:**

**Filming Hours Slider**
- Range: 1-14 hours
- Display: "8 hours"
- Rate per hour: $XXX (configurable base rate)
- Auto-calculation: Hours × Hourly Rate

**Add-Ons** (checkboxes with quantity/rate)
- Additional Shooter
  - Toggle + hours slider
  - Rate: $XXX/hour
- Assistant/Second Camera
  - Toggle + hours slider
  - Rate: $XXX/hour
- Drone Coverage
  - Toggle + hours slider
  - Rate: $XXX/hour
- Additional Equipment
  - Gimbal/stabilizer
  - Lighting package
  - Audio package (lav mics, boom, etc.)

**Pre-Event Coverage** (optional)
- Rehearsal dinner
- Getting ready coverage
- Engagement shoot

**Section Subtotal** (right-aligned)
- Shows: "Filming Total: $XXX"

---

### C. Editing / Post-Production

**Purpose**: Calculate editing time based on deliverable complexity.

**Fields:**

**Highlight Film Length Slider**
- Range: 0-10 minutes
- Display: "3-5 minute highlight film"
- Base rate per minute tier
- Auto-calculation based on complexity

**Full Ceremony Edit** (toggle)
- Full-length ceremony edit
- Rate: $XXX

**Full Speeches Edit** (toggle)
- All toasts and speeches
- Rate: $XXX

**Social Media Edits** (quantity selector)
- Vertical cutdowns (Instagram/TikTok)
- Teasers (15-30 seconds)
- Quantity: 0-10
- Rate per edit: $XXX

**Add-Ons** (checkboxes)
- Rush Fee (deliver within X days)
  - Slider for turnaround time
  - Premium increases with urgency
- Advanced Color Grading
  - Toggle + rate
- Sound Design / Music Licensing
  - Toggle + rate
- Additional Revisions
  - Slider: 0-5 rounds
  - Rate per round: $XXX

**Section Subtotal** (right-aligned)
- Shows: "Post-Production Total: $XXX"

---

### D. Deliverables

**Purpose**: Define what client receives and format.

**Fields:**

**Main Film Deliverables** (checkboxes with quantity)
- Highlight Film (3-5 min)
  - Quantity: 1 (default)
- Feature Film (20-40 min)
  - Toggle + quantity
- Documentary Edit (60+ min)
  - Toggle + quantity

**Additional Versions**
- Trailer / Teaser (30-60 sec)
  - Quantity slider: 0-5
- Vertical Cutdowns (Instagram/TikTok)
  - Quantity slider: 0-10
- Ceremony Only Edit
  - Toggle
- Speeches Only Edit
  - Toggle

**Physical Deliverables**
- USB Drive (custom branded)
  - Quantity slider: 0-10
  - Rate: $XXX each
- Raw Footage Archive Drive
  - Toggle + rate
- Luxury Presentation Box
  - Toggle + rate

**Digital Delivery**
- Private Online Gallery
  - Included (checkbox)
- Download Rights
  - Full resolution (checkbox)
  - Web resolution (checkbox)

**Section Subtotal** (right-aligned)
- Shows: "Deliverables Total: $XXX"

---

## 3. Notes & Descriptions

Expandable text areas for additional context and custom requirements.

### Fields:

**Overall Project Notes**
- Large text area
- Markdown support
- Example: "Outdoor venue, golden hour ceremony, vintage aesthetic requested"

**Day-of Notes**
- Timeline details
- Special requests
- Must-have shots

**Creative Direction Notes**
- Visual style
- Music preferences
- Reference films

**Travel Details**
- Directions
- Parking information
- Hotel booking details

**Additional Fees / Adjustments**
- Custom line items
- Discounts
- Promo codes
- Package deals

---

## 4. Summary Box (Sticky Sidebar)

**Purpose**: Real-time cost summary visible at all times during editing.

**Position**: Fixed to right side of screen, scrolls with user.

### Display:

```
┌─────────────────────────────┐
│   ESTIMATE SUMMARY          │
├─────────────────────────────┤
│ Travel             $XXX.XX  │
│ Filming            $XXX.XX  │
│ Post-Production    $XXX.XX  │
│ Deliverables       $XXX.XX  │
│                             │
│ Subtotal          $X,XXX.XX │
│ Additional Fees      $XX.XX │
│ Discount           -$XXX.XX │
│ Tax (X%)             $XX.XX │
├─────────────────────────────┤
│ TOTAL            $X,XXX.XX  │
├─────────────────────────────┤
│                             │
│ Payment Schedule:           │
│ • Deposit (50%)  $X,XXX.XX  │
│   Due: Upon Booking         │
│ • Balance (50%)  $X,XXX.XX  │
│   Due: 2 Weeks Before Event │
│                             │
├─────────────────────────────┤
│ [Generate PDF]              │
│ [Send to Client]            │
│ [Save Draft]                │
└─────────────────────────────┘
```

### Features:
- Real-time updates as sliders/toggles change
- Smooth number transitions (animated counting)
- Clear visual hierarchy (bold total)
- Action buttons at bottom
- Optional: "Add Custom Line Item" button

---

## 5. Backend Logic & Data Structure

### Pricing Model JSON Structure

```json
{
  "pricing_model": {
    "base_rates": {
      "filming_hourly_rate": 250,
      "cost_per_mile": 0.67,
      "editing_per_minute": 150,
      "rush_fee_multiplier": 1.5
    },
    "add_ons": {
      "additional_shooter": {
        "rate_per_hour": 150,
        "default_hours": 8
      },
      "drone_coverage": {
        "rate_per_hour": 100,
        "equipment_fee": 150
      },
      "social_media_edit": {
        "rate_per_edit": 75,
        "bulk_discount": {
          "5_or_more": 0.15
        }
      }
    },
    "deliverables": {
      "usb_drive": 45,
      "raw_footage_drive": 200,
      "luxury_box": 150
    },
    "seasonal_pricing": {
      "peak_season": {
        "months": [5, 6, 7, 8, 9, 10],
        "multiplier": 1.2
      }
    }
  }
}
```

### Calculation Engine

**Functions Needed:**
- `calculateTravel(distance, additionalFees)` → total
- `calculateFilming(hours, addOns)` → total
- `calculateEditing(filmLength, addOns, rushFee)` → total
- `calculateDeliverables(items)` → total
- `applyDiscount(subtotal, discountCode)` → discounted total
- `calculateTax(subtotal, taxRate)` → tax amount
- `generatePaymentSchedule(total, depositPercent)` → schedule

### Promo Code System

```json
{
  "promo_codes": [
    {
      "code": "EARLYBIRD2025",
      "type": "percentage",
      "value": 10,
      "valid_until": "2025-01-31",
      "min_order": 2000
    },
    {
      "code": "REFERRAL",
      "type": "fixed",
      "value": 250,
      "single_use": false
    }
  ]
}
```

### Database Schema (Future)

```typescript
interface Estimate {
  id: string;
  created_at: Date;
  updated_at: Date;
  project_name: string;
  project_type: ProjectType;
  event_date: Date;
  client: {
    name: string;
    email: string;
    phone: string;
    location: string;
  };
  status: EstimateStatus;
  line_items: {
    travel: TravelCosts;
    filming: FilmingCosts;
    editing: EditingCosts;
    deliverables: DeliverableCosts;
  };
  notes: {
    overall: string;
    day_of: string;
    creative: string;
    travel: string;
    additional: string;
  };
  totals: {
    subtotal: number;
    additional_fees: number;
    discount: number;
    tax: number;
    final_total: number;
  };
  payment_schedule: PaymentSchedule;
  promo_code?: string;
}
```

### API Endpoints (Future)

```
POST   /api/estimates          - Create new estimate
GET    /api/estimates/:id      - Get estimate by ID
PUT    /api/estimates/:id      - Update estimate
DELETE /api/estimates/:id      - Delete estimate
POST   /api/estimates/:id/duplicate - Duplicate estimate
POST   /api/estimates/:id/send      - Send to client email
GET    /api/estimates/:id/pdf       - Generate PDF
POST   /api/estimates/:id/lock      - Lock estimate (no edits)
```

---

## 6. Frontend UI Requirements

### Design Specifications

**Layout:**
- Desktop-first design (mobile responsive later)
- Max-width container: 1600px
- Two-column layout: Main editor (70%) + Sticky sidebar (30%)
- Vertical sections with collapsible groups

**Color Palette:**
- Background: Warm white (#FAFAF8)
- Section backgrounds: Soft cream (#F5F5F3)
- Borders: Light gray (#E5E5E3)
- Accent: Rose gold (#D97788) for active elements
- Text: Ink black (#1C1A18)

**Typography:**
- Headers: Serif (matching brand)
- Body: Sans-serif (clean, readable)
- Numbers: Tabular figures for alignment

**Interactive Elements:**

**Sliders:**
- Smooth, custom-styled range inputs
- Real-time value display
- Tick marks for common values
- Snap to increments

**Toggles:**
- iOS-style switches
- Smooth animation
- Clear on/off states

**Collapsible Sections:**
- Chevron icon indicating state
- Smooth expand/collapse animation (300ms ease)
- Remember state in session storage

**Sticky Summary:**
- `position: sticky` on right sidebar
- Shadow appears on scroll
- Updates animate smoothly (number counting effect)

**Responsive Behavior:**
- Desktop: Side-by-side layout
- Tablet: Stacked with sticky summary at top
- Mobile: Full-width, summary collapses to bottom sheet

### Component Structure

```
<EstimatorPage>
  <PageHeader>
    <ProjectMetadata />
    <StatusBadge />
  </PageHeader>

  <EstimatorLayout>
    <EditorColumn>
      <CollapsibleSection title="Travel">
        <TravelCalculator />
      </CollapsibleSection>

      <CollapsibleSection title="Filming Hours">
        <FilmingCalculator />
      </CollapsibleSection>

      <CollapsibleSection title="Post-Production">
        <EditingCalculator />
      </CollapsibleSection>

      <CollapsibleSection title="Deliverables">
        <DeliverablesSelector />
      </CollapsibleSection>

      <CollapsibleSection title="Notes">
        <NotesEditor />
      </CollapsibleSection>
    </EditorColumn>

    <SummarySidebar>
      <CostBreakdown />
      <PaymentSchedule />
      <ActionButtons />
    </SummarySidebar>
  </EstimatorLayout>
</EstimatorPage>
```

### Animation & Transitions

- Section collapse/expand: 300ms cubic-bezier
- Number changes: 400ms counting animation
- Slider updates: Immediate (0ms delay)
- Button hover: 200ms ease
- Summary updates: 200ms delay, then 400ms animation

---

## 7. Future Features & Enhancements

### Phase 2 (Post-MVP)

**Save & Manage Drafts**
- Auto-save every 30 seconds
- Manual save button
- Version history
- "Restore previous version" option

**Duplicate Project**
- Clone existing estimate
- Pre-fill client details
- Adjust dates and pricing

**Email Integration**
- Send estimate directly to client email
- Branded email template
- Custom message field
- Track when opened

**PDF Export**
- Professional PDF generation
- Branded template
- Itemized breakdown
- Terms & conditions footer
- Digital signature field

**Client Portal Integration**
- Shareable link for client review
- Accept/decline functionality
- Request changes button
- Online deposit payment

**Auto-Generate Contract**
- Pre-fill contract template from estimate
- Include all agreed-upon services
- Payment schedule
- Terms & conditions
- Digital signature collection

### Phase 3 (Advanced Features)

**Template Library**
- Save pricing templates
- "Elopement Package" preset
- "Full Wedding Day" preset
- "Destination Wedding" preset
- Quick-apply templates

**Booking Calendar Integration**
- Check date availability
- Block dates when booked
- Show upcoming projects timeline

**Analytics Dashboard**
- Average project value
- Conversion rate (sent → booked)
- Popular add-ons
- Seasonal trends

**CRM Integration**
- Link to client database
- View past projects
- Client communication history
- Follow-up reminders

**Dynamic Pricing**
- Smart suggestions based on project type
- Seasonal auto-adjustments
- Distance-based travel tiers
- Bundle discounts

**Multi-Currency Support**
- USD, EUR, GBP, etc.
- Real-time conversion
- Display in client's preferred currency

---

## 8. Technical Stack Recommendations

**Frontend:**
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS for styling
- Framer Motion for animations
- React Hook Form for form management
- Zod for validation

**State Management:**
- Zustand or Jotai (lightweight)
- React Query for server state (future)

**PDF Generation:**
- React-PDF or Puppeteer
- Custom branded templates

**Email:**
- Resend or SendGrid
- React Email for templates

**Database (Future):**
- Supabase or Firebase
- PostgreSQL for production

**File Storage:**
- Cloudinary or AWS S3 (for PDFs, assets)

---

## 9. User Flow

### Creating New Estimate:

1. Click "New Estimate" button
2. Enter project name, type, date
3. Fill in client information
4. Work through sections (Travel → Filming → Editing → Deliverables)
5. Adjust sliders and toggles
6. Watch summary update in real-time
7. Add notes if needed
8. Review total in summary sidebar
9. Click "Save Draft" or "Send to Client"

### Sending to Client:

1. Click "Send to Client" button
2. Modal opens with:
   - Client email (pre-filled)
   - Custom message text area
   - "Include PDF attachment" checkbox
3. Click "Send Estimate"
4. Status changes to "Sent to Client"
5. Confirmation toast appears
6. Email sent with branded template

---

## 10. Success Metrics

**Goals:**
- Reduce quote creation time from 45 minutes → 10 minutes
- Increase quote consistency (eliminate manual calculation errors)
- Improve client professionalism perception
- Track conversion rate improvements
- Streamline booking process

---

## 11. Related Documentation

- See: `/docs/project-plans/payment-processing-plan.md` (future)
- See: `/docs/project-plans/client-portal-plan.md` (future)
- See: `/docs/project-plans/booking-calendar-plan.md` (future)

---

## Notes

This estimator page may precede or integrate with the payment processing system. It serves as both an internal tool for creating quotes and a client-facing interface for reviewing and accepting proposals.

The system should be modular enough to adapt to different service types beyond weddings (commercial work, events, etc.) and flexible enough to accommodate custom pricing models as the business evolves.

---

**Document Version**: 1.0
**Last Updated**: 2025-11-14
**Author**: LVR Development Team
**Status**: Planning / Not Yet Implemented
