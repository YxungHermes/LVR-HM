# LVR Favicon System

This directory contains the favicon assets for the Love, Violeta Rose website.

## Current Assets

- `lvr-monogram.svg` - LVR monogram in serif type (Playfair Display 800)
- `rose-icon.svg` - Minimal rose line-art icon

## Generating PNG/ICO Files

To generate the required PNG and ICO files from the SVG sources:

### Using online tools:
1. Visit [Favicon Generator](https://realfavicongenerator.net/)
2. Upload `lvr-monogram.svg` or `rose-icon.svg`
3. Generate all required sizes:
   - `favicon.ico` (multi-size)
   - `favicon-16x16.png`
   - `favicon-32x32.png`
   - `favicon-180.png` (Apple touch icon)

### Using command line (ImageMagick):
```bash
# Convert SVG to PNG sizes
convert lvr-monogram.svg -resize 16x16 favicon-16x16.png
convert lvr-monogram.svg -resize 32x32 favicon-32x32.png
convert lvr-monogram.svg -resize 180x180 favicon-180.png

# Generate ICO file
convert favicon-16x16.png favicon-32x32.png favicon.ico
```

## Quick Swap Instructions

To change the favicon:

1. Replace the desired SVG file (`lvr-monogram.svg` or `rose-icon.svg`)
2. Regenerate PNG/ICO files using the instructions above
3. The website will automatically use the new favicons (no code changes needed)

## Metadata Configuration

The favicon metadata is configured in `/app/layout.tsx`:

```tsx
export const metadata = {
  icons: {
    icon: [
      { url: '/favicons/favicon.ico', sizes: 'any' },
      { url: '/favicons/lvr-monogram.svg', type: 'image/svg+xml' }
    ],
    apple: [{ url: '/favicons/favicon-180.png', sizes: '180x180' }]
  }
}
```

## Brand Guidelines

**LVR Monogram:**
- Font: Playfair Display 800
- Letter spacing: 0.04em
- Color: Cinematic Black (#1C1A18)
- Background: Ivory White (#FAF7F2)

**Rose Icon:**
- Stroke color: Rose Wax Red (#A14C41)
- Stroke width: 1.5px
- Background: Ivory White (#FAF7F2)
- Style: Minimal line-art

## Browser Support

- Modern browsers: Use SVG favicon
- Safari/iOS: Use Apple touch icon (180x180 PNG)
- Legacy browsers: Use favicon.ico

---

*Part of the Love, Violeta Rose brand identity system*
