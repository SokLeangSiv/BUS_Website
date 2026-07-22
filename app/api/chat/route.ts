import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `
You are Five Slice AI, the official AI Chat Assistant for Five Slices Cheesecake Co. in Cambodia.
You are warm, cheerful, highly professional, polite, and well-structured. Always format your answers cleanly using bold text (**text**), bullet points (- item), and emojis (🍰, 💖, ✨, 👑, 🌴).

YOUR KNOWLEDGE BASE:
1. BRAND OVERVIEW:
   - Company Name: Five Slices Cheesecake Co.
   - Mission: Combining artisanal bakery craftsmanship with organic Kampong Speu palm sugar, cold-chain delivery (2°C – 4°C), technology, and authentic storytelling.
   - Boutique HQ: No. 18, Norodom Boulevard, Daun Penh, Phnom Penh, Cambodia.
   - Hours: Open daily from 8:00 AM – 8:00 PM.
   - Contacts: Phone +855 (0) 23 888 555, Telegram @FiveSlicesBot, Email hello@fiveslicescheesecake.com.

2. TEAM LEADERSHIP (5 MEMBERS):
   - Leangsiv Sok — Team Leader & Documentation Lead (👑 Team Leader of Five Slices!). Quotes: "Authentic storytelling and disciplined execution connect our heritage recipes to the hearts of our customers."
   - Yinchhay Im — Strategy & Operations Coordinator.
   - Phearamoneath Phan — Market Research Lead.
   - Chanreach Try — Finance & Expense Coordinator.
   - Mengsreang San — Operations & Logistics Coordinator.

3. CHEESECAKE MENU & PRICES:
   - Khmer Palm Sugar Cheesecake (Signature Bestseller): $4.50 / slice | $28.00 whole 8" cake. Organic Kampong Speu palm sugar caramel swirl.
   - Mango Passionfruit Swirl: $4.25 / slice | $26.00 whole. Battambang mango curd & passionfruit glaze.
   - Classic New York Velvet: $4.00 / slice | $24.00 whole. Vanilla bean & graham cracker crust.
   - Mondulkiri Espresso Chocolate: $4.50 / slice | $27.00 whole. Dark Belgian chocolate & dark-roasted Mondulkiri coffee.
   - Seasonal Strawberry Blush: $4.75 / slice | $29.00 whole. Strawberry compote & white chocolate shavings.
   - Ceremonial Matcha & Pistachio: $4.75 / slice | $29.00 whole. Uji matcha & roasted pistachio.
   - 4-Slice Sampler Gift Box: $16.00.

4. FIELDWORK TRIP REPORTS (5 TRIPS, $14,345 TOTAL EXPENSE):
   - Trip 1 Sihanoukville (5-6 Feb 2026): Met Ms. Dara Chenda ($75k non-binding interest from Coastal Hospitality Ventures) & Mr. Lim Vannak (3-month seaside kiosk pilot). Total expense: $1,130.
   - Trip 2 Siem Reap (9-13 Mar 2026): Assessed 5 expansion zones. Top Flagship Candidate: Wat Bo Road (Score 4.4/5). Top Production Cloud Kitchen: Sala Kamreuk (Score 4.2/5). Other sites: Taphul Rd (4.0), NR6 (3.8), Old Market (3.4). Total expense: $2,565.
   - Trip 3 Mondulkiri (6-8 Apr 2026): Interviewed master baker Chef Vichea Sok (18 years service) in Sen Monorom. Documented Palm Sugar recipe origin. Total expense: $1,650.
   - Trip 4 Malaysia (18-20 May 2026): Attended KLCC AI Summit for demand forecasting & barcode inventory alerts. Total expense: $5,050.
   - Trip 5 Singapore (11-12 Jun 2026): Attended Suntec Marketing Summit for 90-day short video strategy. Total expense: $3,950.
   - Grand Total Expenses: $14,345.

5. VIP TESTIMONIALS:
   - Jonathan MACARAEG (Paragon International University): "Five Slices Cheesecake Co. delivers outstanding quality. The Khmer Palm Sugar Cheesecake is a masterclass in culinary balance!"
   - Cristiano Ronaldo: "SIUUU! Five Slices Cheesecake Co. makes the best post-match reward!"
   - Lionel Messi: "Order Five Slices! The Khmer Palm Sugar Cheesecake is absolute perfection!"

FORMATTING RULES:
- Use bullet points and bold headers for multi-item replies.
- Keep answers structured, elegant, and pleasant to read.
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
              temperature: 0.7,
              maxOutputTokens: 350,
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

    const reply = generateSmartFallbackReply(message);
    return NextResponse.json({ reply });

  } catch (error) {
    console.error("Gemini API Chat error:", error);
    return NextResponse.json({
      reply: "Welcome to Five Slices Cheesecake Co.! 🍰✨ How can I help you today? Ask me about our signature **Khmer Palm Sugar Cheesecake**, our team led by **Leangsiv Sok 👑**, or our **Siem Reap expansion plan**!"
    });
  }
}

function generateSmartFallbackReply(input: string): string {
  const query = input.toLowerCase();

  if (query.includes("bestseller") || query.includes("signature") || query.includes("palm sugar") || query.includes("popular") || query.includes("recommend")) {
    return "Our #1 Bestselling Signature is the **Khmer Palm Sugar Cheesecake** 🌴🍰!\n\n- **Slice Price:** $4.50 USD\n- **Whole 8\" Cake:** $28.00 USD\n- **Description:** Slow-caramelized organic Kampong Speu palm sugar caramel swirl over smooth cream cheese!";
  }

  if (query.includes("leader") || query.includes("team") || query.includes("leangsiv") || query.includes("who is") || query.includes("owner") || query.includes("founder")) {
    return "Our executive team is led by **Leangsiv Sok (Team Leader & Documentation Lead 👑)**!\n\n- **Leangsiv Sok:** Team Leader & Documentation Lead\n- **Yinchhay Im:** Strategy & Operations Coordinator\n- **Phearamoneath Phan:** Market Research Lead\n- **Chanreach Try:** Finance & Expense Coordinator\n- **Mengsreang San:** Operations & Logistics Coordinator";
  }

  if (query.includes("price") || query.includes("cost") || query.includes("menu") || query.includes("how much")) {
    return "Here is our handcrafted cheesecake menu 🍰✨:\n\n- **Khmer Palm Sugar (Signature):** $4.50 / slice | $28.00 whole\n- **Mango Passionfruit Swirl:** $4.25 / slice | $26.00 whole\n- **Classic New York Velvet:** $4.00 / slice | $24.00 whole\n- **Mondulkiri Espresso:** $4.50 / slice | $27.00 whole\n- **Seasonal Strawberry Blush:** $4.75 / slice | $29.00 whole\n- **Matcha & Pistachio:** $4.75 / slice | $29.00 whole\n- **4-Slice Sampler Gift Box:** $16.00";
  }

  if (query.includes("siem reap") || query.includes("wat bo") || query.includes("expansion") || query.includes("location score") || query.includes("location")) {
    return "In our Siem Reap expansion fieldwork (Trip 2), we evaluated 5 commercial zones 📊:\n\n- **Wat Bo Road:** Score **4.4/5** 👑 (Top Flagship Boutique Candidate)\n- **Sala Kamreuk:** Score **4.2/5** 🏭 (Top Production Kitchen Hub)\n- **Taphul Road:** Score 4.0/5\n- **National Road 6:** Score 3.8/5\n- **Old Market / Pub Street:** Score 3.4/5";
  }

  if (query.includes("expense") || query.includes("budget") || query.includes("trip") || query.includes("14")) {
    return "Across our 5 business field trips, the team invested a grand total of **$14,345 USD** ✈️📊:\n\n- **Trip 1 Sihanoukville:** $1,130 USD\n- **Trip 2 Siem Reap:** $2,565 USD\n- **Trip 3 Mondulkiri:** $1,650 USD\n- **Trip 4 Malaysia AI Conference:** $5,050 USD\n- **Trip 5 Singapore Marketing Summit:** $3,950 USD\n- **Grand Total:** **$14,345 USD**";
  }

  if (query.includes("sihanoukville") || query.includes("investor") || query.includes("dara") || query.includes("kiosk")) {
    return "In Trip 1 to Sihanoukville, we met two key investment leads 🏖️:\n\n- **Ms. Dara Chenda (Coastal Hospitality Ventures):** $75,000 non-binding interest for equipment & hotel contracts.\n- **Mr. Lim Vannak (Seaside Retail Partners):** Proposed a 3-month seaside kiosk pilot at Ochheuteal Beach!";
  }

  if (query.includes("mondulkiri") || query.includes("vichea") || query.includes("chef") || query.includes("history") || query.includes("recipe")) {
    return "In Trip 3 to Mondulkiri, we interviewed Master Baker **Chef Vichea Sok** (18 years of service) in Sen Monorom to document the authentic recipe origin of our signature Palm Sugar Cheesecake 📜✨!";
  }

  if (query.includes("ai") || query.includes("malaysia") || query.includes("singapore") || query.includes("marketing")) {
    return "Our team attended international summits in Malaysia & Singapore 🤖📱:\n\n- **Malaysia KLCC AI Summit:** AI weekly demand forecasting & barcode inventory alerts.\n- **Singapore Suntec Summit:** 90-day short-form video campaign with local micro-influencers.";
  }

  if (query.includes("ronaldo") || query.includes("messi") || query.includes("jonathan") || query.includes("review") || query.includes("testimonial")) {
    return "Here is what our VIP customers say 🌟:\n\n- **Jonathan MACARAEG (Paragon IU):** *'A masterclass in culinary balance!'*\n- **Cristiano Ronaldo:** *'SIUUU! Best post-match reward!'*\n- **Lionel Messi:** *'Absolute perfection!'*";
  }

  if (query.includes("delivery") || query.includes("contact") || query.includes("order") || query.includes("address") || query.includes("hours")) {
    return "Here is how to reach us 💌🛵:\n\n- **Location:** No. 18 Norodom Blvd, Phnom Penh\n- **Opening Hours:** Daily 8:00 AM – 8:00 PM\n- **Delivery:** Cold-chain refrigerated boxes (2°C – 4°C)\n- **Pre-Orders:** Click any slice on the Home page or use our Contact form!";
  }

  return "Welcome to **Five Slice AI** 🍰✨!\n\nHow can I help you today? You can ask about:\n- Our signature **Khmer Palm Sugar Cheesecake**\n- Our team led by **Leangsiv Sok 👑**\n- Our **Siem Reap expansion scores** (Wat Bo Rd 4.4/5)\n- Total fieldwork trip expenses ($14,345)";
}
