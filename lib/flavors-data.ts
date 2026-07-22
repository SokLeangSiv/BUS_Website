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
  name: string;
  role: string;
  quote: string;
  avatarGradient: string;
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
    name: "Yinchhay Im",
    role: "Team Leader & Strategy Coordinator",
    quote: "Building a brand is about blending vision with disciplined execution and heartfelt quality.",
    avatarGradient: "from-pink-400 to-rose-400",
    bio: "Spearheads strategic growth, investor relations, and master brand direction across Cambodia."
  },
  {
    name: "Phearamoneath Phan",
    role: "Market Research Lead",
    quote: "Understanding customer desires in every city unlocks true product innovation.",
    avatarGradient: "from-purple-400 to-pink-400",
    bio: "Leads foot traffic analytics, location selection scores, and customer sentiment studies."
  },
  {
    name: "Chanreach Try",
    role: "Finance & Expense Coordinator",
    quote: "Disciplined capital allocation ensures every slice delivers premium value and sustainable profit.",
    avatarGradient: "from-amber-400 to-rose-400",
    bio: "Manages financial modeling, trip expense reporting ($14,345 total), and expansion budgets."
  },
  {
    name: "Mengsreang San",
    role: "Operations & Logistics Coordinator",
    quote: "Cold-chain precision and fresh ingredient supply are the heartbeat of our kitchens.",
    avatarGradient: "from-rose-400 to-amber-400",
    bio: "Oversees cold-chain logistics, kiosk pilot deployment, and kitchen workflow systems."
  },
  {
    name: "Leangsiv Sok",
    role: "Documentation & Communications Lead",
    quote: "Authentic storytelling connects our heritage recipes to the hearts of our customers.",
    avatarGradient: "from-fuchsia-400 to-pink-400",
    bio: "Directs company publications, master chef interviews, digital marketing, and CSR initiatives."
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
