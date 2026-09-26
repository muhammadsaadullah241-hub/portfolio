import {
  Bot,
  BarChart3,
  CalendarClock,
  Globe,
  Megaphone,
  Users,
  Timer,
  ShieldCheck,
  HeartHandshake,
  Sparkles,
  ClipboardCheck,
  PencilRuler,
  Rocket,
} from 'lucide-react'

/**
 * ------------------------------------------------------------------
 *  SITE DATA — all portfolio content lives here.
 *
 *  Every project and case study below is fully written out (overview,
 *  challenge, approach, deliverables, tech stack, measurable results,
 *  before/after breakdown and a testimonial) so the site never shows
 *  empty placeholder boxes. Swap the names, numbers and copy for your
 *  real client work — the UI reads everything from this file.
 *
 *  `visual` selects which product mockup the SystemVisual component
 *  renders: 'chatbot' | 'leads' | 'booking' | 'schedule' | 'crm' | 'content'
 * ------------------------------------------------------------------
 */

/* Trust badges shown under the hero */
export const trustBadges = {
  headline: 'Trusted by 20+ local businesses',
  logos: [
    { name: "Bella's Bakery" },
    { name: 'FitCore Gym' },
    { name: 'GreenLeaf Dental' },
    { name: 'Urban Cuts' },
    { name: 'Home & Key Realty' },
  ],
}

/* Auto-scrolling strip under the hero (design.md ticker pattern) */
export const ticker = [
  'WhatsApp assistants',
  'Instagram content',
  'Google Business',
  'Email & SMS follow-up',
  'Online booking',
  'Review replies',
  'Paid ads',
  'Lead qualification',
]

/* Problem → AI solution, framed as the old way vs the AI way */
export const oldVsNew = {
  oldWayTitle: 'The old way',
  newWayTitle: 'The AI way',
  oldWay: [
    'The phone rings during the rush and four in ten calls go unanswered.',
    'Leads wait a day for a reply, then book with a competitor instead.',
    'Appointments are kept in a paper diary and no-shows pile up.',
    'Marketing is a once-a-week afterthought you never have time for.',
  ],
  newWay: [
    'An assistant answers every enquiry instantly, 24/7, on WhatsApp and web.',
    'Every lead is followed up automatically until they book — even overnight.',
    'Smart booking sends reminders and refills cancellations by itself.',
    'A content engine produces a month of on-brand posts in one sitting.',
  ],
}

/* Services grid */
export const services = [
  {
    icon: Bot,
    title: 'AI Chatbot & Support Automation',
    description:
      '24/7 instant replies on WhatsApp and your website. Never miss a lead or leave a customer waiting.',
  },
  {
    icon: Users,
    title: 'AI Lead Generation & Follow-up',
    description:
      'Automated SMS and email follow-ups so no enquiry ever falls through the cracks again.',
  },
  {
    icon: CalendarClock,
    title: 'Smart Booking & Scheduling',
    description:
      'AI handles appointments, reminders and rescheduling — cutting no-shows and double-bookings.',
  },
  {
    icon: Megaphone,
    title: 'AI Marketing Content Engine',
    description:
      'Auto-generated social posts, ads and local offers tailored to your neighbourhood audience.',
  },
  {
    icon: BarChart3,
    title: 'Business Data Dashboard & Insights',
    description:
      'AI-driven analytics that show exactly what is working, what is not, and where to focus next.',
  },
  {
    icon: Globe,
    title: 'Custom Website + AI Integration',
    description:
      'A modern, fast website wired directly into every AI tool we set up for you.',
  },
]

/* ------------------------------------------------------------------ */
/*  PORTFOLIO PROJECTS                                                */
/* ------------------------------------------------------------------ */
export const projects = [
  {
    id: 'bellas-bakery',
    name: "Bella's Bakery",
    category: 'Restaurant & Bakery',
    location: 'Portland, OR',
    timeline: '3-week build',
    headline: '+32% repeat orders',
    tagline: 'A WhatsApp ordering assistant that never misses a call',
    summary:
      'A 24/7 WhatsApp AI assistant that takes custom cake and catering orders, confirms pickups and brings past customers back — without the owner ever picking up the phone.',
    visual: 'chatbot',
    overview:
      'Bella\'s Bakery is a family-run bakery doing 600+ orders a month across walk-ins, phone orders and catering. Beloved locally, but run by a team of four with no back office.',
    challenge:
      'During the 11am–2pm rush, the phone rang nonstop. Four in ten calls went unanswered, and almost all of those customers simply ordered from a competitor instead. That was roughly $3,400 in lost sales every single month — the bakery\'s single biggest leak.',
    approach: [
      'Audited 300 past orders and mapped the 12 questions customers ask most',
      'Built a WhatsApp assistant loaded with the live menu, pricing and lead times',
      'Automated seasonal win-back messages to every past customer',
    ],
    solution:
      'We deployed a WhatsApp AI ordering assistant that captures custom cake and catering orders, confirms details and pickup times, and automatically re-engages past customers with seasonal offers. Orders flow into a simple dashboard the owner checks once a day.',
    deliverables: [
      'WhatsApp ordering assistant',
      'Live menu & pricing catalog',
      'Pickup scheduling + reminders',
      'Automated win-back campaigns',
      'Owner order dashboard',
    ],
    stack: ['WhatsApp Business API', 'OpenAI', 'n8n', 'Stripe'],
    results: [
      { value: 32, suffix: '%', label: 'More repeat orders' },
      { value: 9, suffix: ' hrs', label: 'Saved every week' },
      { value: 2, suffix: 'x', label: 'Peak-hour order capacity' },
      { value: 48, suffix: 's', label: 'Average reply time' },
    ],
    before: [
      { label: 'Monthly orders', before: '640', after: '845' },
      { label: 'Missed peak calls', before: '41%', after: '2%' },
      { label: 'Average reply time', before: '4 hours', after: '48 seconds' },
    ],
    testimonial: {
      quote:
        'I used to dread the lunch rush. Now the AI takes orders while I bake — and customers tell me it is the easiest ordering they have ever done.',
      name: 'Bella Nguyen',
      title: 'Owner — Bella\'s Bakery',
      initials: 'BN',
    },
  },
  {
    id: 'fitcore-gym',
    name: 'FitCore Gym',
    category: 'Fitness Studio',
    location: 'Austin, TX',
    timeline: '2-week build',
    headline: '+45% trial-to-membership',
    tagline: 'A follow-up engine that turns cold trials into members',
    summary:
      'An AI lead follow-up system that contacts every free-trial signup within 60 seconds, nurtures them for 10 days and books them straight into an intro session.',
    visual: 'leads',
    overview:
      'FitCore Gym is a 1,400-member independent gym with a small front-desk team of two. Marketing was working — converting the leads was not.',
    challenge:
      'The gym generated around 180 free-trial signups a month, but only 23% ever became members. Leads sat in an inbox for an average of 31 hours, by which point most had joined somewhere closer or lost interest. Staff knew follow-up mattered but simply had no time between serving members.',
    approach: [
      'Connected every signup source into one automated lead pipeline',
      'Wrote a 6-touch SMS + email nurture sequence in the gym\'s own voice',
      'Let the AI book interested leads directly into a staffed intro session',
    ],
    solution:
      'We built an AI follow-up engine that texts every new trial lead within a minute, answers common questions, books intro sessions and hands warm members to the front desk — plus recovers no-shows with a soft re-offer.',
    deliverables: [
      'Instant 60-second lead response',
      '10-day multi-touch nurture sequence',
      'Automated intro-session booking',
      'No-show recovery flow',
      'Conversion reporting dashboard',
    ],
    stack: ['Twilio', 'OpenAI', 'HubSpot', 'Zapier'],
    results: [
      { value: 45, suffix: '%', label: 'Trial-to-member conversion' },
      { value: 3, suffix: 'x', label: 'Faster first contact' },
      { value: 120, suffix: '+', label: 'Extra members per year' },
      { value: 86000, prefix: '$', label: 'Added annual revenue' },
    ],
    before: [
      { label: 'Trial-to-member rate', before: '23%', after: '45%' },
      { label: 'First response time', before: '31 hours', after: '45 seconds' },
      { label: 'Follow-ups per lead', before: '1', after: '6' },
    ],
    testimonial: {
      quote:
        'We stopped losing leads overnight. The AI follows up better than we ever could — and our conversion rate nearly doubled in eight weeks.',
      name: 'Ayesha Khan',
      title: 'Owner — FitCore Gym',
      initials: 'AK',
    },
  },
  {
    id: 'greenleaf-dental',
    name: 'GreenLeaf Dental Clinic',
    category: 'Healthcare',
    location: 'Denver, CO',
    timeline: '4-week build',
    headline: 'No-shows cut by 60%',
    tagline: 'Smart booking that keeps every chair full',
    summary:
      'An AI booking and reminder system integrated with the clinic\'s practice software — cutting no-shows, filling cancellations and giving the front desk its day back.',
    visual: 'booking',
    overview:
      'GreenLeaf Dental Clinic is a three-dentist clinic seeing 900+ patients a month. Excellent clinical reputation, but an appointment book held together with phone calls and paper.',
    challenge:
      'Nineteen percent of appointments were being missed, and every empty chair cost the clinic roughly $260. Patients found rescheduling so fiddly that many simply did not bother. Reception spent its whole day on the phone, and cancellations rarely got refilled.',
    approach: [
      'Synced online booking two-way with the existing practice-management software',
      'Built a 3-touch reminder journey across SMS and email',
      'Added one-tap rescheduling and an automatic waitlist to refill gaps',
    ],
    solution:
      'We integrated smart AI booking across the website and Google profile, with automatic confirmations, reminders and one-tap rescheduling. When a patient cancels, the AI instantly offers the slot to the waitlist.',
    deliverables: [
      'Two-way calendar integration',
      'Online booking widget',
      'SMS + email reminder journey',
      'One-tap rescheduling',
      'Automated waitlist fill',
    ],
    stack: ['Open Dental API', 'Twilio', 'OpenAI', 'Google Calendar'],
    results: [
      { value: 60, suffix: '%', label: 'Fewer no-shows' },
      { value: 15000, prefix: '$', label: 'Recovered monthly' },
      { value: 8, suffix: ' hrs', label: 'Front-desk time saved weekly' },
      { value: 100, suffix: '%', label: 'Appointments confirmed' },
    ],
    before: [
      { label: 'No-show rate', before: '19%', after: '7.6%' },
      { label: 'Time to reschedule', before: '2 phone calls', after: '1 tap' },
      { label: 'Monthly recovered revenue', before: '$0', after: '$15,000' },
    ],
    testimonial: {
      quote:
        'Our calendar runs itself now. Patients love the reminders and we finally stopped bleeding money on empty slots.',
      name: 'Dr. Omar Rahman',
      title: 'Principal dentist — GreenLeaf Dental Clinic',
      initials: 'OR',
    },
  },
  {
    id: 'urban-cuts',
    name: 'Urban Cuts Barbershop',
    category: 'Local Service',
    location: 'Brooklyn, NY',
    timeline: '2-week build',
    headline: '3x more bookings',
    tagline: 'Walk-ins only, to fully booked on WhatsApp',
    summary:
      'A WhatsApp AI booking assistant plus automated off-peak offers that filled the quiet afternoons and ended phone tag for good.',
    visual: 'schedule',
    overview:
      'Urban Cuts Barbershop is a three-chair barbershop with a loyal following but a strictly walk-in model that made income unpredictable.',
    challenge:
      'Tuesdays and Wednesdays were running at about 30% capacity while weekends overflowed. The owner could not answer the phone mid-cut, so potential clients rang out and never called back. There was no way to market the quiet hours.',
    approach: [
      'Launched WhatsApp booking that takes a reservation in under 20 seconds',
      'Set up automated off-peak offers to regulars',
      'Added reminders to cut no-shows and a waitlist for weekend demand',
    ],
    solution:
      'We built a WhatsApp AI booking assistant that holds the calendar, sends confirmations and reminders, and automatically nudges regulars with quiet-hour offers when bookings dip.',
    deliverables: [
      'WhatsApp booking assistant',
      'Automated off-peak promotions',
      'Appointment reminders',
      'Smart waitlist',
      'Weekly utilisation report',
    ],
    stack: ['WhatsApp Business API', 'OpenAI', 'Google Calendar'],
    results: [
      { value: 3, suffix: 'x', label: 'More bookings' },
      { value: 41, suffix: '%', label: 'Quiet hours filled' },
      { value: 52, suffix: '%', label: 'Fewer no-shows' },
      { value: 24, suffix: '/7', label: 'Booking availability' },
    ],
    before: [
      { label: 'Weekly bookings', before: '45', after: '135' },
      { label: 'Tue/Wed utilisation', before: '30%', after: '58%' },
      { label: 'No-show rate', before: '14%', after: '7%' },
    ],
    testimonial: {
      quote:
        'I am not a tech person at all, but the team made it effortless. Within two weeks our bookings tripled and I stopped living on the phone.',
      name: 'Priya Shah',
      title: 'Owner — Urban Cuts Barbershop',
      initials: 'PS',
    },
  },
  {
    id: 'home-and-key',
    name: 'Home & Key Realty',
    category: 'Real Estate',
    location: 'Miami, FL',
    timeline: '3-week build',
    headline: '15 hrs/week saved',
    tagline: 'AI qualification that gives agents their evenings back',
    summary:
      'An AI lead qualification system that asks the right questions, scores every buyer and books viewings — so agents only spend time with serious clients.',
    visual: 'crm',
    overview:
      'Home & Key Realty is a boutique agency of six agents listing residential property across Miami-Dade.',
    challenge:
      'Portal leads arrived around the clock, but agents were responding nine hours later on average and burning their evenings chasing unqualified enquiries. Only about a third of leads were genuine buyers, and viewings were consistently under-booked despite plenty of interest.',
    approach: [
      'Built an AI qualifier that collects budget, timeline, location and financing',
      'Scored and ranked every lead so agents see hot buyers first',
      'Automated viewing booking and handed agents a ready-made summary',
    ],
    solution:
      'We deployed an AI lead qualification assistant that engages every enquiry in seconds, asks the questions agents would, and books qualified buyers straight into a viewing — with a one-paragraph brief for the agent.',
    deliverables: [
      'Instant AI lead qualification',
      'Buyer scoring & ranking',
      'Automated viewing booking',
      'Agent handoff summaries',
      'Pipeline CRM sync',
    ],
    stack: ['OpenAI', 'HubSpot', 'Calendly', 'Twilio'],
    results: [
      { value: 15, suffix: ' hrs', label: 'Saved per week' },
      { value: 2, suffix: 'x', label: 'Viewings booked' },
      { value: 88, suffix: '%', label: 'Leads auto-qualified' },
      { value: 45, suffix: 's', label: 'Response time' },
    ],
    before: [
      { label: 'First response time', before: '9 hours', after: '45 seconds' },
      { label: 'Leads auto-qualified', before: '0%', after: '88%' },
      { label: 'Viewings per week', before: '6', after: '12' },
    ],
    testimonial: {
      quote:
        'The lead follow-up system paid for itself in the first month. We simply do not lose enquiries anymore, and my agents are home for dinner.',
      name: 'Daniel Martinez',
      title: 'Manager — Home & Key Realty',
      initials: 'DM',
    },
  },
  {
    id: 'sunrise-cafe',
    name: 'Sunrise Cafe',
    category: 'Cafe',
    location: 'Seattle, WA',
    timeline: '2-week build',
    headline: '2x Instagram engagement',
    tagline: 'A month of content, generated in one sitting',
    summary:
      'An AI content engine that writes, designs and schedules a full month of on-brand local posts and offers — turning a once-a-week afterthought into a daily presence.',
    visual: 'content',
    overview:
      'Sunrise Cafe is a neighbourhood coffee shop competing with a new chain on every corner.',
    challenge:
      'The owner knew social media mattered but posted barely once a week, with flat engagement and no strategy. Weekend covers were soft and there was no system for promoting seasonal drinks or events.',
    approach: [
      'Captured the cafe\'s voice, menu and neighbourhood feel',
      'Set an AI engine to generate 30 days of captions, offers and visuals',
      'Scheduled everything and routed replies and reviews back to the owner',
    ],
    solution:
      'We built an AI marketing content engine that produces a month of local, on-brand posts, seasonal offers and event promos in a single review session, then schedules them automatically.',
    deliverables: [
      'Brand voice profile',
      'Monthly content calendar',
      'AI-generated captions & offer posts',
      'Automated scheduling',
      'Engagement & review reporting',
    ],
    stack: ['OpenAI', 'Buffer', 'Canva API', 'Meta Graph API'],
    results: [
      { value: 2, suffix: 'x', label: 'Instagram engagement' },
      { value: 27, suffix: '%', label: 'More weekend covers' },
      { value: 30, suffix: '+', label: 'Posts scheduled monthly' },
      { value: 6, suffix: ' hrs', label: 'Saved every week' },
    ],
    before: [
      { label: 'Posts per month', before: '4', after: '32' },
      { label: 'Engagement rate', before: '1.8%', after: '3.9%' },
      { label: 'Weekend covers', before: '210', after: '267' },
    ],
    testimonial: {
      quote:
        'They speak plain English, not tech jargon. I finally understand what my marketing is actually doing — and it shows in the till.',
      name: 'Sofia Lopez',
      title: 'Owner — Sunrise Cafe',
      initials: 'SL',
    },
  },
]

/* ------------------------------------------------------------------ */
/*  DEEP-DIVE CASE STUDIES                                            */
/* ------------------------------------------------------------------ */
export const caseStudies = [
  {
    id: 'case-fitcore',
    client: 'FitCore Gym',
    category: 'Fitness Studio',
    location: 'Austin, TX',
    timeline: '2-week build · 8-week measurement',
    visual: 'leads',
    tagline: 'How a 60-second text turned 180 cold trials into a membership machine',
    photo: {
      src: '/assets/images/case-fitcore.jpg',
      alt: 'Modern gym floor with cardio equipment — representative photo',
    },
    industry: {
      stat: 'About 1 in 2 new gym members quit within six months.',
      source: 'HFA 2025 Benchmarking Report',
      url: 'https://www.healthandfitness.org/',
    },
    overview:
      'FitCore Gym is an independent 1,400-member gym. Their marketing was working beautifully — turning those leads into members was the problem.',
    challenge: [
      'The gym generated roughly 180 free-trial signups every month, but only 23% ever became paying members. Leads waited an average of 31 hours for a first reply, and by then most had lost interest or signed up somewhere closer to home.',
      'The two-person front desk genuinely wanted to follow up, but between checking in members and running the floor there was never time. Every unattended lead was money quietly walking out the door.',
    ],
    approach: [
      {
        step: '01',
        title: 'Unified the lead flow',
        text: 'Every signup source — the website, walk-ins and paid ads — now lands in a single automated pipeline within seconds.',
      },
      {
        step: '02',
        title: 'Wrote the nurture sequence',
        text: 'A six-touch SMS and email journey in the gym\'s own friendly voice, answering the objections that stall trials.',
      },
      {
        step: '03',
        title: 'Automated booking',
        text: 'Interested leads are booked straight into a staffed intro session, and no-shows get a soft re-offer automatically.',
      },
    ],
    solution:
      'We built an AI lead follow-up engine that contacts every trial lead within 60 seconds, nurtures them for ten days, books intro sessions and hands warm members to the front desk — then reports on every stage.',
    stack: ['Twilio', 'OpenAI', 'HubSpot', 'Zapier'],
    deliverables: [
      'Instant lead response',
      '10-day nurture sequence',
      'Automated intro booking',
      'No-show recovery',
      'Conversion dashboard',
    ],
    results: [
      { value: 45, suffix: '%', label: 'Trial-to-membership conversion' },
      { value: 20, suffix: ' hrs', label: 'Saved per week' },
      { value: 3, suffix: 'x', label: 'Faster response time' },
      { value: 86000, prefix: '$', label: 'Added annual revenue' },
    ],
    before: [
      { label: 'Trial-to-member rate', before: '23%', after: '45%' },
      { label: 'First response time', before: '31 hours', after: '45 seconds' },
      { label: 'Follow-ups per lead', before: '1', after: '6' },
      { label: 'Monthly new members', before: '41', after: '81' },
    ],
    roi: '$86,000 in added annual revenue — roughly a 34x return on the system.',
    testimonial: {
      quote:
        'We stopped losing leads overnight. The AI follows up better than we ever could — and our conversion rate nearly doubled in eight weeks.',
      name: 'Ayesha Khan',
      title: 'Owner — FitCore Gym',
      initials: 'AK',
    },
  },
  {
    id: 'case-greenleaf',
    client: 'GreenLeaf Dental Clinic',
    category: 'Healthcare',
    location: 'Denver, CO',
    timeline: '4-week build · 12-week measurement',
    visual: 'booking',
    tagline: 'Cutting no-shows by 60% and recovering $15,000 every month',
    photo: {
      src: '/assets/images/case-greenleaf.jpg',
      alt: 'Modern dental treatment room — representative photo',
    },
    industry: {
      stat: 'US dental practices average a 15–20% no-show rate — about $200–400 lost per missed visit.',
      source: 'Planet DDS industry benchmarks',
      url: 'https://www.dentalbase.ai/blogs/practice-management/dental-no-show-rate-statistics-cost',
    },
    overview:
      'GreenLeaf Dental Clinic is a three-dentist clinic seeing over 900 patients a month, with a stellar clinical reputation and an appointment book held together by phone calls.',
    challenge: [
      'Nineteen percent of appointments were being missed, and with each empty chair costing around $260, the clinic was bleeding close to $15,000 a month. Rescheduling was so fiddly that patients often gave up rather than move their slot.',
      'Reception spent its entire day on the phone, and when a last-minute cancellation came in there was no practical way to refill the gap. The problem was not demand — it was the system.',
    ],
    approach: [
      {
        step: '01',
        title: 'Two-way calendar sync',
        text: 'Online booking was wired directly into the clinic\'s existing practice-management software, so the team never double-books.',
      },
      {
        step: '02',
        title: 'Reminder journey',
        text: 'Patients receive three well-timed reminders across SMS and email, with a one-tap option to confirm or move their visit.',
      },
      {
        step: '03',
        title: 'Waitlist autofill',
        text: 'When someone cancels, the AI instantly offers the freed slot to a waiting patient — often filling it within minutes.',
      },
    ],
    solution:
      'We integrated smart AI booking across the website and Google profile, added automatic confirmations and reminders, and built one-tap rescheduling with an automatic waitlist to refill every gap.',
    stack: ['Open Dental API', 'Twilio', 'OpenAI', 'Google Calendar'],
    deliverables: [
      'Two-way calendar integration',
      'Online booking widget',
      'SMS + email reminders',
      'One-tap rescheduling',
      'Waitlist auto-fill',
    ],
    results: [
      { value: 60, suffix: '%', label: 'Fewer no-shows' },
      { value: 15000, prefix: '$', label: 'Recovered every month' },
      { value: 8, suffix: ' hrs', label: 'Front-desk time saved weekly' },
      { value: 100, suffix: '%', label: 'Appointments confirmed' },
    ],
    before: [
      { label: 'No-show rate', before: '19%', after: '7.6%' },
      { label: 'Time to reschedule', before: '2 phone calls', after: '1 tap' },
      { label: 'Cancellations refilled', before: '~10%', after: '73%' },
      { label: 'Monthly recovered revenue', before: '$0', after: '$15,000' },
    ],
    roi: '$180,000 in recovered annual revenue — the system paid for itself in 11 days.',
    testimonial: {
      quote:
        'Our calendar runs itself now. Patients love the reminders and we finally stopped bleeding money on empty slots.',
      name: 'Dr. Omar Rahman',
      title: 'Principal dentist — GreenLeaf Dental Clinic',
      initials: 'OR',
    },
  },
  {
    id: 'case-bellas',
    client: "Bella's Bakery",
    category: 'Restaurant & Bakery',
    location: 'Portland, OR',
    timeline: '3-week build · 10-week measurement',
    visual: 'chatbot',
    tagline: 'Turning a missed-call problem into +32% repeat orders',
    photo: {
      src: '/assets/images/case-bellas.jpg',
      alt: 'Freshly baked bread on display in a bakery — representative photo',
    },
    industry: {
      stat: 'Restaurants miss around 34% of calls — and 85% of callers never call back.',
      source: 'Slang AI call analysis',
      url: 'https://www.slang.ai/',
    },
    overview:
      'Bella\'s Bakery does 600+ orders a month with a team of four and no back office — wonderful product, chaotic order-taking.',
    challenge: [
      'The 11am–2pm rush was chaos. The phone rang constantly and four in ten calls went unanswered, and nearly all of those customers ordered elsewhere instead. That worked out to about $3,400 in lost sales every month.',
      'There was no way to bring past customers back, no record of who ordered what, and no way to take catering enquiries outside opening hours. Growth was capped by the phone, not the ovens.',
    ],
    approach: [
      {
        step: '01',
        title: 'Learned the menu',
        text: 'We analysed 300 past orders and mapped the twelve questions customers ask most, from flavour options to lead times.',
      },
      {
        step: '02',
        title: 'Built the assistant',
        text: 'A WhatsApp AI assistant took the full menu, pricing and pickup scheduling, handling orders end to end, 24/7.',
      },
      {
        step: '03',
        title: 'Brought customers back',
        text: 'Automated seasonal win-back messages re-engaged past buyers, lifting repeat orders without any ad spend.',
      },
    ],
    solution:
      'We deployed a WhatsApp AI ordering assistant that captures custom cake and catering orders, confirms details and pickup times, and automatically re-engages past customers with seasonal offers.',
    stack: ['WhatsApp Business API', 'OpenAI', 'n8n', 'Stripe'],
    deliverables: [
      'WhatsApp ordering assistant',
      'Live menu & pricing catalog',
      'Pickup scheduling + reminders',
      'Automated win-back campaigns',
      'Owner dashboard',
    ],
    results: [
      { value: 32, suffix: '%', label: 'More repeat orders' },
      { value: 9, suffix: ' hrs', label: 'Saved per week' },
      { value: 2, suffix: 'x', label: 'Peak-hour capacity' },
      { value: 3400, prefix: '$', label: 'Monthly revenue recovered' },
    ],
    before: [
      { label: 'Monthly orders', before: '640', after: '845' },
      { label: 'Missed peak calls', before: '41%', after: '2%' },
      { label: 'Average reply time', before: '4 hours', after: '48 seconds' },
      { label: 'Repeat-order rate', before: '22%', after: '29%' },
    ],
    roi: 'Monthly revenue rose from $21,000 to $27,900 — a 33% lift, mostly from orders that used to ring out.',
    testimonial: {
      quote:
        'I used to dread the lunch rush. Now the AI takes orders while I bake — and customers tell me it is the easiest ordering they have ever done.',
      name: 'Bella Nguyen',
      title: 'Owner — Bella\'s Bakery',
      initials: 'BN',
    },
  },
  {
    id: 'case-urban-cuts',
    client: 'Urban Cuts Barbershop',
    category: 'Local Service',
    location: 'Brooklyn, NY',
    timeline: '2-week build · 6-week measurement',
    visual: 'schedule',
    tagline: 'From walk-ins only to fully booked on WhatsApp',
    photo: {
      src: '/assets/images/case-urbancuts.jpg',
      alt: 'Barbershop interior with styling chairs — representative photo',
    },
    industry: {
      stat: 'Beauty and barbering no-show rates run 20–30% without reminders, falling to 5–10% with them.',
      source: '2026 Salon & Barbershop No-Show Report',
    },
    overview:
      'Urban Cuts Barbershop is a three-chair barbershop with a loyal following and a strictly walk-in model that made income unpredictable.',
    challenge: [
      'Tuesdays and Wednesdays were running at about 30% capacity while weekends overflowed. The owner could not answer the phone mid-cut, so clients rang out and never called back.',
      'With no way to promote the quiet hours and no reminders, no-shows quietly ate into a business already capped by chair time.',
    ],
    approach: [
      { step: '01', title: '20-second booking', text: 'A WhatsApp assistant that takes a reservation in under 20 seconds, any hour of the day.' },
      { step: '02', title: 'Fill the quiet hours', text: 'Automated off-peak offers go to regulars whenever the calendar dips.' },
      { step: '03', title: 'Cut the no-shows', text: 'Reminders and a smart waitlist keep chairs full and weekends flowing.' },
    ],
    solution:
      'We built a WhatsApp AI booking assistant that holds the calendar, sends confirmations and reminders, and automatically nudges regulars with quiet-hour offers when bookings dip.',
    stack: ['WhatsApp Business API', 'OpenAI', 'Google Calendar'],
    deliverables: [
      'WhatsApp booking assistant',
      'Automated off-peak promotions',
      'Appointment reminders',
      'Smart waitlist',
      'Weekly utilisation report',
    ],
    results: [
      { value: 3, suffix: 'x', label: 'More bookings' },
      { value: 41, suffix: '%', label: 'Quiet hours filled' },
      { value: 52, suffix: '%', label: 'Fewer no-shows' },
      { value: 24, suffix: '/7', label: 'Booking availability' },
    ],
    before: [
      { label: 'Weekly bookings', before: '45', after: '135' },
      { label: 'Tue/Wed utilisation', before: '30%', after: '58%' },
      { label: 'No-show rate', before: '14%', after: '7%' },
      { label: 'Time on the phone', before: '6 hrs / wk', after: '~0' },
    ],
    roi: 'Monthly revenue rose from $9,800 to $16,400 — almost all from hours that used to sit empty.',
    testimonial: {
      quote:
        'I am not a tech person at all, but the team made it effortless. Within two weeks our bookings tripled and I stopped living on the phone.',
      name: 'Priya Shah',
      title: 'Owner — Urban Cuts Barbershop',
      initials: 'PS',
    },
  },
  {
    id: 'case-home-key',
    client: 'Home & Key Realty',
    category: 'Real Estate',
    location: 'Miami, FL',
    timeline: '3-week build · 12-week measurement',
    visual: 'crm',
    tagline: 'AI qualification that gives agents their evenings back',
    photo: {
      src: '/assets/images/case-homekey.jpg',
      alt: 'Suburban American home for sale — representative photo',
    },
    industry: {
      stat: '78% of buyers work with the first agent to respond to their enquiry.',
      source: '2026 lead-response benchmarks',
    },
    overview:
      'Home & Key Realty is a boutique agency of six agents listing residential property across Miami-Dade.',
    challenge: [
      'Portal leads arrived around the clock, but agents replied nine hours later on average and burned their evenings chasing unqualified enquiries. Only about a third were genuine buyers.',
      'Viewings were under-booked despite plenty of interest, because nobody had time to sort the serious buyers from the tyre-kickers.',
    ],
    approach: [
      { step: '01', title: 'Qualify instantly', text: 'An AI assistant asks budget, timeline, location and financing the moment a lead arrives.' },
      { step: '02', title: 'Rank the pipeline', text: 'Every buyer is scored so agents only spend time on the hottest opportunities.' },
      { step: '03', title: 'Book the viewing', text: 'Qualified buyers are booked straight into a viewing with a one-paragraph brief for the agent.' },
    ],
    solution:
      'We deployed an AI lead qualification assistant that engages every enquiry in seconds, asks the questions agents would, and books qualified buyers into a viewing with a ready-made summary.',
    stack: ['OpenAI', 'HubSpot', 'Calendly', 'Twilio'],
    deliverables: [
      'Instant AI lead qualification',
      'Buyer scoring & ranking',
      'Automated viewing booking',
      'Agent handoff summaries',
      'Pipeline CRM sync',
    ],
    results: [
      { value: 15, suffix: ' hrs', label: 'Saved per week' },
      { value: 2, suffix: 'x', label: 'Viewings booked' },
      { value: 88, suffix: '%', label: 'Leads auto-qualified' },
      { value: 45, suffix: 's', label: 'Response time' },
    ],
    before: [
      { label: 'First response time', before: '9 hours', after: '45 seconds' },
      { label: 'Leads auto-qualified', before: '0%', after: '88%' },
      { label: 'Viewings per week', before: '6', after: '12' },
      { label: 'Agent admin / week', before: '18 hrs', after: '3 hrs' },
    ],
    roi: 'Two extra deals closed in the first quarter — over $34,000 in additional commission.',
    testimonial: {
      quote:
        'The lead follow-up system paid for itself in the first month. We simply do not lose enquiries anymore, and my agents are home for dinner.',
      name: 'Daniel Martinez',
      title: 'Manager — Home & Key Realty',
      initials: 'DM',
    },
  },
  {
    id: 'case-sunrise-cafe',
    client: 'Sunrise Cafe',
    category: 'Cafe',
    location: 'Seattle, WA',
    timeline: '2-week build · 10-week measurement',
    visual: 'content',
    tagline: 'A month of content, generated in one sitting',
    photo: {
      src: '/assets/images/case-sunrise.jpg',
      alt: 'Warm cafe interior with seating — representative photo',
    },
    industry: {
      stat: '74% of diners use social media to decide where to eat.',
      source: 'Restaurant social-media studies',
    },
    overview:
      'Sunrise Cafe is a neighbourhood coffee shop competing with a new chain on every corner.',
    challenge: [
      'The owner knew social media mattered but posted barely once a week, with flat engagement and no strategy. Weekend covers were soft and there was no system for promoting seasonal drinks or events.',
      'Every quiet moment went into making coffee, not marketing — so the cafe stayed invisible to the neighbourhood it served.',
    ],
    approach: [
      { step: '01', title: 'Capture the voice', text: 'We built a brand voice profile around the cafe, its menu and its neighbourhood.' },
      { step: '02', title: 'Generate the month', text: 'An AI engine produces 30 days of captions, offers and visuals for review in a single session.' },
      { step: '03', title: 'Schedule & route', text: 'Everything is scheduled automatically and reviews and replies are routed back to the owner.' },
    ],
    solution:
      'We built an AI marketing content engine that produces a month of local, on-brand posts, seasonal offers and event promos in one sitting, then schedules them automatically.',
    stack: ['OpenAI', 'Buffer', 'Canva API', 'Meta Graph API'],
    deliverables: [
      'Brand voice profile',
      'Monthly content calendar',
      'AI-generated captions & offer posts',
      'Automated scheduling',
      'Engagement & review reporting',
    ],
    results: [
      { value: 2, suffix: 'x', label: 'Instagram engagement' },
      { value: 27, suffix: '%', label: 'More weekend covers' },
      { value: 30, suffix: '+', label: 'Posts scheduled monthly' },
      { value: 6, suffix: ' hrs', label: 'Saved every week' },
    ],
    before: [
      { label: 'Posts per month', before: '4', after: '32' },
      { label: 'Engagement rate', before: '1.8%', after: '3.9%' },
      { label: 'Weekend covers', before: '210', after: '267' },
      { label: 'Time on marketing', before: '5 hrs / wk', after: '30 min' },
    ],
    roi: 'Weekend revenue climbed 19% as the cafe became the obvious local choice again.',
    testimonial: {
      quote:
        'They speak plain English, not tech jargon. I finally understand what my marketing is actually doing — and it shows in the till.',
      name: 'Sofia Lopez',
      title: 'Owner — Sunrise Cafe',
      initials: 'SL',
    },
  },
  {
    id: 'case-iron-peak',
    client: 'Iron Peak Plumbing',
    category: 'Home Services',
    location: 'Phoenix, AZ',
    timeline: '3-week build · 8-week measurement',
    visual: 'leads',
    tagline: 'Never losing another emergency call to voicemail',
    photo: {
      src: '/assets/images/case-ironpeak.jpg',
      alt: 'Home-services technicians on site — representative photo',
    },
    industry: {
      stat: 'Home-service businesses miss 27–62% of calls, and 85% of callers never call back.',
      source: '2026 missed-call statistics',
    },
    overview:
      'Iron Peak Plumbing is a family plumbing business running four vans, where jobs went to whoever answered first.',
    challenge: [
      'The team was on the tools all day, so after-hours and emergency calls went to voicemail. About one in three enquiries never got a reply at all, and the rest waited until the next morning — by then most homeowners had booked someone else.',
      'Quotes were never followed up either, so warm jobs quietly went cold and the owners had no idea how much revenue was slipping away.',
    ],
    approach: [
      { step: '01', title: 'Answer instantly, 24/7', text: 'An AI assistant captures every call and web enquiry in seconds and offers a booking window.' },
      { step: '02', title: 'Qualify the job', text: 'It asks the right questions — job type, urgency, postcode — and routes emergencies to the on-call van.' },
      { step: '03', title: 'Chase every quote', text: 'Automatic follow-up nudges turn unanswered quotes into booked work.' },
    ],
    solution:
      'We deployed an AI lead-capture and dispatch assistant that answers every enquiry instantly, qualifies the job, texts the customer a booking window, and follows up on open quotes until they are won or lost.',
    stack: ['OpenAI', 'Twilio', 'Jobber', 'Zapier'],
    deliverables: [
      '24/7 AI call & web capture',
      'Job qualification & routing',
      'Emergency on-call dispatch',
      'Quote follow-up sequences',
      'Owner lead dashboard',
    ],
    results: [
      { value: 100, suffix: '%', label: 'Enquiries answered' },
      { value: 3, suffix: 'x', label: 'More after-hours jobs' },
      { value: 38, suffix: '%', label: 'More quotes converted' },
      { value: 12, suffix: ' hrs', label: 'Saved per week' },
    ],
    before: [
      { label: 'Enquiries answered', before: '67%', after: '100%' },
      { label: 'Avg. response time', before: '11 hours', after: '40 seconds' },
      { label: 'Quote conversion', before: '24%', after: '38%' },
      { label: 'After-hours jobs / mo', before: '5', after: '16' },
    ],
    roi: 'Added roughly $9,200 a month in booked work — the system paid for itself in the first three weeks.',
    testimonial: {
      quote:
        'Before this, calls just fell through the cracks. Now every job gets answered and I get a text with the details. It honestly feels like having a full-time dispatcher.',
      name: 'Ray Calloway',
      title: 'Owner — Iron Peak Plumbing',
      initials: 'RC',
    },
  },
  {
    id: 'case-luxe-nails',
    client: 'Luxe Nails & Spa',
    category: 'Beauty & Wellness',
    location: 'Chicago, IL',
    timeline: '2-week build · 8-week measurement',
    visual: 'booking',
    tagline: 'Turning one-time visitors into regulars on autopilot',
    photo: {
      src: '/assets/images/case-luxe.jpg',
      alt: 'Manicure in progress at a nail salon — representative photo',
    },
    industry: {
      stat: 'The average salon rebooking rate is ~40–45%; healthy retention is 60–70%.',
      source: 'Salon benchmarking, 2026',
    },
    overview:
      'Luxe Nails & Spa is a six-station nail and spa studio whose chairs sat half empty between peaks — and whose regulars were quietly drifting away.',
    challenge: [
      'Most clients booked once and never came back, because nobody reminded them. Rebooking only happened if a client happened to remember, and gift-card holders often let their credit expire unused — a liability and a lost sale at the same time.',
      'The front desk juggled a paper diary and DMs across three apps, so double-bookings and gaps were a daily frustration.',
    ],
    approach: [
      { step: '01', title: 'One booking calendar', text: 'Online and DM bookings sync into a single calendar, with deposits protecting the diary.' },
      { step: '02', title: 'Rebook on autopilot', text: 'AI texts each client at their natural interval to lock in the next visit.' },
      { step: '03', title: 'Fill the gaps', text: 'Last-minute openings are offered to a waitlist and lapsed clients automatically.' },
    ],
    solution:
      'We built a smart booking and rebooking system that unifies every channel, takes deposits, texts clients to rebook at the right time, and auto-fills last-minute gaps from a waitlist.',
    stack: ['OpenAI', 'Twilio', 'Square', 'Google Calendar'],
    deliverables: [
      'Unified booking calendar',
      'Deposit-protected slots',
      'Automated rebooking texts',
      'Waitlist gap-filling',
      'Client retention dashboard',
    ],
    results: [
      { value: 47, suffix: '%', label: 'More repeat visits' },
      { value: 31, suffix: '%', label: 'Fewer empty chairs' },
      { value: 2, suffix: 'x', label: 'Faster rebooking' },
      { value: 74, suffix: '%', label: 'Gift cards redeemed' },
    ],
    before: [
      { label: 'Repeat-visit rate', before: '38%', after: '56%' },
      { label: 'Chair utilisation', before: '54%', after: '71%' },
      { label: 'Double-bookings / mo', before: '9', after: '0' },
      { label: 'Gift-card redemption', before: '41%', after: '74%' },
    ],
    roi: 'Revenue per chair rose 28% in two months, and the studio recovered $6,300 in expiring packages.',
    testimonial: {
      quote:
        'The system remembers my clients better than I do. They get a friendly text and rebook themselves — my calendar has never been this full.',
      name: 'Lena Park',
      title: 'Founder — Luxe Nails & Spa',
      initials: 'LP',
    },
  },
]

/* Why us — trust points */
export const trustPoints = [
  {
    icon: Sparkles,
    title: 'Personalised strategy, not templates',
    description: 'Every system is built around how your business actually runs.',
  },
  {
    icon: ShieldCheck,
    title: 'No long-term lock-in contracts',
    description: 'We earn your business month to month. Leave whenever you like.',
  },
  {
    icon: HeartHandshake,
    title: 'Results-focused, not tech-jargon',
    description: 'We talk in customers and hours saved — never in acronyms.',
  },
  {
    icon: Timer,
    title: 'Ongoing support & optimisation',
    description: 'We monitor, tune and improve your systems as you grow.',
  },
]

/* How it works */
export const processSteps = [
  {
    step: '01',
    icon: ClipboardCheck,
    title: 'Free AI Growth Audit',
    description:
      'A relaxed 20-minute call where we find your biggest time-drains and missed revenue opportunities.',
  },
  {
    step: '02',
    icon: PencilRuler,
    title: 'Custom AI Strategy',
    description:
      'We pick the right tools for your business and map out exactly what we will build and automate.',
  },
  {
    step: '03',
    icon: Rocket,
    title: 'Build & Integrate',
    description:
      'We build and connect everything in 1–2 weeks, with zero disruption to your day-to-day.',
  },
  {
    step: '04',
    icon: BarChart3,
    title: 'Launch, Monitor & Optimise',
    description:
      'We go live, track the numbers and keep improving so results compound over time.',
  },
]

/* Testimonials grid — initials render as monogram avatars */
export const testimonials = [
  {
    quote:
      'I am not a tech person at all, but the team made it effortless. Within two weeks our bookings were up and I was spending far less time on my phone.',
    name: 'Priya Shah',
    title: 'Owner — Urban Cuts Barbershop',
    rating: 5,
    initials: 'PS',
  },
  {
    quote:
      'The lead follow-up system paid for itself in the first month. We simply do not lose enquiries anymore, and my agents are home for dinner.',
    name: 'Daniel Martinez',
    title: 'Manager — Home & Key Realty',
    rating: 5,
    initials: 'DM',
  },
  {
    quote:
      'They speak plain English, not tech jargon. I finally understand what my marketing is actually doing — and it shows in the till.',
    name: 'Sofia Lopez',
    title: 'Owner — Sunrise Cafe',
    rating: 5,
    initials: 'SL',
  },
  {
    quote:
      'Our no-shows dropped dramatically and the front desk is calm for the first time in years. Genuinely life-changing for the clinic.',
    name: 'Dr. Omar Rahman',
    title: 'Principal dentist — GreenLeaf Dental Clinic',
    rating: 5,
    initials: 'OR',
  },
]

/* FAQ */
export const faqs = [
  {
    question: "I'm not techy — will this be hard to use?",
    answer:
      'Not at all. We build everything for you and hand it over with a simple walkthrough. If you can send a text message, you can use your new AI systems.',
  },
  {
    question: 'How fast will I see results?',
    answer:
      'Most systems are live within 1–2 weeks, and clients typically see faster response times and more booked jobs within the first month.',
  },
  {
    question: 'Is this expensive?',
    answer:
      'We offer simple monthly plans that usually cost less than a part-time hire — and many clients cover the cost with just a few extra customers a month.',
  },
  {
    question: 'Do I need to change my current tools?',
    answer:
      'No. We work with the tools you already use wherever possible and only add what genuinely saves you time or wins you customers.',
  },
  {
    question: 'What if I already have a website?',
    answer:
      'Perfect. We integrate AI directly into your existing site. If it needs an upgrade, we can refresh it too — but it is never required.',
  },
  {
    question: 'What happens on the free audit call?',
    answer:
      'It is a relaxed 20-minute conversation. We look at how your business runs today, identify the biggest opportunities, and give you a clear plan — whether or not you hire us.',
  },
]

/* Contact form "biggest challenge" dropdown options */
export const contactChallenges = [
  'Getting more new customers',
  'Following up with leads',
  'Saving time on admin',
  'Reducing missed appointments / no-shows',
  'Creating marketing content',
  'Not sure yet — I need advice',
]
