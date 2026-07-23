export interface Flavor {
  id: string;
  name: string;
  tagline: string;
  description: string;
  priceWhole: string;
  priceSlice: string;
  rating: number;
  reviewsCount: number;
  badge?: string;
  category: "signature" | "classic" | "seasonal";
  gradient: string;
  accentColor: string;
  imagePath: string;
  ingredients: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  isLeader?: boolean;
  quote: string;
  avatarGradient: string;
  imagePath?: string;
  bio: string;
}

export const FEATURED_FLAVORS: Flavor[] = [
  {
    id: "khmer-palm-sugar",
    name: "Khmer Palm Sugar Cheesecake",
    tagline: "Our Signature Cambodian Masterpiece",
    description: "Handcrafted with premium organic Kampong Speu palm sugar, slow-caramelized to golden perfection over a buttery artisan cookie crust.",
    priceWhole: "$28.00",
    priceSlice: "$4.50",
    rating: 5.0,
    reviewsCount: 142,
    badge: "🌟 Star Signature",
    category: "signature",
    gradient: "from-amber-100 via-rose-100 to-pink-100",
    accentColor: "#d97706",
    imagePath: "/images/hero_cheesecake.png",
    ingredients: ["Organic Kampong Speu Palm Sugar", "Velvety Cream Cheese", "Vanilla Bean", "Artisan Crust"]
  },
  {
    id: "mango-passion",
    name: "Mango Passionfruit Swirl",
    tagline: "Tropical Sunshine in Every Bite",
    description: "Sun-ripened Cambodian mango curd layered with tangy passionfruit glaze on a golden honey-graham base.",
    priceWhole: "$26.00",
    priceSlice: "$4.25",
    rating: 4.9,
    reviewsCount: 98,
    badge: "🥭 Fan Favorite",
    category: "signature",
    gradient: "from-yellow-100 via-orange-100 to-pink-100",
    accentColor: "#f59e0b",
    imagePath: "/images/mango_cheesecake.png",
    ingredients: ["Fresh Battambang Mangoes", "Passionfruit Glaze", "Cream Cheese", "Honey Graham"]
  },
  {
    id: "seasonal-strawberry",
    name: "Seasonal Strawberry Blush",
    tagline: "Sweet Pink Romance in Every Slice",
    description: "Pastel strawberry cream cheese filled with real strawberry compote and topped with white chocolate micro-shavings.",
    priceWhole: "$29.00",
    priceSlice: "$4.75",
    rating: 5.0,
    reviewsCount: 64,
    badge: "🍓 Seasonal Special",
    category: "seasonal",
    gradient: "from-pink-100 via-rose-200 to-purple-100",
    accentColor: "#f43f5e",
    imagePath: "/images/strawberry_cheesecake.png",
    ingredients: ["Fresh Strawberry Reduction", "White Chocolate Shavings", "Pastel Cookie Crust"]
  },
  {
    id: "boutique-display",
    name: "Boutique Kiosk Special Box",
    tagline: "Fresh from Sihanoukville Kiosk",
    description: "Assorted 4-slice boutique sampler box featuring our signature local flavors in luxury pink gift packaging.",
    priceWhole: "$25.00",
    priceSlice: "$4.25",
    rating: 4.9,
    reviewsCount: 110,
    badge: "🏪 Kiosk Exclusive",
    category: "classic",
    gradient: "from-amber-50 via-pink-100 to-rose-100",
    accentColor: "#78350f",
    imagePath: "/images/boutique_kiosk.png",
    ingredients: ["4 Signature Flavors", "Pastel Gift Box", "Ribbon Wrap", "Cold Pack Included"]
  },
  {
    id: "classic-ny",
    name: "Classic New York Velvet",
    tagline: "Timeless Richness & Pure Elegance",
    description: "Traditional slow-baked New York style cheesecake with a rich vanilla bean scent and thick buttery graham cracker crust.",
    priceWhole: "$24.00",
    priceSlice: "$4.00",
    rating: 4.8,
    reviewsCount: 86,
    badge: "✨ Classic Icon",
    category: "classic",
    gradient: "from-rose-50 via-pink-100 to-purple-100",
    accentColor: "#ec4899",
    imagePath: "/images/hero_cheesecake.png",
    ingredients: ["Pure Vanilla Bean", "Heavy Cream", "Classic Graham Cracker", "Grade-A Cream Cheese"]
  },
  {
    id: "matcha-pistachio",
    name: "Ceremonial Matcha & Pistachio",
    tagline: "Earthy Matcha with Nutty Delight",
    description: "Japanese ceremonial grade matcha blended into smooth cream cheese, layered over roasted pistachio crumble.",
    priceWhole: "$29.00",
    priceSlice: "$4.75",
    rating: 4.9,
    reviewsCount: 75,
    badge: "🍵 Limited Edition",
    category: "seasonal",
    gradient: "from-emerald-50 via-teal-100 to-pink-100",
    accentColor: "#059669",
    imagePath: "/images/mango_cheesecake.png",
    ingredients: ["Uji Matcha Powder", "Crushed Pistachio", "Cream Cheese", "Sweet Butter Crust"]
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "leangsiv-sok",
    name: "Leangsiv Sok",
    role: "Team Leader & Documentation Lead",
    isLeader: true,
    quote: "Authentic storytelling and disciplined execution connect our heritage recipes to the hearts of our customers.",
    avatarGradient: "from-pink-500 via-rose-500 to-amber-400",
    imagePath: "/images/Leangsiv.PNG",
    bio: "Spearheads overall team direction, master brand communications, company documentation, and digital marketing."
  },
  {
    id: "yinchhay-im",
    name: "Yinchhay Im",
    role: "Strategy & Operations Coordinator",
    isLeader: false,
    quote: "Building a brand is about blending vision with disciplined execution and heartfelt quality.",
    avatarGradient: "from-pink-400 to-rose-400",
    imagePath: "/images/chhay.png",
    bio: "Coordinates strategic growth, investor relations, and operational alignment across Cambodia."
  },
  {
    id: "phearamoneath-phan",
    name: "Phearamoneath Phan",
    role: "Market Research Lead",
    isLeader: false,
    quote: "Understanding customer desires in every city unlocks true product innovation.",
    avatarGradient: "from-purple-400 to-pink-400",
    imagePath: "/images/moneath.png",
    bio: "Leads foot traffic analytics, location selection scores, and customer sentiment studies."
  },
  {
    id: "chanreach-try",
    name: "Chanreach Try",
    role: "Finance & Expense Coordinator",
    isLeader: false,
    quote: "Disciplined capital allocation ensures every slice delivers premium value and sustainable profit.",
    avatarGradient: "from-amber-400 to-rose-400",
    imagePath: "/images/chanreach.png",
    bio: "Manages financial modeling, trip expense reporting ($14,345 total), and expansion budgets."
  },
  {
    id: "mengsreang-san",
    name: "Mengsreang San",
    role: "Operations & Logistics Coordinator",
    isLeader: false,
    quote: "Cold-chain precision and fresh ingredient supply are the heartbeat of our kitchens.",
    avatarGradient: "from-rose-400 to-amber-400",
    imagePath: "/images/mengsreang.png",
    bio: "Oversees cold-chain logistics, kiosk pilot deployment, and kitchen workflow systems."
  }
];

export const INSTAGRAM_PHOTOS = [
  { title: "Freshly Sliced Khmer Palm Sugar", tag: "#FiveSlicesCambodia", imagePath: "/images/hero_cheesecake.png" },
  { title: "Mango Passionfruit Drizzle", tag: "#HandcraftedHappiness", imagePath: "/images/mango_cheesecake.png" },
  { title: "Seasonal Strawberry Blush", tag: "#PrettyInPink", imagePath: "/images/strawberry_cheesecake.png" },
  { title: "Boutique Kiosk Display", tag: "#SihanoukvillePopUp", imagePath: "/images/boutique_kiosk.png" },
  { title: "Signature Caramel Wave", tag: "#MondulkiriHeritage", imagePath: "/images/hero_cheesecake.png" },
  { title: "Pastel Gift Box Set", tag: "#CheesecakeLovers", imagePath: "/images/strawberry_cheesecake.png" }
];

export interface Partner {
  id: string;
  name: string;
  isInternational: boolean;
  country: string;
  flag: string;
  category: string;
  leadName?: string;
  description: string;
  logoPath: string;
  badgeText: string;
  achievement: string;
}

export const PARTNERS: Partner[] = [
  // INTERNATIONAL PARTNERS
  {
    id: "anchor-dairy",
    name: "Anchor Food Professionals",
    isInternational: true,
    country: "New Zealand",
    flag: "🇳🇿",
    category: "Dairy & Ingredient Supplier",
    leadName: "Fonterra Foodservice APAC",
    description: "Official international dairy supplier providing premium New Zealand cream cheese for Five Slices' signature texture.",
    logoPath: "/images/partner_anchor.png",
    badgeText: "International Dairy Partner",
    achievement: "100% Pure New Zealand Grass-Fed Cream Cheese Standard"
  },
  {
    id: "suntec-singapore",
    name: "Suntec Singapore Convention",
    isInternational: true,
    country: "Singapore",
    flag: "🇸🇬",
    category: "Digital Marketing & Research",
    leadName: "Asia-Pacific Retail Summit",
    description: "International partner host for social media research, short-form video strategy, and Gen-Z customer engagement.",
    logoPath: "/images/partner_suntec.svg",
    badgeText: "Singapore Tech Partner",
    achievement: "3.5x Customer Conversion via Short-Form Video Hooks"
  },
  {
    id: "klcc-malaysia",
    name: "Kuala Lumpur Convention Centre",
    isInternational: true,
    country: "Malaysia",
    flag: "🇲🇾",
    category: "AI Technology & Demand Systems",
    leadName: "Asia AI Workplace Summit",
    description: "International tech exchange partner for weekly AI demand forecasting and smart inventory stock alert systems.",
    logoPath: "/images/partner_klcc.svg",
    badgeText: "Malaysia AI Partner",
    achievement: "Weekly AI Sales Forecasting & Zero Waste Target"
  },
  {
    id: "schneider-electric",
    name: "Schneider Electric Cold-Chain",
    isInternational: true,
    country: "France / Global",
    flag: "🇫🇷",
    category: "Cold-Chain & IoT Technology",
    leadName: "Smart Logistics Division",
    description: "Global temperature control sensor & smart chiller monitoring partner ensuring 100% food safety compliance.",
    logoPath: "/images/partner_schneider.svg",
    badgeText: "Global Cold-Chain Partner",
    achievement: "24/7 Real-Time Smart Chiller Temperature Monitoring"
  },
  {
    id: "tiktok-shop",
    name: "TikTok Shop Southeast Asia",
    isInternational: true,
    country: "Regional",
    flag: "🌐",
    category: "Social Commerce & Creators",
    leadName: "Creator Ecosystem Division",
    description: "Regional micro-influencer & live-stream shopping integration partner for online dessert box drops.",
    logoPath: "/images/partner_tiktok.svg",
    badgeText: "Social Commerce Partner",
    achievement: "90-Day Viral Content Strategy & Micro-Influencer Network"
  },
  
  // DOMESTIC / NATIONAL CAMBODIAN PARTNERS
  {
    id: "grab-food",
    name: "GrabFood Cambodia",
    isInternational: false,
    country: "Cambodia",
    flag: "🇰🇭",
    category: "Logistics & Rapid Delivery",
    leadName: "Delivery Partner Network",
    description: "Official cold-chain dispatch & rapid delivery partner connecting our cloud kitchens directly to customer doorsteps.",
    logoPath: "/images/partner_grabcambodia.png",
    badgeText: "Delivery Partner",
    achievement: "1,200+ Slices Delivered with 4.9★ Customer Rating"
  },
  {
    id: "foodpanda",
    name: "Foodpanda Cambodia",
    isInternational: false,
    country: "Cambodia",
    flag: "🇰🇭",
    category: "Logistics & On-Demand Sales",
    leadName: "On-Demand Delivery Network",
    description: "Featured bakery merchant partner powering instant slice pre-orders & scheduled catering across city zones.",
    logoPath: "/images/partner_foodpanda.png",
    badgeText: "E-Commerce Partner",
    achievement: "Featured Top Bakery Merchant 2026 • 15-Min Dispatch"
  },
  {
    id: "aba-bank",
    name: "ABA Bank (KHQR)",
    isInternational: false,
    country: "Cambodia",
    flag: "🇰🇭",
    category: "Digital Payments & Fintech",
    leadName: "Fintech & PayWay Integration",
    description: "Seamless KHQR mobile payment gateway provider for instant, zero-friction online cheesecake pre-orders.",
    logoPath: "/images/partner_ababank.png",
    badgeText: "Payment Gateway",
    achievement: "100% Instant Cashless KHQR Online Checkout"
  },
  {
    id: "chip-mong",
    name: "Chip Mong Supermarket",
    isInternational: false,
    country: "Cambodia",
    flag: "🇰🇭",
    category: "Retail Mall & Supermarkets",
    leadName: "Retail Mall Expansion",
    description: "Premium supermarket retail placement partner for packaged dessert displays and mall kiosk pop-ups.",
    logoPath: "/images/partner_chipmong.png",
    badgeText: "Retail Mall Partner",
    achievement: "3 Mall Supermarket Display Kiosks Secured"
  },
  {
    id: "kspsa",
    name: "Kampong Speu Palm Sugar Association",
    isInternational: false,
    country: "Cambodia",
    flag: "🇰🇭",
    category: "Local Sourcing & CSR",
    leadName: "Organic Farmers Co-op",
    description: "Direct farm-to-bakery supplier providing 100% certified organic Kampong Speu GI palm sugar caramel glaze.",
    logoPath: "/images/partner_kspsa.png",
    badgeText: "GI Organic Sourcing",
    achievement: "100% Certified Organic Farm Sourcing & Fair-Trade Premium"
  },
  {
    id: "coastal-ventures",
    name: "Coastal Hospitality Ventures",
    isInternational: false,
    country: "Cambodia",
    flag: "🇰🇭",
    category: "Hotel Supply & Investment",
    leadName: "Ms. Dara Chenda",
    description: "Strategic hospitality investor partner ($75,000 potential pipeline) for commercial chillers & hotel dessert supply contracts.",
    logoPath: "/images/partner_coastal_ventures.png",
    badgeText: "Hotel & Investor Lead",
    achievement: "$75,000 Non-Binding Investment Interest & Hotel Network"
  },
  {
    id: "seaside-retail",
    name: "Seaside Retail Partners",
    isInternational: false,
    country: "Cambodia",
    flag: "🇰🇭",
    category: "Coastal Retail Kiosks",
    leadName: "Mr. Lim Vannak",
    description: "Kiosk retail partner hosting a 3-month seaside pop-up kiosk test along Ochheuteal Beach Road, Sihanoukville.",
    logoPath: "/images/partner_seaside_retail.png",
    badgeText: "Seaside Kiosk Partner",
    achievement: "3-Month Kiosk Pilot at Ochheuteal Beach Promenade"
  }
];
