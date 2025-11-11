# 🎞 Collection Images

Hero and card imagery for the pricing/collections pages.

## Expected Files

- `elopements.jpg` — Elopements & Intimate Gatherings
- `wedding-day.jpg` — Wedding Day Films
- `destination.jpg` — Destination Wedding Films
- `adventure.jpg` — Adventure Sessions & Stories

## File Requirements

| Requirement | Specification |
|-------------|---------------|
| Format | JPG or PNG |
| Size | 2000–3000px (long edge) |
| Aspect Ratio | 16:9 or 3:2 (landscape preferred) |
| Color | Warm, cinematic tones matching LVR brand |
| Quality | High resolution, suitable for web display |

## Updating Images

1. Export or select a cinematic still for each collection
2. Save as JPG/PNG (approx. 2000–3000px long edge)
3. Place into `public/collections` with exact filenames:
   - `elopements.jpg`
   - `wedding-day.jpg`
   - `destination.jpg`
   - `adventure.jpg`
4. Commit and push — no code changes required

```bash
git add public/collections/*.jpg
git commit -m "Update collection imagery"
git push
```

## Usage in Code

These files are automatically referenced by:
- Collection cards on `/pricing`
- Hero banners on each collection detail page (`/pricing/[slug]`)

Paths are managed in `content/pricing.ts`:

```ts
image: "/collections/elopements.jpg"
```

## Brand Guidelines

### Visual Style
- Soft, romantic lighting
- Warm color palette (rose wax red, warm sand, ivory)
- Cinematic framing and composition
- Focus on emotion and atmosphere

### Content Recommendations
- **Elopements:** Intimate moments, quiet ceremonies, rooftop vows
- **Wedding Day:** Full celebrations, dancefloors, emotional toasts
- **Destination:** Scenic locations, travel atmosphere, unique venues
- **Adventure:** Engagement shoots, day-after swims, candid moments

## Current Status

**Placeholders:** SVG placeholders are currently in place with LVR brand colors.

**Action:** Replace these SVG files with actual wedding film stills from your portfolio.

## Tips for Selection

1. **Export from final edits:** Pull poster frames from finished wedding films
2. **Variety:** Choose different lighting conditions and settings across the 4 images
3. **Consistency:** Maintain similar color grading and aesthetic
4. **Backups:** Keep high-res originals in your assets archive

---

*Part of the Love, Violeta Rose brand identity system*
