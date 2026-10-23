T# KanchanFlow Marketing Website

Marketing site for KanchanFlow, a manufacturing CRM (quotes, work orders,
shop-floor pipeline). Built for the Meru Technosoft frontend assignment.

**Live site:** <your Vercel link>

## Run locally

    npm install
    npm run dev

Production check: `npm run build` then `npm start`.

## Pages

- Home: hero with pipeline mockup, problem/solution, 6 features, industries,
  pricing teaser, FAQ, CTA
- Features: alternating feature rows and a comparison table
- Pricing: 3 plans with monthly/annual toggle and FAQ

## Tech

Next.js (App Router), TypeScript, Tailwind CSS, next/font, lucide-react,
react-icons (brand icons only).

## Design decisions

- **Colours:** graphite #1C1F23, molten gold #E0A526, light steel #E8EBEF.
  Gold on dark for emphasis, dark text on gold buttons for contrast.
  A darker gold (#8A6210) is used for small text on light backgrounds.
- **Fonts:** Barlow Condensed for headings (industrial, bold) and Inter for body.
- **Style:** hard edges, thin gold rules, alternating dark/light sections,
  no gradients, to fit an industrial B2B tone.
- **Content:** all copy lives in `lib/data.ts` so components stay clean.
- **Accessibility:** semantic landmarks, one h1 per page, skip link,
  keyboard-usable menu, FAQ accordion and billing switch, visible focus states,
  sr-only text for icon-only table cells, prefers-reduced-motion respected.

## Assumptions

- Plan prices are placeholders I invented.
- Buttons with `#` links and social links are placeholders.
- Product screens are built with HTML/CSS instead of screenshots.
- Copyright year is written as text because of Next.js Cache Components rules.

## With more time

- Add real photography with next/image
- Dark mode toggle and page transitions
- Working demo/contact form with validation and a success state
- Lighthouse screenshots for every page

## Lighthouse (mobile)

Screenshot: `lighthouse.png`