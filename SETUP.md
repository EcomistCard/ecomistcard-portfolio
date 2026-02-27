# Setup Instructions

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Customization Checklist

### Essential Updates

- [ ] Update email address in `components/sections/Contact.tsx` (line ~89)
- [ ] Update social media links in:
  - `components/sections/About.tsx`
  - `components/sections/Contact.tsx`
- [ ] Update SEO metadata in `app/layout.tsx`:
  - Author name
  - Open Graph image (add to `public/` folder)
- [ ] Replace favicon: Add your `favicon.ico` to `public/` folder

### Content Updates

- [ ] Update case studies in `components/sections/SelectedWork.tsx`
- [ ] Customize services in `components/sections/Services.tsx`
- [ ] Update About section text in `components/sections/About.tsx`
- [ ] Modify insights/blog posts in `components/sections/Authority.tsx`

### Optional Enhancements

- [ ] Add real project images to case studies
- [ ] Connect contact form to email service (e.g., Formspree, SendGrid)
- [ ] Add blog functionality if needed
- [ ] Set up analytics (Google Analytics, Plausible, etc.)

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms
- Netlify: Connect GitHub repo
- Self-hosted: Run `npm run build` then `npm start`

## Color Customization

Edit `tailwind.config.ts` to change:
- Background colors
- Accent colors
- Section contrast colors

## Notes

- Dark mode is the default
- Theme preference is saved in localStorage
- All animations are subtle and performance-optimized
- Fully responsive and mobile-first
