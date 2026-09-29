# Master Prompt: AI-Powered Business Growth Agency — Portfolio & Sales Website

Copy everything below into your AI code assistant (Claude, Cursor, v0, etc.) as a single instruction.

---

## ROLE

You are a senior frontend developer and conversion-focused UI/UX designer. Build a **complete, single-page (or multi-section) React JS website** that acts as a **sales portfolio** for a boutique agency that helps **local businesses** grow by integrating **AI into their business operations and marketing** — boosting productivity and bringing in more customers.

The site must feel **premium, modern, and frictionless** — fast to scan, easy to trust, and easy to convert (contact/book a call).

---

## TECH STACK & SETUP

- **React JS** (Vite + React, functional components, hooks only).
- **Tailwind CSS** for styling (utility-first, no custom CSS files unless necessary).
- **Framer Motion** for smooth scroll/entrance animations (subtle, not distracting).
- **React Icons** or **Lucide React** for icons.
- Fully responsive: mobile-first, then tablet, then desktop (test at 375px, 768px, 1024px, 1440px).
- Clean folder structure: `/components`, `/assets`, `/data` (for dummy content as JS objects, easy to edit later).
- All images should use a placeholder path like `/assets/images/placeholder-*.jpg` with a clear comment `// TODO: replace with real image` so I can swap them later.
- Add smooth scrolling, sticky navbar, and scroll-to-section links.

---

## BRAND IDENTITY (use as default, but feel free to make it feel premium)

- **Agency Name:** NovaGrowth AI *(placeholder — I will change later, keep it configurable in one `siteConfig.js` file)*
- **Tagline:** "We turn local businesses into AI-powered growth machines."
- **Tone:** confident, friendly, results-driven — not overly technical/jargon-heavy since audience is local business owners (restaurants, salons, clinics, gyms, retail shops, real estate agents, etc.), not developers.
- **Color palette:** deep navy/charcoal background sections mixed with clean white sections, with a vibrant accent (electric blue or violet gradient) for CTAs and highlights. Include a dark hero with gradient mesh/blob background.
- **Typography:** modern sans-serif (e.g., "Inter" or "Manrope" from Google Fonts), bold large headings, generous whitespace.

---

## FRICTIONLESS UI PRINCIPLES (must follow)

1. One primary CTA repeated consistently: **"Book a Free AI Growth Audit"** (button appears in navbar, hero, mid-page, and footer).
2. No more than 2 clicks to reach the contact form from anywhere.
3. Sticky navbar with active-section highlighting on scroll.
4. Mobile hamburger menu with slide-in animation.
5. Fast perceived performance: skeleton/placeholder loading states, lazy-loaded images.
5. Micro-interactions: button hover states, card lift-on-hover, subtle fade/slide-in on scroll (use `whileInView` from Framer Motion).
6. Forms have inline validation, clear labels, and a success confirmation state (no page reload).
7. Accessible: proper contrast ratios, alt text on all images, keyboard-navigable menu, semantic HTML tags.

---

## PAGE STRUCTURE & SECTIONS (build all of these as components)

### 1. Navbar
- Logo (text-based placeholder logo), nav links (Home, Services, Work, Case Studies, About, Contact), CTA button.
- Sticky on scroll with background blur/shadow.

### 2. Hero Section
- Big headline: "We Help Local Businesses Grow Faster — With AI."
- Subheadline: "From smart chatbots to automated marketing, we integrate AI tools that save you time and bring you more customers — without the tech headache."
- Primary CTA: "Book a Free AI Growth Audit" + secondary "See Our Work".
- Founder/owner photo placeholder (circular, with soft shadow/glow) — add a placeholder image with `alt="Founder photo — replace with real photo"`.
- Trust badges row below hero: "Trusted by 20+ local businesses", small dummy logos placeholder row (grayscale local business icons — bakery, salon, gym, clinic, real estate).

### 3. Problem/Value Section
- 3-column layout: "Losing customers to competitors", "Wasting hours on manual work", "No time to follow up with leads" → each paired with how AI solves it.

### 4. Services Section
Create 4–6 service cards (icon + title + 2-line description):
1. **AI Chatbot & Customer Support Automation** — 24/7 instant replies on WhatsApp/website, never miss a lead.
2. **AI-Powered Lead Generation & Follow-up** — automated follow-ups via SMS/email so no customer falls through the cracks.
3. **Smart Booking & Scheduling Automation** — AI handles appointments, reminders, and rescheduling.
4. **AI Marketing Content Engine** — auto-generated social posts, ads, and offers tailored to local audience.
5. **Business Data Dashboard & Insights** — AI-driven analytics showing what's working and what's not.
6. **Custom Website + AI Integration** — modern website wired directly into your AI tools.

### 5. Featured/Dummy Projects (Portfolio)
Create 4–6 **dummy project cards** (grid layout with image placeholder, business name, category tag, 1-line result stat). Generate realistic **fictional local business names** and outcomes, e.g.:
- "Bella's Bakery" — Restaurant — "Automated ordering chatbot → +32% repeat orders"
- "FitCore Gym" — Fitness — "AI lead follow-up system → +45% trial-to-membership conversion"
- "GreenLeaf Dental Clinic" — Healthcare — "Smart appointment booking → cut no-shows by 60%"
- "Urban Cuts Barbershop" — Local Retail/Service — "WhatsApp AI booking assistant → 3x more bookings"
- "Home & Key Realty" — Real Estate — "AI lead qualification → saved 15 hrs/week"
- "Sunrise Cafe" — Restaurant — "AI-generated social content → 2x Instagram engagement"

Each card: clickable → opens a modal or detail section with more dummy detail (challenge, solution, result stats with animated counters).

### 6. Case Studies Section (deeper storytelling — pick 2–3 from above)
For each, structure as:
- **The Challenge** (1–2 sentences on the business's problem)
- **The Solution** (what AI system/tool was integrated)
- **The Result** (quantified, use animated stat counters, e.g., "+40% customers", "20 hrs/week saved", "3x faster response time")
- Include a short **dummy testimonial quote** with a placeholder avatar image and fictional name/title (e.g., "Ayesha K., Owner — Bella's Bakery").

### 7. About / Why Us Section
- Founder photo placeholder + short bio: "Hi, I'm [] — I help local business owners save time and grow revenue using practical AI tools, without needing to understand any of the tech myself." *(make this editable via siteConfig.js)*
- 3–4 trust points with icons: "Personalized strategy, not templates", "No long-term lock-in contracts", "Results-focused, not tech-jargon", "Ongoing support & optimization".

### 8. Process/How It Works Section
Simple 4-step horizontal/vertical timeline:
1. Free AI Growth Audit call
2. Custom AI strategy & tool selection
3. Build & integrate (1–2 weeks)
4. Launch, monitor & optimize

### 9. Testimonials Section
3–4 dummy testimonials in a carousel or grid — fictional names, business types, 1–2 sentence quotes, star ratings, placeholder avatar images.

### 10. FAQ Section
Accordion with 5–6 common objections handled, e.g.:
- "I'm not techy, will this be hard to use?"
- "How fast will I see results?"
- "Is this expensive?"
- "Do I need to change my current tools?"
- "What if I already have a website?"

### 11. Final CTA Section
Bold gradient background, big headline: "Ready to bring more customers in with AI?" + CTA button + small reassurance text ("Free 20-minute audit call. No obligation.").

### 12. Contact Section / Footer
- Simple contact form: Name, Business Name, Phone/Email, "What's your biggest challenge?" (dropdown), Submit button with success state.
- Footer: logo, nav links, social icons (placeholder links), copyright, "Made with ❤️ + AI".

---

## DATA STRUCTURE REQUIREMENT

Put all editable dummy content (business name, tagline, services array, projects array, case studies array, testimonials array, founder bio, image paths) into a single `/src/data/siteData.js` file exporting clean JS objects/arrays — so I can update text and swap images later **without touching component code**.

---

## DELIVERABLE

- Full working React app (all components, App.jsx, data file, Tailwind config, index.html with Google Fonts linked).
- Clean, commented code.
- Every placeholder image/text clearly marked with `// TODO: replace` comments.
- After building, give me a short list of exactly which files/images I need to replace with my real photo, logo, and real case study details.

Now build the complete website.
