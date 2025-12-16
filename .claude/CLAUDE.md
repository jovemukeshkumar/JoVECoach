# JoVe Landing Page - Codebase Documentation

## Project Overview
This is an Astro-based landing page for JoVE Coach, a STEM learning platform. The site is deployed on Vercel and served via reverse proxy at `coach.preview-cbcts.test.jove.com/pp/`.

## Key Configuration

### Deployment Setup
- **Vercel URL**: `https://jovecoachlp.vercel.app/`
- **Production URL**: `https://coach.preview-cbcts.test.jove.com/pp/`
- **Reverse Proxy**: Main React app forwards `/pp/*` paths to this Astro landing page
- **Vercel Rewrites**: Configured in `vercel.json` to strip `/pp` prefix when routing

### Environment Variables
- `PUBLIC_BACKEND_URL`: `https://celebrated-beauty-ac07850f26.strapiapp.com`
- Set both locally in `.env` and in Vercel dashboard

### Git Configuration
- **Repository**: `Raghavan-Identiti/JoVe`
- **Commit Author**: Raghavan (raghavan@identitidesign.com)
- **GitHub Auth**: Using `jovecoach` account
- **Main Branch**: `main`

## Project Structure

### Pages
- **index.astro** - Original homepage (with Navbar)
- **about.astro** - About page
- **pricing.astro** - Pricing page
- **jove-gen-lp.astro** - Main landing page (conversion-optimized, no navbar)

### Key Components

#### Layout
- **Layout.astro** - Main layout wrapper with:
  - SEO meta tags (Open Graph, Twitter Cards, JSON-LD schema)
  - Google Tag Manager integration
  - Vercel Speed Insights
  - Canonical URL: `https://coach.jove.com/pp`

#### Navigation
- **Navbar.astro** - Fetches header data from Strapi CMS
  - Uses `qs` for query string building
  - Implements sticky header behavior
  - Responsive design with mobile optimization

#### jove-gen-lp.astro Sections (in order):
1. **HeroSectionAlt** - Hero with video
2. **STEMStruggle** - Problem statement section
3. **FirstCTASection** - First call-to-action
4. **JoVECoachSteps** - How it works
5. **SecondCTASection** - Second call-to-action
6. **ConceptsSection** - STEM concepts showcase
7. **Testimonial** - Social proof
8. **LearnerPersonas** - Target audience segments
9. **PricingSection** - Pricing information
10. **JoveGenLpFaqs** - Frequently asked questions
11. **ZohoForm** - Lead capture form
12. **Footer** - Page footer

### CMS Integration
- **Backend**: Strapi Cloud
- **Data Fetching**: Uses `qs` for query building and `fetch` API
- **Content**: Header navigation, images, and content managed via Strapi

## Dependencies
- **astro**: ^5.15.9
- **axios**: ^1.13.2
- **qs**: ^6.14.0 (query string builder for Strapi)
- **@vercel/speed-insights**: ^1.3.1
- **@types/qs**: ^6.14.0

## Development

### Commands
```bash
npm install          # Install dependencies
npm run dev          # Start dev server (localhost:4321)
npm run build        # Build for production
npm run preview      # Preview production build
```

### Dev Server
- Configured with `host: true` for network access
- Runs on `http://localhost:4321`

## Important Notes

### Reverse Proxy Setup
- The main React app at `coach.preview-cbcts.test.jove.com` forwards `/pp/*` requests to this Astro app
- Vercel rewrites in `vercel.json` handle the path stripping
- All routes must be accessible at `/pp/*` path prefix

### Deployment
- Commits must be made with Raghavan's credentials for Vercel to deploy
- Vercel automatically deploys on push to `main` branch
- Speed Insights enabled for performance monitoring

### Styling
- Uses Inter font from Google Fonts
- Responsive design with mobile-first approach
- Smooth scrolling enabled globally

## Future Updates
- Document new components as they are added
- Update this file when configuration changes
- Track new integrations or third-party services
