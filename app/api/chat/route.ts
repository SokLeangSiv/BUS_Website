import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `
You are Five Slice AI, the warm, intelligent, official AI assistant for Five Slices Cheesecake Co. in Cambodia.
You are powered by Google Gemini AI.

CRITICAL BEHAVIOR & CONVERSATIONAL RULES:
1. CONVERSATIONAL & NATURAL GREETINGS:
   - When the user says "hi", "hello", "hey", "good morning", or greetings, respond warmly and conversationally! For example: "Hello there! 👋 Warm greetings from Five Slices Cheesecake Co.! 🍰 I'm Five Slice AI, your sweet assistant. How can I help you today? Ask me about our signature Khmer Palm Sugar Cheesecake, our team led by Leangsiv Sok 👑, or our business trip reports! ✨"
   - DO NOT dump a huge rigid list of 5 trip reports on a simple greeting! Be natural, friendly, and human-like.

2. DYNAMIC & THOUGHTFUL ANSWERS:
   - Think carefully using the website knowledge base below and answer the user's specific question directly, accurately, and naturally.
   - Use bold text for key names/prices and emojis (🍰, 💖, ✨, 👑, 🌴, ✈️, 📊) to make responses look beautiful and readable.

YOUR COMPLETE WEBSITE KNOWLEDGE BASE:
- BRAND & HQ: Five Slices Cheesecake Co. located at No. 18 Norodom Blvd, Daun Penh, Phnom Penh. Open daily 8am – 8pm. Cold-chain delivery (2°C – 4°C). Phone: +855 (0) 23 888 555, Telegram: @FiveSlicesBot.
- BRAND OBJECTIVE: "To build a stronger cheesecake brand by combining disciplined expansion with customer experience, product quality, technology, and authentic company stories."
- TEAM LEADERSHIP (5 Executives):
  1. Leangsiv Sok — Team Leader & Documentation Lead (👑 Leader of Five Slices!).
  2. Yinchhay Im — Strategy & Operations Coordinator.
  3. Phearamoneath Phan — Market Research Lead.
  4. Chanreach Try — Finance & Expense Coordinator.
  5. Mengsreang San — Operations & Logistics Coordinator.
- MENU & PRICES:
  - Khmer Palm Sugar Cheesecake (Signature Bestseller 🌟): $4.50 slice / $28.00 whole 8" cake (organic Kampong Speu palm sugar caramel swirl).
  - Mango Passionfruit Swirl: $4.25 / $26.00 whole (Battambang mango curd & passionfruit glaze).
  - Classic New York Velvet: $4.00 / $24.00 whole (Vanilla bean & graham crust).
  - Mondulkiri Espresso Chocolate: $4.50 / $27.00 whole (70% dark Belgian chocolate & Mondulkiri coffee).
  - Seasonal Strawberry Blush: $4.75 / $29.00 whole (Strawberry compote & white chocolate).
  - Ceremonial Matcha & Pistachio: $4.75 / $29.00 whole (Uji matcha & roasted pistachio).
  - 4-Slice Sampler Gift Box: $16.00.
- 5 FIELDWORK TRIP REPORTS ($14,345 TOTAL EXPENSE):
  - Trip 1 Sihanoukville (5-6 Feb 2026): Investor pitches with Ms. Dara Chenda ($75k interest from Coastal Hospitality Ventures) & Mr. Lim Vannak (3-month kiosk pilot at Ochheuteal Beach). Total: $1,130 USD.
  - Trip 2 Siem Reap Expansion (9-13 Mar 2026): Evaluated 5 zones. Wat Bo Road = Score 4.4/5 (Recommended Flagship Store 👑). Sala Kamreuk = Score 4.2/5 (Recommended Production Cloud Kitchen 🏭). Taphul Rd (4.0), NR6 (3.8), Old Market (3.4). Total: $2,565 USD.
  - Trip 3 Mondulkiri Heritage (6-8 Apr 2026): Interviewed Master Baker Chef Vichea Sok (18 yrs service) in Sen Monorom for the Palm Sugar recipe origin story. Total: $1,650 USD.
  - Trip 4 Malaysia AI Summit (18-20 May 2026 at KLCC): Weekly AI demand forecasting & barcode inventory alerts. Total: $5,050 USD.
  - Trip 5 Singapore Marketing Summit (11-12 Jun 2026 at Suntec): Short-form video 3-second hooks & 90-day campaign plan. Total: $3,950 USD.
- VIP TESTIMONIALS: Jonathan MACARAEG (Paragon IU), Cristiano Ronaldo ("SIUUU!"), Lionel Messi.
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

    // Try calling Google Gemini API if key is set
    if (apiKey && apiKey.trim() !== "" && apiKey !== "your_gemini_api_key_here") {
      try {
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              contents: [
                {
                  role: "user",
                  parts: [{ text: `${SYSTEM_PROMPT}\n\nUser Message: "${message}"` }],
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
          const reply = data.candidates?.[0]?.content?.parts?.[0]?.text;
          if (reply && reply.trim() !== "") {
            return NextResponse.json({ reply: reply.trim() });
          }
        }
      } catch (err) {
        console.error("Gemini API call failed, using intelligent fallback:", err);
      }
    }

    // Dynamic Intelligent Conversational Engine
    const reply = generateDynamicConversationalReply(message);
    return NextResponse.json({ reply });

  } catch (error) {
    console.error("Chat error:", error);
    return NextResponse.json({
      reply: "Hello there! 👋 Warm greetings from Five Slices Cheesecake Co.! 🍰 I am Five Slice AI. How can I sweeten your day? Ask me about our signature **Khmer Palm Sugar Cheesecake**, our team led by **Leangsiv Sok 👑**, or our business trip reports! ✨"
    });
  }
}

function generateDynamicConversationalReply(input: string): string {
  const query = input.toLowerCase().trim();

  // Natural Greetings & Conversational Starts
  if (
    query === "hi" ||
    query === "hello" ||
    query === "hey" ||
    query === "greetings" ||
    query === "good morning" ||
    query === "good afternoon" ||
    query === "good evening" ||
    query === "hi there" ||
    query === "hello there" ||
    query.startsWith("hi ") ||
    query.startsWith("hello ")
  ) {
    return "Hello there! 👋 Warm greetings from Five Slices Cheesecake Co.! 🍰\n\nI'm **Five Slice AI**, your assistant! How can I sweeten your day today? Feel free to ask me about:\n- Our signature **Khmer Palm Sugar Cheesecake** ($4.50/slice)\n- Our team led by **Leangsiv Sok 👑**\n- Our **5 business trip reports** & Siem Reap expansion scores! ✨";
  }

  // How are you / Who are you
  if (query.includes("how are you") || query.includes("how r u") || query.includes("what's up") || query.includes("sup")) {
    return "I'm doing wonderfully, thank you! 🍰✨ Fresh cheesecakes are baking in our Phnom Penh kitchen, and I'm ready to help you explore our menu, business trip reports, or pre-order details. How can I assist you today?";
  }

  if (query.includes("who are you") || query.includes("what is your name") || query.includes("what's your name")) {
    return "I am **Five Slice AI** 🤖🍰, the official assistant for Five Slices Cheesecake Co.! I know everything about our signature cheesecakes, prices, team leader **Leangsiv Sok 👑**, and our 5 fieldwork trip reports ($14,345 total budget)! What would you like to know?";
  }

  // Trip 1 Sihanoukville
  if (query.includes("sihanoukville") || query.includes("dara") || query.includes("vannak") || query.includes("trip 1") || query.includes("coastal")) {
    return "In **Trip 1: Sihanoukville Investor Meetings** (5–6 Feb 2026) 🏖️, our team met key strategic partners:\n\n- **Ms. Dara Chenda (Coastal Hospitality Ventures):** Expressed up to **$75,000 USD** non-binding interest for chillers & hotel supply.\n- **Mr. Lim Vannak (Seaside Retail Partners):** Proposed a 3-month seaside kiosk pilot at Ochheuteal Beach.\n- **Total Trip Expense:** **$1,130 USD**";
  }

  // Trip 2 Siem Reap
  if (query.includes("siem reap") || query.includes("wat bo") || query.includes("sala kamreuk") || query.includes("taphul") || query.includes("trip 2") || query.includes("score")) {
    return "During **Trip 2: Siem Reap Expansion Assessment** (9–13 Mar 2026) 📊, we evaluated 5 commercial zones:\n\n- **Wat Bo Road (Score 4.4/5):** Recommended **Flagship Store** candidate 👑 (high tourist access & delivery hub).\n- **Sala Kamreuk (Score 4.2/5):** Recommended **Production Cloud Kitchen** 🏭.\n- **Taphul Road (4.0/5)** | **National Road 6 (3.8/5)** | **Old Market (3.4/5)**\n- **Total Trip Expense:** **$2,565 USD**";
  }

  // Trip 3 Mondulkiri
  if (query.includes("mondulkiri") || query.includes("vichea") || query.includes("chef") || query.includes("trip 3") || query.includes("romonea") || query.includes("sen monorom")) {
    return "In **Trip 3: Mondulkiri Heritage Feature** (6–8 Apr 2026) 📜, we interviewed Master Baker **Chef Vichea Sok** (18 years service) in Romonea Village, Sen Monorom.\n\nHe shared the authentic story of baking our first cheesecake in a shared oven and the origin of our **Khmer Palm Sugar** glaze recipe! Total trip expense: **$1,650 USD**.";
  }

  // Trip 4 Malaysia
  if (query.includes("malaysia") || query.includes("klcc") || query.includes("trip 4") || query.includes("ai conference") || query.includes("demand forecasting")) {
    return "In **Trip 4: Malaysia AI Summit** (18–20 May 2026 at KLCC) 🤖, our team explored AI demand forecasting (sales history + weather + holidays) to cut waste, plus barcode inventory reorder alerts for ingredients. Total trip expense: **$5,050 USD**.";
  }

  // Trip 5 Singapore
  if (query.includes("singapore") || query.includes("suntec") || query.includes("trip 5") || query.includes("social media") || query.includes("short-form")) {
    return "In **Trip 5: Singapore Marketing Summit** (11–12 Jun 2026 at Suntec) 📱, we learned short-form video hooks (3-second visual reveals) and built our 90-day campaign strategy with local micro-influencers. Total trip expense: **$3,950 USD**.";
  }

  // Total Expenses
  if (query.includes("expense") || query.includes("budget") || query.includes("14") || query.includes("total cost") || query.includes("grand total")) {
    return "Here is our consolidated fieldwork investment across 5 business trips 💰:\n\n- **Sihanoukville:** $1,130 USD\n- **Siem Reap:** $2,565 USD\n- **Mondulkiri:** $1,650 USD\n- **Malaysia AI Summit:** $5,050 USD\n- **Singapore Marketing Summit:** $3,950 USD\n- **GRAND TOTAL INVESTMENT:** **$14,345 USD**";
  }

  // Team Leader & Team Members
  if (query.includes("leader") || query.includes("team") || query.includes("leangsiv") || query.includes("who is") || query.includes("owner") || query.includes("yinchhay") || query.includes("phearamoneath") || query.includes("chanreach") || query.includes("mengsreang")) {
    return "Our team is led by **Leangsiv Sok (Team Leader & Documentation Lead 👑)**!\n\n- **Leangsiv Sok:** Team Leader & Documentation Lead 👑\n- **Yinchhay Im:** Strategy & Operations\n- **Phearamoneath Phan:** Market Research Lead\n- **Chanreach Try:** Finance & Expenses\n- **Mengsreang San:** Operations & Logistics";
  }

  // Bestseller & Menu
  if (query.includes("bestseller") || query.includes("signature") || query.includes("palm sugar") || query.includes("menu") || query.includes("flavor") || query.includes("price") || query.includes("how much")) {
    return "Here is our artisanal cheesecake menu 🍰✨:\n\n- **Khmer Palm Sugar (Signature Bestseller 🌟):** $4.50 slice | $28.00 whole\n- **Mango Passionfruit Swirl 🥭:** $4.25 / $26.00 whole\n- **Classic New York Velvet ✨:** $4.00 / $24.00 whole\n- **Mondulkiri Espresso ☕:** $4.50 / $27.00 whole\n- **Seasonal Strawberry Blush 🍓:** $4.75 / $29.00 whole\n- **Matcha & Pistachio 🍵:** $4.75 / $29.00 whole\n- **4-Slice Sampler Box:** $16.00";
  }

  // VIP Testimonials
  if (query.includes("ronaldo") || query.includes("messi") || query.includes("jonathan") || query.includes("review") || query.includes("testimonial")) {
    return "Here are reviews from our VIP guests 🌟:\n\n- **Jonathan MACARAEG (Paragon IU):** *'A masterclass in culinary balance!'*\n- **Cristiano Ronaldo:** *'SIUUU! Best post-match reward!'*\n- **Lionel Messi:** *'Absolute perfection!'*";
  }

  // Default Natural Conversational Fallback
  return `Thank you for your message! 🍰✨ As **Five Slice AI**, I can answer anything about our handcrafted cheesecakes (like our signature **Khmer Palm Sugar** for $4.50), our team led by **Leangsiv Sok 👑**, or our **5 business trip reports** ($14,345 total investment)! How can I help you next?`;
}
