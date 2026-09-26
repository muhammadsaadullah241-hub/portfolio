/**
 * ------------------------------------------------------------------
 *  SITE CONFIG — brand, contact details, nav & global copy.
 * ------------------------------------------------------------------
 */

export const siteConfig = {
  brand: {
    // Freelance business — your name is the brand
    name: 'Muhammad Saad Ullah',
    productTag: 'AI Growth', // small tracked-out tag shown next to the wordmark
    tagline: 'Freelance AI growth consultant for local businesses.',
    description:
      'I help local businesses save time and win more customers with practical, done-for-you AI — chatbots, automated follow-ups, smart booking and AI marketing.',
  },

  // Repeated primary CTA
  cta: {
    label: 'Book a free AI growth audit',
    // TODO: replace with your real booking link (Calendly, Cal.com, etc.)
    href: '#contact',
  },

  contact: {
    email: 'khan793989@gmail.com',
    // Shown directly under the email in the contact section
    linkedin: 'https://www.linkedin.com/in/muhammad-saad-ullah-855850306/',
    linkedinLabel: 'linkedin.com/in/muhammad-saad-ullah',
    phone: '+1 (914) 343-1119',
    phoneHref: '+19143431119',
    location: 'New York, USA',
    responseNote: 'I reply within one business day.',
  },

  navLinks: [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Case studies', href: '#case-studies' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],

  founder: {
    name: 'Muhammad Saad Ullah',
    title: 'Freelance AI Growth Consultant',
    bio: "Hi, I'm Saad — a freelance AI growth consultant. I help local business owners save time and grow revenue using practical AI tools, without needing to understand any of the tech themselves.",
    image: '/assets/images/saad.webp',
    imageAlt: 'Muhammad Saad Ullah — photo',
  },

  images: {
    // Social share image (regenerated for the cream theme)
    og: '/assets/images/placeholder-og.jpg',
  },

  stats: {
    items: [
      { value: 20, suffix: '+', label: 'Local businesses served' },
      { value: 15, suffix: ' hrs', label: 'Saved per week, on average' },
      { value: 3, suffix: 'x', label: 'Faster lead response' },
      { value: 92, suffix: '%', label: 'Client retention rate' },
    ],
  },
}

export default siteConfig
