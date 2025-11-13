# Claude Session Notes – LVR Website Build 2025

Use this file as a running history of what changed.

---

## Session 2025-11-13 – Full-screen cinematic scroll experience

**Focus**
- Implement full-screen hero with proper header height accounting
- Add scroll snapping for cinematic slide-based homepage experience
- Create subtle scroll affordance to guide users
- Refine scroll snap behavior from mandatory to proximity mode

**Files touched**
- `app/page.tsx` - Added scroll snap container (snap-proximity mode)
- `components/Hero.tsx` - Full-screen layout + scroll affordance button
- `components/ChooseYourStory.tsx` - Full-screen section with ID for scroll target
- `components/Contact.tsx` - Full-screen section with centered content
- `docs/PROJECT-OVERVIEW.md` - Created project documentation structure
- `docs/Site-Performance-&-UX-Audit-2025.md` - Created master audit checklist
- `docs/SESSION-NOTES.md` - This file

**Key decisions**

1. **Hero full-screen implementation:**
   - Changed from `h-[92vh]` to `min-h-screen` for true viewport fill
   - Added `pt-[56px] md:pt-[72px]` to content container to account for fixed header
   - Ensures no "peek" of next section on any device

2. **Scroll snap behavior:**
   - Initially implemented `snap-mandatory` for forced snapping
   - User feedback: wanted more organic, s-curve feel with "room before moving"
   - **Final decision:** Switched to `snap-proximity` for gentle magnetic pull
   - This gives freedom while scrolling, only snaps when close to sections
   - More premium, less jarring on both desktop and mobile

3. **Scroll affordance:**
   - Added subtle "Scroll" label + animated chevron at bottom of hero
   - Framer Motion animation: gentle bounce (1.5s infinite loop)
   - Clicking smoothly scrolls to `#choose-your-story` section
   - Appears after 1.2s delay to avoid overwhelming hero entrance

4. **Section structure:**
   - Each major section wrapped in `<div className="snap-start">`
   - All sections now `min-h-screen` for consistent full-height slides
   - Creates cinematic sequence: Hero → Choose Your Story → Contact
   - Scroll snapping only enabled on homepage, other routes unaffected

**Technical notes**
- TypeScript: All checks passing
- Build: Font fetch failed locally (network issue), will work on Vercel
- Accessibility: Scroll cue has `aria-label="Scroll to next section"`
- Comments: Added detailed explanations for header height calc and scroll snap

**User feedback**
- "I like the scroll snap I do. can we give it a little more room before moving to the next one im trying to get it to a nice place so it feels nice think s curve with a little snap"
- This led to the snap-mandatory → snap-proximity refinement

**Commits**
1. `2c7e0e7` - Implement full-screen cinematic scroll experience
2. `dab97e6` - Refine scroll snap behavior: switch to proximity mode for organic feel

**Follow-ups for next session**
- [ ] Test scroll experience on real iOS devices (Safari address bar behavior)
- [ ] Consider adding smooth scroll polyfill for older browsers
- [ ] Monitor Vercel deployment to verify scroll snap works in production
- [ ] Potentially add keyboard shortcuts for section navigation (arrow keys)
- [ ] Consider adding scroll progress indicator if user wants more visual feedback
- [ ] Test with additional sections when SignatureWork/Packages are re-enabled
