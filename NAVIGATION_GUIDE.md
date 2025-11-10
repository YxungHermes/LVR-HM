# D&G-Style Luxury Navigation Guide

## Overview

The navigation system is designed to match Dolce & Gabbana's luxury aesthetic: transparent, minimal, and elegant with sophisticated mega menu dropdowns.

## Architecture

### Header Layout (`components/Header.tsx`)

```
┌─────────────────────────────────────────────────────────┐
│  Films  Packages  │ Love, Violeta Rose │  Stories  Contact │
└─────────────────────────────────────────────────────────┘
                          ↓ (on hover)
┌─────────────────────────────────────────────────────────┐
│                    MEGA MENU TRAY                        │
│  ┌──────────────────┐  ┌──────────────────┐            │
│  │ Latest Films     │  │ Collections      │            │
│  │ • Ari & Billy    │  │ • Full Weddings  │            │
│  │ • Jeremy & Lou   │  │ • Elopements     │            │
│  └──────────────────┘  └──────────────────┘            │
└─────────────────────────────────────────────────────────┘
```

### States

#### 1. Initial State (Page Load)
- **Background**: Fully transparent
- **Text**: Dark ink (#111), 90% opacity
- **Logo**: Centered, serif font, letter-spacing 0.08em
- **Nav Items**: Uppercase, tracking-wide, no backgrounds

#### 2. Scrolled State (After 50px)
- **Background**: White 95% opacity with backdrop blur
- **Border**: Subtle hairline (1px) with black/10 opacity
- **Shadow**: Soft drop shadow
- **Transition**: 500ms smooth ease

#### 3. Hover State
- **Nav Item**: Opacity transitions to 70%
- **No Background Box**: Just opacity change
- **Mega Menu**: Full-width tray slides down below header
- **Animation**: Fade + slide (opacity 0→1, y -20→0)
- **Duration**: 300ms with custom easing

## Key Features

### 1. Mega Menu System

Each navigation item has a `megaMenu` object with sections:

```typescript
{
  label: "Films",
  href: "#signature-work",
  megaMenu: {
    sections: [
      {
        title: "Latest Films",
        links: [
          { label: "Ari & Billy", href: "#signature-work", subtitle: "Malibu" }
        ]
      }
    ]
  }
}
```

### 2. Smart Close Delay

- **Delay**: 150ms timeout before closing
- **Prevents**: Flickering when mouse moves between header and menu
- **Cleanup**: Timeout cleared on re-enter
- **Accessibility**: Also opens on keyboard focus

### 3. Positioning

Mega menu top position adjusts based on scroll state:
- **Not scrolled**: `69px` (header height)
- **Scrolled**: `73px` (slightly taller with border)

### 4. Typography Hierarchy

```
Header Nav:    text-sm, uppercase, tracking-wide, font-medium
Menu Titles:   text-xs, uppercase, tracking-widest, semibold, 60% opacity
Menu Links:    text-lg, serif font, full opacity
Subtitles:     text-sm, 60% opacity
```

## Customizing

### Change Mega Menu Content

Edit `content/home.ts`:

```typescript
export const navigation = {
  left: [
    {
      label: "Films",
      href: "#signature-work",
      megaMenu: {
        sections: [
          {
            title: "Your Section",
            links: [
              { label: "Your Link", href: "#", subtitle: "Optional" }
            ]
          }
        ]
      }
    }
  ]
}
```

### Adjust Timings

In `Header.tsx`:

```typescript
// Close delay (line 42-44)
setTimeout(() => {
  setActiveMegaMenu(null);
}, 150); // Change this value

// Mega menu animation (line 112)
transition={{ duration: 0.3 }} // Change this value
```

### Modify Scroll Threshold

```typescript
// Line 27
setIsScrolled(window.scrollY > 50); // Change 50 to your preference
```

## Design Principles Applied

### ✅ What We Do
- Opacity transitions (70% on hover)
- Full-width mega menu trays
- Centered logo with balanced nav
- Transparent → frosted on scroll
- Minimal, uppercase nav text
- Serif font for menu content

### ❌ What We Avoid
- Individual hover background boxes
- Per-link highlighting
- Dropdown arrows or icons
- Busy animations
- Color changes on hover
- Anything that screams "menu bar"

## Technical Details

### Framer Motion Usage

```typescript
// Header slide-in
initial={{ y: -100 }}
animate={{ y: 0 }}
transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}

// Mega menu appear
initial={{ opacity: 0, y: -20 }}
animate={{ opacity: 1, y: 0 }}
exit={{ opacity: 0, y: -20 }}
```

### Event Handling Flow

```
1. Mouse enters nav item
   → Clear any pending close timeout
   → Set active mega menu

2. Mouse leaves header
   → Start 150ms close timeout

3. Mouse enters mega menu
   → Clear close timeout (keeps menu open)

4. Mouse leaves mega menu
   → Start 150ms close timeout
   → Menu closes after delay
```

## Browser Support

- Modern browsers with backdrop-filter support
- Fallback: opacity without blur on older browsers
- Tailwind handles prefixing for backdrop-blur

## Performance

- No re-renders on mouse move (only on enter/leave)
- Timeout cleanup prevents memory leaks
- AnimatePresence handles unmounting animations
- Minimal DOM updates

---

**Philosophy**: The header doesn't introduce the site — it belongs to it. Restraint over decoration. Space and typography over effects.
