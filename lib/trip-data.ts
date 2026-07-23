export interface ExpenseItem {
  category: string;
  amount: number;
}

export interface LocationScore {
  name: string;
  footTraffic: number;
  rent: number;
  touristAccess: number;
  delivery: number;
  competition: number;
  overall: number;
  notes?: string;
}

export interface ActivityItem {
  title: string;
  imagePath: string;
  categoryBadge?: string;
}

export interface TripReport {
  id: string;
  slug: string;
  tripNumber: number;
  title: string;
  destination: string;
  imagePath: string;
  dateRange: string;
  duration: string;
  purpose: string;
  locationDetails: string;
  overview: string;
  activities: ActivityItem[];
  highlights: string[];
  keyFindings: string[];
  expenses: ExpenseItem[];
  totalExpense: number;
  conclusion: string;
  locationScores?: LocationScore[];
  interviewee?: {
    name: string;
    role: string;
    yearsOfService: number;
    address: string;
  };
}

export const TRIP_REPORTS: TripReport[] = [
  {
    id: "trip-1",
    slug: "sihanoukville",
    tripNumber: 1,
    title: "Trip 1 — Sihanoukville Investor Meetings",
    destination: "Sihanoukville, Cambodia",
    imagePath: "/images/trip_sihanoukville.png",
    dateRange: "5–6 February 2026",
    duration: "2 days / 1 night",
    purpose: "Meet two potential investors for cold-chain delivery & retail kiosk expansion",
    locationDetails: "Seaside Business Lounge & Coastal Investment Hub (Ochheuteal Beach Rd / Independence Beach Rd)",
    overview: "The executive team traveled to Sihanoukville to meet with prospective strategic investors. Discussions focused on securing seed/growth financing for a specialized cold-chain delivery system, launching a seaside retail kiosk, and scaling B2B hotel/restaurant supply contracts.",
    activities: [
      {
        title: "Meeting at Seaside Business Lounge with prospective hospitality investors",
        imagePath: "/images/partner_seaside_retail.png",
        categoryBadge: "Investor Pitch & Kiosk Deal"
      },
      {
        title: "Meeting at Coastal Investment Hub regarding commercial chiller financing",
        imagePath: "/images/partner_coastal_ventures.png",
        categoryBadge: "Hotel B2B & Capital Pipeline"
      },
      {
        title: "Presenting 4 signature cheesecake flavors (Classic NY, Mango Passion, Khmer Palm Sugar, Chocolate Coffee)",
        imagePath: "/images/hero_cheesecake.png",
        categoryBadge: "Product Tasting Showcase"
      },
      {
        title: "Conducting live tasting sessions & establishing temperature-controlled dispatch standards",
        imagePath: "/images/value_cold_chain.png",
        categoryBadge: "Cold-Chain Quality Control"
      }
    ],
    highlights: [
      "Ms. Dara Chenda (Coastal Hospitality Ventures) expressed up to $75,000 in non-binding investment interest for cold-chain equipment, commercial chillers, and hotel supply contracts.",
      "Mr. Lim Vannak (Seaside Retail Partners) proposed a low-risk pilot kiosk partnership featuring a 3-month sales test at a high-foot-traffic coastal promenade.",
      "Presented 4 signature cheesecake flavors with live tasting: Palm Sugar, Classic NY, Mango Passion, and Chocolate Coffee.",
      "Key investor requirements established: reliable temperature-controlled refrigeration, portion consistency, complete food safety documentation, and bilingual Khmer-English packaging."
    ],
    keyFindings: [
      "Kiosk model offers significantly lower upfront capital risk compared to opening a full café.",
      "Hotel & restaurant supply provides steady weekday revenue stability, complementing weekend tourist foot traffic.",
      "Must finalize an investment-ready financial model with exact margin breakdowns prior to signing binding agreements.",
      "Khmer Palm Sugar Cheesecake received the strongest positive feedback from both investor panels."
    ],
    expenses: [
      { category: "Van Transport", amount: 320 },
      { category: "Accommodation", amount: 240 },
      { category: "Meals & Dining", amount: 210 },
      { category: "Meeting Room Rentals", amount: 180 },
      { category: "Local Transport", amount: 60 },
      { category: "Presentation & Pitch Materials", amount: 45 },
      { category: "Contingency", amount: 75 }
    ],
    totalExpense: 1130,
    conclusion: "Two highly credible investment leads were established. The team will perform due diligence on legal, financial, and ownership terms before committing. Immediate next step is to submit a 3-month kiosk pilot proposal and a separate hotel-supply contract proposal."
  },
  {
    id: "trip-2",
    slug: "siem-reap",
    tripNumber: 2,
    title: "Trip 2 — Siem Reap Branch Expansion Assessment",
    destination: "Siem Reap, Cambodia",
    imagePath: "/images/trip_siemreap.png",
    dateRange: "9–13 March 2026",
    duration: "5 days / 4 nights",
    purpose: "Identify the optimal retail branch location for expansion",
    locationDetails: "Evaluated 5 distinct commercial zones in Siem Reap municipality",
    overview: "The team conducted a comprehensive 5-day market assessment across 5 key zones in Siem Reap. We systematically evaluated foot traffic density, rental rates, accessibility for tourists, delivery dispatch convenience, and competitive landscape. Over 40 interviews were conducted with local residents, hotel staff, tuk-tuk drivers, and retail business owners.",
    activities: [
      {
        title: "Evaluating the Old Market and Pub Street area for tourist foot traffic density",
        imagePath: "/images/trip_siemreap.png",
        categoryBadge: "Tourist Zone Analysis"
      },
      {
        title: "Assessing Wat Bo Road commercial strip for customer-facing flagship boutique branch (Score 4.4/5)",
        imagePath: "/images/flavor_palm_sugar.png",
        categoryBadge: "Recommended Flagship Location"
      },
      {
        title: "Surveying Taphul Road for affordable retail store options",
        imagePath: "/images/flavor_mango.png",
        categoryBadge: "Retail Rental Survey"
      },
      {
        title: "Surveying National Road 6 for main-road visibility and vehicle accessibility",
        imagePath: "/images/flavor_classic_ny.png",
        categoryBadge: "Main Corridor Inspection"
      },
      {
        title: "Evaluating Sala Kamreuk corridor for centralized production & delivery cloud kitchen (Score 4.2/5)",
        imagePath: "/images/flavor_chocolate.png",
        categoryBadge: "Cloud Kitchen Site"
      }
    ],
    highlights: [
      "Assessed 5 commercial areas using a standardized 5-point evaluation matrix.",
      "Identified Wat Bo Road as the premier candidate for Five Slices' flagship boutique branch due to its vibrant mix of upscale boutique hotels, dining crowd, and favorable delivery logistics.",
      "Identified Sala Kamreuk as an ideal secondary site for a centralized production and delivery cloud kitchen."
    ],
    locationScores: [
      { name: "Old Market / Pub Street", footTraffic: 5, rent: 2, touristAccess: 5, delivery: 3, competition: 2, overall: 3.4, notes: "Strong tourist traffic but excessively high rent & intense local competition." },
      { name: "Wat Bo Road", footTraffic: 4, rent: 4, touristAccess: 5, delivery: 5, competition: 4, overall: 4.4, notes: "Recommended Flagship Location. Perfect balance of tourists, expats, locals, and smooth delivery access." },
      { name: "Taphul Road", footTraffic: 3, rent: 5, touristAccess: 4, delivery: 4, competition: 4, overall: 4.0, notes: "Highly affordable rental rates, but weaker premium brand positioning." },
      { name: "National Road 6", footTraffic: 5, rent: 3, touristAccess: 4, delivery: 4, competition: 3, overall: 3.8, notes: "High main-road visibility, but higher initial build-out costs." },
      { name: "Sala Kamreuk", footTraffic: 3, rent: 5, touristAccess: 3, delivery: 5, competition: 5, overall: 4.2, notes: "Recommended Production Site. Low rent, central delivery hub for cloud orders." }
    ],
    keyFindings: [
      "Wat Bo Road (Score 4.4/5) is recommended for our first flagship branch.",
      "Sala Kamreuk (Score 4.2/5) serves as our top recommendation for a production and delivery kitchen.",
      "A unit size of 45–60 sqm is optimal for maintaining a lean operation while delivering a high-end customer experience.",
      "Must preserve our core focus on authentic Khmer flavors combined with luxury aesthetic identity."
    ],
    expenses: [
      { category: "Intercity Transport", amount: 600 },
      { category: "Accommodation", amount: 720 },
      { category: "Meals & Refreshments", amount: 625 },
      { category: "Local Transport & Site Visits", amount: 250 },
      { category: "Market Research Materials", amount: 120 },
      { category: "Meeting & Property Review Costs", amount: 100 },
      { category: "Contingency", amount: 150 }
    ],
    totalExpense: 2565,
    conclusion: "Proceed with negotiating lease terms for a 45–60 sqm space along Wat Bo Road. Target a 2-month rent-free setup window and validate weekend demand through 4 consecutive pop-up weekend events before signing a long-term lease."
  },
  {
    id: "trip-3",
    slug: "mondulkiri",
    tripNumber: 3,
    title: "Trip 3 — Mondulkiri Heritage & Master Baker Interview",
    destination: "Sen Monorom, Mondulkiri, Cambodia",
    imagePath: "/images/trip_mondulkiri.png",
    dateRange: "6–8 April 2026",
    duration: "3 days / 2 nights",
    purpose: "Interview retired Head Pastry Chef for company magazine & document heritage recipes",
    locationDetails: "No. 27, Romonea Village, Sangkat Spean Meanchey, Sen Monorom",
    overview: "The team traveled to Mondulkiri to record an in-depth oral history and masterclass interview with Mr. Vichea Sok, fictional retired Head Pastry Chef with 18 years of service. The journey captured foundational lessons on recipe craftsmanship, ingredient discipline, food safety pride, and the historic origin of Five Slices' signature Palm Sugar Cheesecake.",
    interviewee: {
      name: "Mr. Vichea Sok",
      role: "Retired Head Pastry Chef",
      yearsOfService: 18,
      address: "No. 27, Romonea Village, Sangkat Spean Meanchey, Sen Monorom"
    },
    activities: [
      {
        title: "Interviewing retired Head Pastry Chef Vichea Sok at his private residence in Sen Monorom",
        imagePath: "/images/trip_mondulkiri.png",
        categoryBadge: "Masterclass Interview"
      },
      {
        title: "Recording high-fidelity audio of the masterclass oral history interview",
        imagePath: "/images/chhay.png",
        categoryBadge: "Audio Archival Documentation"
      },
      {
        title: "Capturing professional archival portrait photographs of Chef Vichea",
        imagePath: "/images/leangsiv.png",
        categoryBadge: "Heritage Photography"
      },
      {
        title: "Reviewing and scanning selected historical recipe notes & baking blueprints",
        imagePath: "/images/mengsreang.png",
        categoryBadge: "Historical Recipe Vault"
      }
    ],
    highlights: [
      "Documented the humble beginnings of Five Slices' first cheesecake, baked in a small shared oven and sold through word-of-mouth.",
      "Recorded Chef Vichea's core principles: precise ingredient weighing, strict oven temperature discipline, and patience over shortcuts.",
      "Captured the full origin story of using Kampong Speu palm sugar to pioneer Cambodia's first artisanal Palm Sugar Cheesecake.",
      "Archived historical recipe notes, recorded 4 hours of audio interviews, and took professional archival portraits."
    ],
    keyFindings: [
      "Draft a 900–1,100 word flagship feature article titled: 'From a Small Oven to a Growing Brand: The Story of Chef Vichea Sok'.",
      "Highlight themes of craftsmanship, mentorship, and uncompromising dedication to quality.",
      "Establish a secure company archive for original recipe blueprints while publishing controlled heritage stories.",
      "Adapt interview clips into staff onboarding training modules and a multi-part social media heritage campaign."
    ],
    expenses: [
      { category: "Intercity Transport", amount: 550 },
      { category: "Accommodation", amount: 300 },
      { category: "Meals & Hospitality", amount: 375 },
      { category: "Interview Prep & Honorarium Gift", amount: 150 },
      { category: "Local Transport", amount: 80 },
      { category: "Photography & Audio Equipment", amount: 100 },
      { category: "Contingency", amount: 95 }
    ],
    totalExpense: 1650,
    conclusion: "Finalize the 1,000-word feature article and obtain Chef Vichea's approval before printing in the company magazine. Use this authentic heritage story to instill staff pride and build deep customer trust."
  },
  {
    id: "trip-4",
    slug: "malaysia",
    tripNumber: 4,
    title: "Trip 4 — Malaysia International AI in Workplace Conference",
    destination: "Kuala Lumpur, Malaysia",
    imagePath: "/images/trip_malaysia.png",
    dateRange: "18–20 May 2026",
    duration: "3 days / 2 nights",
    purpose: "Explore practical AI tools for sales forecasting, inventory control, and customer experience",
    locationDetails: "Kuala Lumpur Convention Centre (KLCC), Malaysia",
    overview: "The team attended the Asia-Pacific AI in the Workplace Summit in Kuala Lumpur to evaluate scalable digital technologies for food retail operations. Key focuses included AI demand forecasting, smart inventory alerts, automated customer service, and responsible AI governance.",
    activities: [
      {
        title: "Attending a sales & demand-forecasting AI session at Kuala Lumpur Convention Centre (KLCC)",
        imagePath: "/images/partner_klcc.svg",
        categoryBadge: "AI Demand Forecasting"
      },
      {
        title: "Participating in an AI retail-operations & smart barcode inventory workshop",
        imagePath: "/images/partner_schneider.svg",
        categoryBadge: "Smart Inventory Tech"
      },
      {
        title: "Attending an automated AI customer-service chatbot panel",
        imagePath: "/images/trip_malaysia.png",
        categoryBadge: "Customer AI Automation"
      },
      {
        title: "B2B networking meetings with software vendors and regional bakery franchise operators",
        imagePath: "/images/partner_suntec.svg",
        categoryBadge: "Regional B2B Networking"
      }
    ],
    highlights: [
      "Attended hands-on sessions on demand forecasting integrating historical sales, weather patterns, local holidays, and marketing promos to reduce bakery waste.",
      "Explored automated barcode inventory systems that trigger real-time reorder alerts for critical fresh ingredients (cream cheese, butter, eggs, fruit purees).",
      "Evaluated automated customer support chatbots designed to answer flavor questions, allergen details, order pickups, and delivery status.",
      "Participated in a workshop on Responsible AI usage, staff data protection, and content review protocols.",
      "Established connections with 2 software vendors and 1 regional bakery franchise operator."
    ],
    keyFindings: [
      "Adopt a phased approach: start with simple, low-cost AI utilities before investing in complex enterprise platforms.",
      "Priority #1: Weekly demand forecasting to optimize production scheduling and minimize fresh ingredient spoilage.",
      "Priority #2: Automated stock alerts for core ingredients to prevent stockouts and emergency buying premiums.",
      "Maintain human review for all customer-facing AI content to preserve our friendly, warm, and authentic brand voice."
    ],
    expenses: [
      { category: "International Airfare", amount: 1400 },
      { category: "Accommodation", amount: 720 },
      { category: "Conference Registration Fees", amount: 1750 },
      { category: "Meals & Business Dining", amount: 600 },
      { category: "Local Transport (Grab/Taxi)", amount: 250 },
      { category: "Travel Insurance", amount: 150 },
      { category: "Materials & Contingency", amount: 180 }
    ],
    totalExpense: 5050,
    conclusion: "Initiate a 12-week pilot implementation using spreadsheet-based demand forecasting and automated inventory reorder alerts before committing capital to enterprise software platforms."
  },
  {
    id: "trip-5",
    slug: "singapore",
    tripNumber: 5,
    title: "Trip 5 — Singapore Social Media Marketing Research",
    destination: "Singapore",
    imagePath: "/images/trip_singapore.png",
    dateRange: "11–12 June 2026",
    duration: "2 days / 1 night",
    purpose: "Study modern short-form video strategies, social commerce, and micro-influencers",
    locationDetails: "Suntec Singapore Convention & Exhibition Centre",
    overview: "The team participated in an international research presentation and workshop on cutting-edge digital marketing in Southeast Asia. Focus areas included short-form video dynamics, micro-influencer ROI, social commerce conversion, and building brand affinity among Gen Z and young millennial audiences.",
    activities: [
      {
        title: "Attending business research presentations at Suntec Singapore Convention & Exhibition Centre",
        imagePath: "/images/partner_suntec.svg",
        categoryBadge: "Digital Retail Research"
      },
      {
        title: "Analyzing 3-second hook short-form video strategies for dessert brands",
        imagePath: "/images/partner_tiktok.svg",
        categoryBadge: "Viral Video Strategy"
      },
      {
        title: "Researching micro-influencer partnership ROI & creator collaboration frameworks",
        imagePath: "/images/trip_singapore.png",
        categoryBadge: "Creator Network Marketing"
      },
      {
        title: "Reviewing social-commerce metrics, conversion funnels, and performance analytics",
        imagePath: "/images/partner_grabcambodia.png",
        categoryBadge: "E-Commerce Funnel Analytics"
      }
    ],
    highlights: [
      "Analyzed top-performing food videos: emphasis on 3-second hooks featuring cake slicing, gooey texture reveals, and behind-the-scenes decorating.",
      "Structured content strategy around 3 core pillars: Product Desire (60%), Behind-the-Scenes Trust (20%), and Customer Stories (20%).",
      "Learned that targeted local micro-influencers yield 3.5x higher engagement and conversion compared to high-cost celebrity endorsements.",
      "Studied frictionless social commerce checkout flows with direct links to instant messenger ordering.",
      "Defined key performance metrics: track saves, shares, DMs, and repeat orders instead of vanity likes."
    ],
    keyFindings: [
      "A disciplined 90-day content calendar produces significantly higher ROI than irregular, expensive marketing campaigns.",
      "Publish bilingual Khmer-English short videos highlighting local ingredient origins (e.g. Kampong Speu palm sugar).",
      "Leverage customer-generated photos and unboxing videos to build social proof and community trust.",
      "Allocate budget for 2 micro-influencer collaborations per month with tracked promo codes."
    ],
    expenses: [
      { category: "International Airfare", amount: 1100 },
      { category: "Accommodation", amount: 600 },
      { category: "Conference & Workshop Fees", amount: 1400 },
      { category: "Meals & Refreshments", amount: 350 },
      { category: "Local Transport (MRT/Taxi)", amount: 120 },
      { category: "Networking & Materials", amount: 150 },
      { category: "Insurance & Contingency", amount: 230 }
    ],
    totalExpense: 3950,
    conclusion: "Execute a structured 90-day social media campaign featuring 3 short-form videos, 1 customer story, 1 behind-the-scenes post, and 1 limited-time promotion per week, backed by end-to-end sales tracking."
  }
];

export const CONSOLIDATED_RECOMMENDATIONS = [
  "Submit formal proposals for the 3-month Sihanoukville kiosk pilot and hotel-supply contract while conducting financial due diligence.",
  "Secure lease options for Wat Bo Road (Flagship) in Siem Reap and utilize pop-up testing across 4 weekends prior to signing a multi-year contract.",
  "Publish Chef Vichea Sok's 1,000-word heritage story in the company magazine, create an archived recipe vault, and produce staff onboarding videos.",
  "Launch a 12-week operational pilot featuring spreadsheet demand forecasting and inventory threshold alerts inspired by the Malaysia AI conference.",
  "Roll out a 90-day bilingual social media campaign (3 videos, 1 customer story, 1 behind-the-scenes post, 1 special offer per week) with micro-influencers."
];

export const CONSOLIDATED_EXPENSE_SUMMARY = [
  { trip: "Trip 1 — Sihanoukville", destination: "Sihanoukville, Cambodia", dates: "5–6 Feb 2026", total: 1130 },
  { trip: "Trip 2 — Siem Reap", destination: "Siem Reap, Cambodia", dates: "9–13 Mar 2026", total: 2565 },
  { trip: "Trip 3 — Mondulkiri", destination: "Mondulkiri, Cambodia", dates: "6–8 Apr 2026", total: 1650 },
  { trip: "Trip 4 — Malaysia", destination: "Kuala Lumpur, Malaysia", dates: "18–20 May 2026", total: 5050 },
  { trip: "Trip 5 — Singapore", destination: "Singapore", dates: "11–12 Jun 2026", total: 3950 },
];

export const GRAND_TOTAL_EXPENSES = 14345;
