import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `
You are Five Slice AI, the official intelligent AI Assistant for Five Slices Cheesecake Co. in Cambodia.
You possess complete, exhaustive knowledge of every single page, report, score, price, leader, ingredient, and detail on this website.
Always format your answers in a professional, clean, pleasant, and structured format using bold headings (**text**), bullet points (- item), price badges, and friendly bakery emojis (🍰, 💖, ✨, 👑, 🌴, ✈️, 📊).

1. BRAND OVERVIEW & OBJECTIVE:
   - Brand Name: Five Slices Cheesecake Co.
   - Primary Business Objective: "To build a stronger cheesecake brand by combining disciplined expansion with customer experience, product quality, technology, and authentic company stories."
   - Headquarters / Flagship Boutique: No. 18, Norodom Boulevard, Daun Penh, Phnom Penh, Cambodia.
   - Opening Hours: Monday – Sunday: 8:00 AM – 8:00 PM.
   - Cold-Chain Delivery: Delivered in refrigerated boxes (2°C – 4°C) across Phnom Penh.
   - Contact Info: Phone +855 (0) 23 888 555, Telegram @FiveSlicesBot, Email hello@fiveslicescheesecake.com.
   - CSR & Farmer Outreach: Direct fair-trade purchasing of organic palm sugar from smallholder farming cooperatives in Kampong Speu province.

2. EXECUTIVE TEAM LEADERSHIP (5 MEMBERS):
   - Leangsiv Sok — Team Leader & Documentation Lead (👑 Team Leader of Five Slices!). Quote: "Authentic storytelling and disciplined execution connect our heritage recipes to the hearts of our customers."
   - Yinchhay Im — Strategy & Operations Coordinator. Quote: "Building a brand is about blending vision with disciplined execution and heartfelt quality."
   - Phearamoneath Phan — Market Research Lead. Quote: "Understanding customer desires in every city unlocks true product innovation."
   - Chanreach Try — Finance & Expense Coordinator. Quote: "Disciplined capital allocation ensures every slice delivers premium value and sustainable profit."
   - Mengsreang San — Operations & Logistics Coordinator. Quote: "Cold-chain precision and fresh ingredient supply are the heartbeat of our kitchens."

3. FULL CHEESECAKE MENU, INGREDIENTS & PRICES:
   - Khmer Palm Sugar Cheesecake (Signature Bestseller 🌟): $4.50 / slice | $28.00 whole 8" cake. Organic Kampong Speu palm sugar slow-caramelized into a golden butterscotch swirl, cream cheese, vanilla bean, artisan crust.
   - Mango Passionfruit Swirl (Fan Favorite 🥭): $4.25 / slice | $26.00 whole. Sun-ripened Battambang mango curd & passionfruit glaze on honey-graham base.
   - Classic New York Velvet (Classic Icon ✨): $4.00 / slice | $24.00 whole. Pure vanilla bean, heavy cream, Grade-A cream cheese, classic graham crust.
   - Mondulkiri Espresso Chocolate (Coffee Lovers ☕): $4.50 / slice | $27.00 whole. 70% dark Belgian chocolate & dark-roasted Mondulkiri highland espresso.
   - Seasonal Strawberry Blush (Seasonal Special 🍓): $4.75 / slice | $29.00 whole. Strawberry reduction compote & white chocolate micro-shavings.
   - Ceremonial Matcha & Pistachio (Limited Edition 🍵): $4.75 / slice | $29.00 whole. Uji ceremonial matcha & roasted crushed pistachio.
   - 4-Slice Sampler Gift Box: $16.00.

4. COMPLETE BUSINESS FIELDWORK TRIP REPORTS (5 TRIPS, $14,345 GRAND TOTAL):
   - Trip 1 — Sihanoukville (5–6 Feb 2026, 2 days/1 night):
     - Purpose: Investor meetings for cold-chain, beachside kiosk, and hotel supply.
     - Locations: Seaside Business Lounge & Coastal Investment Hub (Ochheuteal Beach Rd / Independence Beach Rd).
     - Investors: Ms. Dara Chenda (Coastal Hospitality Ventures, up to $75,000 non-binding interest for chillers/contracts) & Mr. Lim Vannak (Seaside Retail Partners, 3-month seaside kiosk pilot at Ochheuteal Beach).
     - Expenses: Van $320, Accommodation $240, Meals $210, Meeting rooms $180, Local transport $60, Presentation $45, Contingency $75 → Total $1,130 USD.
   - Trip 2 — Siem Reap Expansion Assessment (9–13 Mar 2026, 5 days/4 nights):
     - Purpose: Evaluated 5 commercial zones (40+ interviews with locals, hotel staff, tuk-tuk drivers).
     - Scores (out of 5):
       * Wat Bo Road: Foot Traffic 4, Rent 4, Tourist Access 5, Delivery 5, Competition 4 → Overall 4.4/5 (RECOMMENDED FLAGSHIP STORE 👑).
       * Sala Kamreuk: Foot Traffic 3, Rent 5, Tourist Access 3, Delivery 5, Competition 5 → Overall 4.2/5 (RECOMMENDED PRODUCTION KITCHEN HUB 🏭).
       * Taphul Road: Foot Traffic 3, Rent 5, Tourist Access 4, Delivery 4, Competition 4 → Overall 4.0/5.
       * National Road 6: Foot Traffic 5, Rent 3, Tourist Access 4, Delivery 4, Competition 3 → Overall 3.8/5.
       * Old Market / Pub Street: Foot Traffic 5, Rent 2, Tourist Access 5, Delivery 3, Competition 2 → Overall 3.4/5.
     - Expenses: Transport $600, Accommodation $720, Meals $625, Local transport $250, Research materials $120, Property review $100, Contingency $150 → Total $2,565 USD.
   - Trip 3 — Mondulkiri Heritage & Master Baker Interview (6–8 Apr 2026, 3 days/2 nights):
     - Address: No. 27, Romonea Village, Sangkat Spean Meanchey, Sen Monorom.
     - Interviewee: Mr. Vichea Sok, retired Head Pastry Chef (18 years of service).
     - Story: First cheesecake baked in a small shared oven; origin of Kampong Speu Palm Sugar recipe; principles of precise ingredient weighing, temperature control, and patience.
     - Feature Article: "From a Small Oven to a Growing Brand: The Story of Chef Vichea Sok".
     - Expenses: Transport $550, Accommodation $300, Meals $375, Interview prep/gift $150, Local transport $80, Photography $100, Contingency $95 → Total $1,650 USD.
   - Trip 4 — Malaysia AI in Workplace Summit (18–20 May 2026, 3 days/2 nights):
     - Location: Kuala Lumpur Convention Centre (KLCC).
     - Focus: Weekly demand forecasting (sales history + weather + holidays), barcode inventory reorder alerts for cream cheese/butter/eggs, automated customer chatbots.
     - Expenses: Airfare $1,400, Accommodation $720, Registration $1,750, Meals $600, Local transport $250, Insurance $150, Contingency $180 → Total $5,050 USD.
   - Trip 5 — Singapore Social Media Marketing Summit (11–12 Jun 2026, 2 days/1 night):
     - Location: Suntec Singapore Convention & Exhibition Centre.
     - Focus: Short-form video dynamics (3-second hooks), 3 content pillars (Product Desire 60%, BTS Trust 20%, Customer Stories 20%), local micro-influencers, 90-day campaign plan.
     - Expenses: Airfare $1,100, Accommodation $600, Registration $1,400, Meals $350, Local transport $120, Networking $150, Contingency $230 → Total $3,950 USD.
   - Consolidated Expenses Summary: Sihanoukville $1,130 + Siem Reap $2,565 + Mondulkiri $1,650 + Malaysia $5,050 + Singapore $3,950 = GRAND TOTAL $14,345 USD.

5. VIP TESTIMONIALS:
   - Jonathan MACARAEG (Paragon International University): "Five Slices Cheesecake Co. delivers outstanding quality. The Khmer Palm Sugar Cheesecake is a masterclass in culinary balance!"
   - Cristiano Ronaldo: "SIUUU! Five Slices Cheesecake Co. makes the best post-match reward!"
   - Lionel Messi: "Order Five Slices! The Khmer Palm Sugar Cheesecake is absolute perfection!"

FORMATTING INSTRUCTIONS:
- Structure all answers with clear bold headings, bullet points, and clean spacing.
- Be precise, polite, warm, and helpful.
`;

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (apiKey) {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                role: "user",
                parts: [{ text: `${SYSTEM_PROMPT}\n\nUser Question: ${message}` }],
              },
            ],
            generationConfig: {
              temperature: 0.6,
              maxOutputTokens: 400,
            },
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        const reply =
          data.candidates?.[0]?.content?.parts?.[0]?.text ||
          "I'm delighted to help! How else can I assist you with Five Slices Cheesecake Co.? 🍰✨";
        return NextResponse.json({ reply });
      }
    }

    const reply = generateExhaustiveFallbackReply(message);
    return NextResponse.json({ reply });

  } catch (error) {
    console.error("Gemini API Chat error:", error);
    return NextResponse.json({
      reply: "Welcome to Five Slices Cheesecake Co.! 🍰✨ I am Five Slice AI. Ask me about our signature **Khmer Palm Sugar Cheesecake**, our team led by **Leangsiv Sok 👑**, our **5 trip reports**, or our **Siem Reap expansion scores**!"
    });
  }
}

function generateExhaustiveFallbackReply(input: string): string {
  const query = input.toLowerCase();

  // Trip 1 Sihanoukville
  if (query.includes("sihanoukville") || query.includes("dara") || query.includes("vannak") || query.includes("trip 1") || query.includes("coastal")) {
    return "Here is the summary of **Trip 1: Sihanoukville Investor Meetings** (5–6 Feb 2026) 🏖️:\n\n- **Purpose:** Pitch strategic investors for cold-chain equipment, beachside kiosk, and hotel supply.\n- **Key Investors:**\n  • **Ms. Dara Chenda (Coastal Hospitality Ventures):** Expressed up to **$75,000 USD** non-binding investment interest for chillers & hotel supply.\n  • **Mr. Lim Vannak (Seaside Retail Partners):** Proposed a 3-month seaside kiosk pilot at Ochheuteal Beach.\n- **Itemized Expenses:** Van $320, Lodging $240, Meals $210, Meetings $180, Local transport $60, Pitch materials $45, Contingency $75.\n- **Total Expense:** **$1,130 USD**";
  }

  // Trip 2 Siem Reap
  if (query.includes("siem reap") || query.includes("wat bo") || query.includes("sala kamreuk") || query.includes("taphul") || query.includes("trip 2") || query.includes("score")) {
    return "Here is the summary of **Trip 2: Siem Reap Expansion Assessment** (9–13 Mar 2026) 📊:\n\n- **Evaluation Scores (out of 5):**\n  • **Wat Bo Road:** **4.4/5** 👑 (**Recommended Flagship Store** — optimal balance of foot traffic, tourists, & delivery)\n  • **Sala Kamreuk:** **4.2/5** 🏭 (**Recommended Cloud Kitchen** — low rent, prime delivery hub)\n  • **Taphul Road:** 4.0/5\n  • **National Road 6:** 3.8/5\n  • **Old Market / Pub Street:** 3.4/5 (High rent & competition)\n- **Itemized Expenses:** Transport $600, Lodging $720, Meals $625, Site visits $250, Research $120, Property review $100, Contingency $150.\n- **Total Expense:** **$2,565 USD**";
  }

  // Trip 3 Mondulkiri
  if (query.includes("mondulkiri") || query.includes("vichea") || query.includes("chef") || query.includes("trip 3") || query.includes("romonea") || query.includes("sen monorom")) {
    return "Here is the summary of **Trip 3: Mondulkiri Heritage Interview** (6–8 Apr 2026) 📜:\n\n- **Interview Subject:** **Mr. Vichea Sok** (Retired Head Pastry Chef, 18 years of service) at No. 27, Romonea Village, Sen Monorom.\n- **Highlights:** Captured oral history of baking our first cheesecake in a shared oven, recipe temperature discipline, and origin of the Kampong Speu Palm Sugar recipe.\n- **Output:** 1,000-word feature story *'From a Small Oven to a Growing Brand: The Story of Chef Vichea Sok'*.\n- **Total Expense:** **$1,650 USD**";
  }

  // Trip 4 Malaysia
  if (query.includes("malaysia") || query.includes("klcc") || query.includes("trip 4") || query.includes("ai conference") || query.includes("demand forecasting")) {
    return "Here is the summary of **Trip 4: Malaysia AI Summit** (18–20 May 2026 at KLCC) 🤖:\n\n- **Focus:** Practical AI tools for food business operations.\n- **Key Takeaways:** Weekly AI demand forecasting (sales history + weather + holidays) to cut waste, barcode inventory alerts for cream cheese/butter/eggs, and automated customer chatbots.\n- **Total Expense:** **$5,050 USD** (Airfare $1,400, Lodging $720, Registration $1,750, Meals $600, Transport $250, Insurance $150, Contingency $180).";
  }

  // Trip 5 Singapore
  if (query.includes("singapore") || query.includes("suntec") || query.includes("trip 5") || query.includes("social media") || query.includes("short-form")) {
    return "Here is the summary of **Trip 5: Singapore Marketing Summit** (11–12 Jun 2026 at Suntec) 📱:\n\n- **Focus:** Short-form video dynamics & social commerce.\n- **Key Takeaways:** 3-second visual hooks (cutting/reveals), 3 content pillars (60% Product Desire, 20% BTS Trust, 20% Customer Stories), local micro-influencers, and a structured 90-day campaign plan.\n- **Total Expense:** **$3,950 USD** (Airfare $1,100, Lodging $600, Registration $1,400, Meals $350, Transport $120, Networking $150, Contingency $230).";
  }

  // Total Expenses
  if (query.includes("expense") || query.includes("budget") || query.includes("14") || query.includes("total cost") || query.includes("grand total")) {
    return "Here is the consolidated financial summary of all 5 fieldwork trips 💰:\n\n- **Trip 1 Sihanoukville:** $1,130 USD\n- **Trip 2 Siem Reap:** $2,565 USD\n- **Trip 3 Mondulkiri:** $1,650 USD\n- **Trip 4 Malaysia AI Summit:** $5,050 USD\n- **Trip 5 Singapore Summit:** $3,950 USD\n- **GRAND TOTAL FIELDWORK INVESTMENT:** **$14,345 USD**";
  }

  // Team Leader & Team Members
  if (query.includes("leader") || query.includes("team") || query.includes("leangsiv") || query.includes("who is") || query.includes("owner") || query.includes("yinchhay") || query.includes("phearamoneath") || query.includes("chanreach") || query.includes("mengsreang")) {
    return "Our executive team is led by **Leangsiv Sok (Team Leader & Documentation Lead 👑)**!\n\n- **Leangsiv Sok:** Team Leader & Documentation Lead 👑\n- **Yinchhay Im:** Strategy & Operations Coordinator\n- **Phearamoneath Phan:** Market Research Lead\n- **Chanreach Try:** Finance & Expense Coordinator\n- **Mengsreang San:** Operations & Logistics Coordinator";
  }

  // Bestseller & Menu
  if (query.includes("bestseller") || query.includes("signature") || query.includes("palm sugar") || query.includes("menu") || query.includes("flavor") || query.includes("price") || query.includes("how much")) {
    return "Here is our handcrafted cheesecake menu 🍰✨:\n\n- **Khmer Palm Sugar (Signature Bestseller 🌟):** $4.50 slice | $28.00 whole (Slow-caramelized Kampong Speu palm sugar caramel swirl)\n- **Mango Passionfruit Swirl 🥭:** $4.25 slice | $26.00 whole\n- **Classic New York Velvet ✨:** $4.00 slice | $24.00 whole\n- **Mondulkiri Espresso Chocolate ☕:** $4.50 slice | $27.00 whole\n- **Seasonal Strawberry Blush 🍓:** $4.75 slice | $29.00 whole\n- **Ceremonial Matcha & Pistachio 🍵:** $4.75 slice | $29.00 whole\n- **4-Slice Sampler Gift Box 🎁:** $16.00";
  }

  // VIP Testimonials
  if (query.includes("ronaldo") || query.includes("messi") || query.includes("jonathan") || query.includes("review") || query.includes("testimonial")) {
    return "Here are our featured customer reviews 🌟:\n\n- **Jonathan MACARAEG (Paragon IU):** *'A masterclass in culinary balance — velvety cream cheese paired with smoky local palm sugar caramel!'*\n- **Cristiano Ronaldo:** *'SIUUU! Five Slices Cheesecake Co. makes the best post-match reward!'*\n- **Lionel Messi:** *'Order Five Slices! The Khmer Palm Sugar Cheesecake is absolute perfection!'*";
  }

  // Business Objective
  if (query.includes("objective") || query.includes("mission") || query.includes("vision") || query.includes("goal") || query.includes("about")) {
    return "Our primary business objective is:\n\n*\"To build a stronger cheesecake brand by combining disciplined expansion with customer experience, product quality, technology, and authentic company stories.\"*\n\nWe operate from **No. 18 Norodom Blvd, Phnom Penh** (Daily 8am – 8pm) with refrigerated cold-chain delivery (2°C – 4°C) 🛵🍰!";
  }

  return "Welcome to **Five Slice AI** 🍰✨!\n\nI have complete knowledge of Five Slices Cheesecake Co.! Ask me anything about:\n- **All 5 Business Trip Reports** (Sihanoukville, Siem Reap, Mondulkiri, Malaysia, Singapore)\n- **Siem Reap Location Scores** (Wat Bo Rd flagship score 4.4/5)\n- **Total Fieldwork Expenses** ($14,345 grand total)\n- **Team Leader Leangsiv Sok 👑** and our 5 executives\n- **Menu & Prices** (Khmer Palm Sugar $4.50 slice / $28 whole)";
}
