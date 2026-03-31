import { Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'mechanic-marketplace',
    title: 'MechLink',
    category: 'Service Marketplace',
    positioning: 'A trusted marketplace connecting car owners with verified mechanics through transparent, reliable, and seamless booking experiences.',
    description: `MechLink is a service marketplace designed to simplify how car owners find and book reliable mechanics.

In many cities, car repair is built on word-of-mouth, uncertainty, and inconsistent pricing. This creates stress, mistrust, and wasted time for users who simply want dependable service.

This project explores how design can build trust, transparency, and confidence into a service-based marketplace experience.`,
    problem: `User interviews with car owners revealed three recurring frustrations:

1. **Trust Deficit** — Users struggle to verify mechanic credibility.
2. **Price Uncertainty** — Costs often feel unpredictable or inflated.
3. **Booking Friction** — Scheduling and communication are inconsistent.

Many users rely on informal referrals because digital alternatives feel unreliable or unclear.

The core challenge became:
> How might we design a mechanic marketplace that prioritizes trust, transparency, and ease of booking?`,
    strategy: 'Design trust before design aesthetics.',
    process: [
      '1. Research & Validation: Conducted interviews with car owners and studied marketplace leaders like Uber and Airbnb to understand trust-building mechanisms.',
      '2. Trust Signals: Integrated verified badges, review systems, transparent service categories, and estimated price ranges.',
      '3. Simplified Booking Flow: Reduced steps from discovery to confirmation with clear calls to action.',
      '4. Functional Visual Language: Used a clean, neutral palette with strong contrast to convey professionalism and reliability.'
    ],
    solution: `MechLink delivers a streamlined experience where users can:,

1.Discover nearby verified mechanics
2.Compare ratings and reviews
3.View service specialties
4.See estimated price ranges 
5.Book appointments in a few taps

'The platform positions mechanics as professionals with structured profiles rather than informal contacts.`,
    impact: 'MechLink demonstrates how thoughtful UX can reduce friction and build credibility in service marketplaces.',
    designSystem: [
      'Professional blue-gray color palette',
      'Strong typographic hierarchy for clarity',
      'Card-based layout for mechanic listings',
      'Consistent iconography for service types',
      '8pt grid spacing for layout consistency'
    ],
    keyLearnings: [
      'Trust signals must be visible early and often.',
      'Clear pricing communication reduces user anxiety.',
      'Simplicity increases booking conversion.'
    ],
    futureImprovements: [
      'In-app messaging between mechanic and customer',
      'Escrow payment system',
      'Live service tracking'
    ],
    image: 'Marketplace.webp',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    wireframeImage: 'https://picsum.photos/seed/mechanic-wire/1200/800',
    mockupImage: 'https://picsum.photos/seed/mechanic-mock/1200/800',
    gallery: [
      'https://picsum.photos/seed/mech1/800/600',
      'https://picsum.photos/seed/mech2/800/600'
    ],
    flows: [
      { 
        title: 'Home & Discovery', 
        description: `The home screen prioritizes nearby mechanics, search functionality, and rating visibility. 
        
Users can immediately see distance, availability, and verified status. The goal was to eliminate uncertainty at first glance.`, 
        image: 'Homeandsearch.webp' 
      },
      { 
        title: 'Mechanic Profile', 
        description: `Designed as the trust anchor of the product. 
        
Includes professional photos, verified badges, years of experience, specializations, and estimated service pricing. Visual hierarchy ensures reviews are highly visible.`, 
        image: '/src/images/Sellerprofile.webp' 
      },
      { 
        title: 'User Profile', 
        description: `Designed as the trust anchor of the product. 
        
Includes professional photos, verified badges, years of experience, specializations, and estimated service pricing. Visual hierarchy ensures reviews are highly visible.`, 
        image: '/src/images/customer profile.webp' 
      },
      
      { 
        title: 'Booking Flow', 
        description: `The booking process was simplified into three steps: Select service, Choose date/time, and Confirm. 
        
Clear confirmation messages and booking summaries reduce ambiguity.`, 
        image: '/src/images/Booking flow.webp' 
      },
      
      { 
        title: 'Wallet', 
        description: `Payments are escrowed and app will use an in-app wallet to make all payments easily tracked and escrowed for any services done. 
        
This builds long-term trust within the marketplace ecosystem.`, 
        image: '/src/images/Wallet.webp' 
      }
    ],
    year: '2024',
    role: 'Lead UI/UX Designer',
    tags: ['Marketplace', 'Service Design', 'Web App']
  },
  {
    id: 'moodmate',
    title: 'MoodMate',
    category: 'Wellness App',
    positioning: 'A mindful companion app designed to help users track, understand, and improve their emotional well-being through intelligent, human-centered design.',
    description: `MoodMate is a mobile wellness application built to make emotional tracking feel natural, reflective, and supportive rather than clinical or overwhelming.

While many mood trackers focus on data collection, MoodMate focuses on **emotional experience first, insights second**. The goal was to design a system that encourages daily engagement while helping users uncover meaningful emotional patterns over time.

This project explores how design can transform self-reflection into a habit through conversational UI, micro-interactions, and calming visual language.`,
    problem: `Through competitive research and user interviews, I discovered three key issues with existing mood-tracking apps:

1. **They feel clinical** — overly data-heavy and emotionally distant.
2. **Tracking feels like a task** rather than a reflective moment.
3. **Insights lack depth** — users log moods but rarely understand patterns or triggers.

As a result, long-term engagement drops, and users abandon the app after a few weeks.

The challenge was clear:
> How might we design a mood-tracking experience that feels personal, warm, and insightful — without overwhelming the user?`,
    strategy: 'Make emotional tracking feel like a conversation, not a form.',
    process: [
      'Psychological Research: Studied emotional journaling frameworks and cognitive behavioral reflection models.',
      'Conversational UI Flow: Designed a friendly, step-by-step dialogue that mimics natural thought patterns.',
      'Visual Language Development: Created a calm, organic interface using soft gradients and rounded components.',
      'Beta Feedback: Refined tone and clarity with mental health enthusiasts and wellness-focused users.'
    ],
    solution: `MoodMate introduces an AI-assisted journaling system that:
- Allows users to quickly log their mood
- Encourages short guided reflections
- Detects emotional trends over time
- Surfaces personalized wellness suggestions

Rather than just displaying charts, the system translates emotional data into meaningful insights such as:
* "You tend to feel anxious on Sunday evenings."
* "Your mood improves on days you journal."

The product combines **reflection, pattern recognition, and gentle guidance** into one seamless experience.`,
    impact: 'MoodMate demonstrates how thoughtful UX decisions can increase emotional engagement, reduce friction in self-reflection, and make data feel human.',
    designSystem: [
      'Emotion-based color system',
      'Soft shadow layering for depth',
      'Consistent 8pt spacing grid',
      'Rounded 2xl card components',
      'Calm typography hierarchy'
    ],
    keyLearnings: [
      'Emotional products require tone sensitivity.',
      'Microcopy influences trust significantly.',
      'Simplicity drives consistency in habit-based apps.'
    ],
    futureImprovements: [
      'Mood-based community connections (MoodLink feature)',
      'AI-driven emotional summaries',
      'Guided wellness exercises'
    ],
    image: '/src/images/newmood.webp',
    wireframeImage: 'https://picsum.photos/seed/mood-wire/1200/800',
    mockupImage: 'https://picsum.photos/seed/mood-mock/1200/800',
    gallery: [
      'https://picsum.photos/seed/mood1/800/600',
      'https://picsum.photos/seed/mood2/800/600'
    ],
    flows: [
      { 
        title: 'Onboarding Experience', 
        description: `The onboarding flow was designed to feel lightweight and welcoming rather than procedural.

**Key goals:**
- Build emotional trust immediately
- Explain value clearly
- Encourage first mood log within 60 seconds

Users are guided through a short introduction to emotional tracking, quick mood selection, and a simple journaling prompt. The tone is conversational and affirming.`, 
        image: '/src/images/Onboarding1.webp' 
      },
      { 
        title: 'Sign-Up Flow', 
        description: `The sign-up process was intentionally simplified to reduce friction.

**Design considerations:**
- Minimal required fields
- Soft progress indicators
- Encouraging copy

The aim was to prevent drop-off during account creation.`, 
        image: '/src/images/sign up flow.webp' 
      },
      { 
        title: 'Logging Your Mood', 
        description: `This is the heart of the product. Instead of dropdown menus, users experience:
- Emotion selection through expressive visual icons
- Optional intensity selections
- Guided journaling prompt
- Micro-animations that respond to interaction

The design transforms mood logging into a short reflective ritual rather than a checklist.`, 
        image: '/src/images/Lognewmood.webp' 
      },
      { 
        title: 'Insights Dashboard', 
        description: `The Insights Dashboard translates emotional data into clarity. Features include:
- Weekly and monthly mood trends
- Emotional frequency visualization
- Pattern detection
- Smart AI-generated reflections


The interface balances data and warmth — charts are visually clean, but insights are written in human language.`, 
        image: '/src/images/Insightsdashboard.webp' 
      }
    ],
    year: '2024',
    role: 'Product Designer',
    tags: ['Mobile App', 'AI', 'Wellness'],
    videoUrl: 'QWwuLYtQexg',
  },

  // ============================================================
  // WORK IN PROGRESS — Uncomment when projects are ready
  // ============================================================

  // {
  //   id: 'amethyst-aura',
  //   title: 'Amethyst Aura Spa',
  //   category: 'Luxury Digital Experience',
  //   positioning: 'Translating physical serenity into digital space.',
  //   description: 'A serene digital experience for a luxury spa, featuring integrated booking systems and personalized email notifications.',
  //   problem: `The previous site was cluttered and technical, failing to reflect the premium, calming atmosphere of the physical spa.
  //
  // Issues identified:
  // 1. High bounce rate on mobile
  // 2. Clunky booking process (7 steps)
  // 3. Inconsistent brand messaging`,
  //   strategy: 'Use generous whitespace, soft motion, and a minimal booking flow to extend the spa experience to the web.',
  //   process: [
  //     'Brand audit and visual identity refinement',
  //     'Booking flow optimization (from 7 steps to 3)',
  //     'Responsive design for mobile-first users',
  //     'Automated email journey mapping'
  //   ],
  //   solution: `A high-end, image-driven website with a frictionless booking engine and elegant notification system.
  //
  // The new flow reduces booking time by 60% and maintains the brand's luxury aesthetic throughout the digital journey.`,
  //   impact: 'Increased online bookings by 45% within the first three months of launch.',
  //   image: 'https://picsum.photos/seed/spa/1200/800',
  //   wireframeImage: 'https://picsum.photos/seed/spa-wire/1200/800',
  //   mockupImage: 'https://picsum.photos/seed/spa-mock/1200/800',
  //   gallery: [
  //     'https://picsum.photos/seed/spa1/800/600',
  //     'https://picsum.photos/seed/spa2/800/600'
  //   ],
  //   flows: [
  //     {
  //       title: 'Service Selection',
  //       description: `Browsing luxury treatments with high-res imagery.
  //
  // **Experience:**
  // - Immersive visual storytelling
  // - Detailed treatment benefits`,
  //       image: 'https://picsum.photos/seed/spaflow1/1200/800'
  //     },
  //     {
  //       title: 'Booking Engine',
  //       description: `Seamless date and time selection with instant confirmation.
  //
  // **Optimization:**
  // - 3-step checkout process
  // - Real-time availability sync`,
  //       image: 'https://picsum.photos/seed/spaflow2/1200/800'
  //     }
  //   ],
  //   year: '2023',
  //   role: 'Visual Designer',
  //   tags: ['E-commerce', 'Luxury', 'Web Design']
  // },

  // {
  //   id: 'lanixpress',
  //   title: 'LaniXpress Redesign',
  //   category: 'Logistics System Overhaul',
  //   positioning: 'Systematizing complexity for global logistics.',
  //   description: 'A complete visual and structural overhaul of the LaniXpress platform to enhance user flow and brand authority.',
  //   image: 'https://picsum.photos/seed/logistics/1200/800',
  //   wireframeImage: 'https://picsum.photos/seed/logistics-wire/1200/800',
  //   mockupImage: 'https://picsum.photos/seed/logistics-mock/1200/800',
  //   gallery: [
  //     'https://picsum.photos/seed/log1/800/600',
  //     'https://picsum.photos/seed/log2/800/600'
  //   ],
  //   flows: [
  //     {
  //       title: 'Shipment Overview',
  //       description: `Real-time tracking of all active shipments.
  //
  // **Highlights:**
  // - Global map view
  // - Status-based filtering`,
  //       image: 'https://picsum.photos/seed/logflow1/1200/800'
  //     },
  //     {
  //       title: 'Error Resolution',
  //       description: `Guided workflow for resolving shipment exceptions.
  //
  // **Workflow:**
  // - Automated alert triggers
  // - Step-by-step resolution paths`,
  //       image: 'https://picsum.photos/seed/logflow2/1200/800'
  //     }
  //   ],
  //   problem: `The legacy system was plagued by information density issues, leading to high error rates in shipment tracking.
  //
  // Critical failures:
  // - Information overload on the main dashboard
  // - Lack of clear visual hierarchy
  // - Poor error state communication`,
  //   strategy: 'Apply modular design principles and clear information hierarchy to make complex data scannable.',
  //   process: [
  //     'Stakeholder interviews with logistics managers',
  //     'Information architecture restructuring',
  //     'Design system creation for scalability',
  //     'A/B testing of tracking dashboards'
  //   ],
  //   solution: `A clean, dashboard-centric interface that prioritizes critical shipment status and actionable alerts.
  //
  // The redesign focuses on "Management by Exception," surfacing only the shipments that require immediate attention.`,
  //   impact: 'Reduced shipment tracking errors by 22% and improved task completion speed by 40%.',
  //   year: '2023',
  //   role: 'UI/UX Designer',
  //   tags: ['Logistics', 'B2B', 'Dashboard']
  // },
];
