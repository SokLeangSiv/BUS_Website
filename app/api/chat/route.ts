import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `
You are the official AI Chat Assistant for Five Slices Cheesecake Co., Cambodia's premier handcrafted cheesecake boutique.
You are friendly, knowledgeable, enthusiastic, helpful, and polite. Always use sweet, warm, professional bakery tone (with cute emojis like 🍰, 💖, ✨, 👑, 🌴).

YOUR KNOWLEDGE BASE:
1. BRAND OVERVIEW:
   - Company Name: Five Slices Cheesecake Co.
   - Core Mission: Combining artisanal bakery craftsmanship with authentic Cambodian ingredients (like organic Kampong Speu palm sugar), cold-chain delivery, technology, and genuine storytelling.
   - Boutique Location / HQ: No. 18, Norodom Boulevard, Daun Penh, Phnom Penh, Cambodia.
   - Opening Hours: Monday – Sunday: 8:00 AM – 8:00 PM.
   - Delivery: Cold-chain refrigerated boxes (2°C – 4°C) across Phnom Penh.
   - Contacts: Phone +855 (0) 23 888 555, Telegram @FiveSlicesBot, Email hello@fiveslicescheesecake.com.

2. TEAM LEADERSHIP (5 MEMBERS):
   - Leangsiv Sok — Team Leader & Documentation Lead (👑 Leader of Five Slices!). Quotes: "Authentic storytelling and disciplined execution connect our heritage recipes to the hearts of our customers."
   - Yinchhay Im — Strategy & Operations Coordinator.
   - Phearamoneath Phan — Market Research Lead.
   - Chanreach Try — Finance & Expense Coordinator.
   - Mengsreang San — Operations & Logistics Coordinator.

3. CHEESECAKE MENU & PRICES:
   - Khmer Palm Sugar Cheesecake (Signature Bestseller): $4.50 / slice | $28.00 whole 8" cake. Features slow-caramelized Kampong Speu palm sugar caramel swirl.
   - Mango Passionfruit Swirl: $4.25 / slice | $26.00 whole. Fresh Battambang mango curd & passionfruit glaze.
   - Classic New York Velvet: $4.00 / slice | $24.00 whole. Velvety vanilla bean & graham cracker crust.
   - Mondulkiri Espresso Chocolate: $4.50 / slice | $27.00 whole. Dark Belgian chocolate & dark-roasted Mondulkiri highland coffee.
   - Seasonal Strawberry Blush: $4.75 / slice | $29.00 whole. Strawberry compote & white chocolate shavings.
   - Ceremonial Matcha & Pistachio: $4.75 / slice | $29.00 whole. Japanese Uji matcha & roasted pistachio.
   - 4-Slice Sampler Gift Box: $16.00.

4. BUSINESS FIELDWORK TRIP REPORTS (5 TRIPS, $14,345 TOTAL EXPENSE):
   - Trip 1 Sihanoukville (5-6 Feb 2026): Met investors Ms. Dara Chenda ($75k non-binding interest from Coastal Hospitality Ventures) & Mr. Lim Vannak (3-month seaside kiosk pilot from Seaside Retail Partners). Total expense: $1,130.
   - Trip 2 Siem Reap (9-13 Mar 2026): Assessed 5 expansion sites. Top Flagship Candidate: Wat Bo Road (Score 4.4/5). Top Production Cloud Kitchen: Sala Kamreuk (Score 4.2/5). Other sites: Taphul Rd (4.0), NR6 (3.8), Old Market (3.4). Total expense: $2,565.
   - Trip 3 Mondulkiri (6-8 Apr 2026): Interviewed master baker Chef Vichea Sok (18 years service, retired Head Pastry Chef) in Sen Monorom. Documented Palm Sugar Cheesecake recipe origin. Total expense: $1,650.
   - Trip 4 Malaysia (18-20 May 2026): Attended KLCC AI Conference. Learned AI weekly demand forecasting & barcode inventory reorder alerts. Total expense: $5,050.
   - Trip 5 Singapore (11-12 Jun 2026): Attended Suntec Social Media Summit. 90-day content plan (3 short videos/week, micro-influencers). Total expense: $3,950.
   - Grand Total Fieldwork Budget: $14,345.

5. VIP TESTIMONIALS:
   - Jonathan MACARAEG (Paragon International University): "Five Slices Cheesecake Co. delivers outstanding quality. The Khmer Palm Sugar Cheesecake is a masterclass in culinary balance!"
   - Cristiano Ronaldo: "SIUUU! Five Slices Cheesecake Co. makes the best post-match reward!"
   - Lionel Messi: "Order Five Slices! The Khmer Palm Sugar Cheesecake is absolute perfection!"

INSTRUCTIONS FOR RESPONSES:
- Be concise (2-4 sentences max per response), warm, accurate, and cheerful.
- Answer questions directly based on the knowledge base above.
- If asked about ordering, tell them they can click any slice card on the Home page or submit a pre-order on the Contact page.
`;

export async function POST(req: NextRequest) {
  try {
    const { message, history } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;

    // If Gemini API Key is present in environment, call Google Gemini REST API
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
              maxOutputTokens: 300,
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

    // Built-in Instant Intelligent Knowledge Lookup Engine (Fallback when GEMINI_API_KEY is not configured)
    const reply = generateSmartFallbackReply(message);
    return NextResponse.json({ reply });

  } catch (error) {
    console.error("Gemini API Chat error:", error);
    return NextResponse.json({
      reply: "Welcome to Five Slices Cheesecake Co.! 🍰✨ I'd love to tell you about our signature Khmer Palm Sugar Cheesecake, our team led by Leangsiv Sok 👑, or our Siem Reap expansion plan (Wat Bo Road flagship score 4.4/5)! What would you like to know?"
    });
  }
}

function generateSmartFallbackReply(input: string): string {
  const query = input.toLowerCase();

  if (query.includes("bestseller") || query.includes("signature") || query.includes("palm sugar") || query.includes("popular") || query.includes("recommend")) {
    return "Our #1 Star Signature is the **Khmer Palm Sugar Cheesecake** ($4.50 slice / $28.00 whole) 🌴🍰! Handcrafted with organic Kampong Speu palm sugar slow-caramelized into a golden butterscotch swirl over velvety cream cheese.";
  }

  if (query.includes("leader") || query.includes("team") || query.includes("leangsiv") || query.includes("who is") || query.includes("owner") || query.includes("founder")) {
    return "Our team is led by **Leangsiv Sok (Team Leader & Documentation Lead 👑)**! She leads strategic direction alongside Yinchhay Im (Strategy), Phearamoneath Phan (Market Research), Chanreach Try (Finance), and Mengsreang San (Operations) ✨.";
  }

  if (query.includes("price") || query.includes("cost") || query.includes("menu") || query.includes("how much")) {
    return "Our slices range from **$4.00 to $4.75** (or $24 – $29 for whole 8\" cakes) 🍰! Popular picks: Khmer Palm Sugar ($4.50), Mango Passionfruit ($4.25), Classic NY ($4.00), and Mondulkiri Espresso ($4.50). You can also get a 4-Slice Sampler Box for $16.00!";
  }

  if (query.includes("siem reap") || query.includes("wat bo") || query.includes("expansion") || query.includes("location score") || query.includes("location")) {
    return "In our Siem Reap expansion fieldwork (Trip 2), we evaluated 5 commercial zones! **Wat Bo Road** emerged as our top flagship store candidate with a score of **4.4/5** 👑, while **Sala Kamreuk** scored **4.2/5** as our primary production kitchen hub!";
  }

  if (query.includes("expense") || query.includes("budget") || query.includes("trip") || query.includes("14")) {
    return "Across our 5 business field trips (Sihanoukville, Siem Reap, Mondulkiri, Malaysia, and Singapore), the team invested a grand total of **$14,345 USD** in market research, investor pitches, and AI tech exploration ✈️📊!";
  }

  if (query.includes("sihanoukville") || query.includes("investor") || query.includes("dara") || query.includes("kiosk")) {
    return "In Trip 1 to Sihanoukville, we met investors Ms. Dara Chenda (Coastal Hospitality Ventures, securing $75k non-binding interest) and Mr. Lim Vannak (Seaside Retail Partners, proposing a 3-month seaside kiosk pilot at Ochheuteal Beach) 🏖️🍰!";
  }

  if (query.includes("mondulkiri") || query.includes("vichea") || query.includes("chef") || query.includes("history") || query.includes("recipe")) {
    return "In Trip 3 to Mondulkiri, we interviewed Master Baker Chef Vichea Sok (18 years of service) in Sen Monorom to document the authentic origin story of our signature Khmer Palm Sugar recipe 📜✨!";
  }

  if (query.includes("ai") || query.includes("malaysia") || query.includes("singapore") || query.includes("marketing")) {
    return "Our team attended international summits in Malaysia (KLCC AI Conference for weekly demand forecasting & barcode stock alerts) and Singapore (Suntec Marketing Summit for 90-day short-form video campaigns) 🤖📱!";
  }

  if (query.includes("ronaldo") || query.includes("messi") || query.includes("jonathan") || query.includes("review") || query.includes("testimonial")) {
    return "We are honored to have glowing reviews from **Jonathan MACARAEG** (Paragon IU), **Cristiano Ronaldo** (*'SIUUU! Best post-match treat!'*), and **Lionel Messi** (*'Absolute perfection!'*) 🌟⚽!";
  }

  if (query.includes("delivery") || query.includes("contact") || query.includes("order") || query.includes("address") || query.includes("hours")) {
    return "Our flagship boutique is located at **No. 18 Norodom Blvd, Phnom Penh** (Open daily 8am – 8pm). We offer cold-chain delivery (2°C – 4°C). You can pre-order on our Contact page or click any slice card on the Home page 💌🛵!";
  }

  return "Welcome to Five Slices Cheesecake Co. 🍰✨ I am your Gemini AI Assistant! You can ask me about our signature Khmer Palm Sugar Cheesecake, our team led by Leangsiv Sok 👑, our Siem Reap expansion scores (Wat Bo Rd 4.4/5), or how to place a pre-order!";
}
