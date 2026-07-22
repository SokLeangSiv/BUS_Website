# Build Prompt: Five Slices Cheesecake Co. Website (Next.js)

Paste this into Claude Code (or use here) to scaffold the project with real content already filled in.

---

## PROMPT

Build a Next.js (App Router, TypeScript, Tailwind CSS) full-stack website for
**"Five Slices Cheesecake Co."** — a Cambodian cheesecake business that makes handcrafted
whole cakes, mini cheesecakes, and seasonal dessert boxes.

### Design direction
- Girly, cute, trendy aesthetic that appeals to a young female / queer audience.
- Color palette: soft pastel pink, cream, lavender, warm gold/blush accents.
- Rounded corners, soft drop shadows, generous whitespace.
- Fun rounded display font for headings (e.g. "Fredoka", "Quicksand", or "Poppins") + clean
  sans for body — load via next/font.
- Subtle hover animations (scale/shine on buttons/cards), soft fade-ins on scroll.
- Decorative touches: sprinkles, hearts, cherries, pastel blob shapes (SVG).
- Fully responsive, mobile-first.

### Pages / Routes

**1. `/` — Home**
- Hero with tagline + CTA + hero image
- Brand intro
- Featured flavors: Classic New York, Mango Passion, Khmer Palm Sugar, Chocolate Coffee
- Instagram-style photo strip (6–10 images)

**2. `/about` — Company Profile**
- Company name: Five Slices Cheesecake Co.
- Business objective: Build a stronger cheesecake brand by combining disciplined expansion
  with customer experience, product quality, technology, and authentic company stories.
- Team section — 5 members, each with name + role (use these real names/roles):
  - Yinchhay Im — Team Leader & Strategy Coordinator
  - Phearamoneath Phan — Market Research Lead
  - Chanreach Try — Finance & Expense Coordinator
  - Mengsreang San — Operations & Logistics Coordinator
  - Leangsiv Sok — Documentation & Communications Lead
- Vision, Mission, Core Values (3 cards — you can draft these to match the brand)
- "What makes us unique": local Khmer flavors (like Palm Sugar Cheesecake) made premium
- Achievements/timeline (draft realistic ones based on the trip reports, e.g. "Secured
  investor interest in Sihanoukville, 2026")
- Company partners (draft placeholders, e.g. Coastal Hospitality Ventures, Seaside Retail
  Partners)
- International linkages (Malaysia AI conference, Singapore marketing research — frame as
  partnerships/knowledge exchange)
- Outreach/CSR section (draft something fitting, e.g. supporting local palm sugar farmers)

**3. `/trip-reports` — Business Trip Reports**
One page (or 5 sub-pages under `/trip-reports/[slug]`), using this real content:

#### Trip 1 — Sihanoukville (5–6 Feb 2026, 2 days/1 night)
- Purpose: Meet two potential investors
- Locations: Seaside Business Lounge & Coastal Investment Hub (Ochheuteal Beach Rd /
  Independence Beach Rd)
- Overview: Team met investors to discuss financing a cold-chain delivery system, a
  beachside kiosk, and hotel/restaurant supply.
- Highlights: Ms. Dara Chenda (Coastal Hospitality Ventures) — up to $75,000 non-binding
  investment interest for equipment/chillers/hotel contracts. Mr. Lim Vannak (Seaside Retail
  Partners) — proposed smaller pilot kiosk partnership with 3-month sales test. Presented 4
  flavors. Investors want reliable refrigeration, consistent portions, food-safety docs,
  bilingual packaging.
- Key findings: kiosk model lower risk than café; hotel supply = weekday stability, tourists
  = weekend sales; need investment-ready financial model before funding; Palm Sugar flavor
  had strongest feedback.
- Expenses table: Van $320, Accommodation $240, Meals $210, Meeting rooms $180, Local
  transport $60, Presentation materials $45, Contingency $75 → **Total $1,130**
- Conclusion: Two credible investment leads created; don't commit until legal/financial/
  ownership terms reviewed; next step is a 3-month kiosk pilot proposal + separate
  hotel-supply proposal.

#### Trip 2 — Siem Reap (9–13 March 2026, 5 days/4 nights)
- Purpose: Identify a location for expansion (assessed 5 areas)
- Overview: Studied foot traffic, rent, tourist access, delivery, competition across 5 areas;
  interviewed residents, hotel staff, tuk-tuk drivers, small business owners.
- Location scores (out of 5 — Foot Traffic / Rent / Tourist Access / Delivery / Competition
  / Overall):
  - Old Market/Pub Street: 5/2/5/3/2 → 3.4 (strong tourist traffic, high rent/competition)
  - Wat Bo Road: 4/4/5/5/4 → 4.4 (balanced tourists+locals, best delivery access)
  - Taphul Road: 3/5/4/4/4 → 4.0 (affordable, weaker premium positioning)
  - National Road 6: 5/3/4/4/3 → 3.8 (high visibility, higher setup cost)
  - Sala Kamreuk: 3/5/3/5/5 → 4.2 (lower rent, good for production kitchen)
- Key findings: Wat Bo Road = best flagship store; Sala Kamreuk = best production/delivery
  kitchen; ~45–60 sqm sufficient; keep local flavors + premium identity.
- Expenses: Transport $600, Accommodation $720, Meals $625, Local transport/site visits $250,
  Market research materials $120, Meeting/property review $100, Contingency $150 →
  **Total $2,565**
- Conclusion: Recommend Wat Bo Road for first branch, Sala Kamreuk as backup production
  site; compare 3 units, negotiate rent-free setup period, test demand via pop-ups for 4+
  weekends before signing a lease.

#### Trip 3 — Mondulkiri (6–8 April 2026, 3 days/2 nights)
- Purpose: Interview a retired staff member for the company magazine
- Address: No. 27, Romonea Village, Sangkat Spean Meanchey, Sen Monorom
- Interviewee: Mr. Vichea Sok, fictional retired Head Pastry Chef, 18 years with the company
- Overview: Captured lessons on recipe consistency, staff discipline, customer care, and
  early product development.
- Highlights: first cheesecake baked in a small shared oven, sold via word-of-mouth;
  emphasized accurate weighing, temperature control, patience over expensive ingredients;
  food safety as professional pride; origin story of the Palm Sugar Cheesecake; team recorded
  audio, took portraits, collected old recipe notes.
- Key findings: proposed feature title "From a Small Oven to a Growing Brand: The Story of
  Chef Vichea Sok"; focus on perseverance, craftsmanship, mentorship; preserve historic
  recipes in a controlled archive (not published in full); adapt into staff-training video +
  social heritage post.
- Expenses: Transport $550, Accommodation $300, Meals $375, Interview prep & gift $150,
  Local transport $80, Photography/recording $100, Contingency $95 → **Total $1,650**
- Conclusion: Prepare a 900–1,100 word feature article, confirm Mr. Vichea's approval, use
  the story to build staff pride and customer trust.

#### Trip 4 — Malaysia (18–20 May 2026, 3 days/2 nights)
- Purpose: Attend an international AI-in-the-workplace conference
- Location: Kuala Lumpur Convention Centre
- Overview: Explored practical AI tools for a growing food business — forecasting, inventory,
  customer service, marketing automation, scheduling, responsible data use.
- Highlights: demand-forecasting session (sales history + weather + holidays + promotions
  reduce overproduction); barcode inventory alerts for cream cheese/butter/eggs/fruit/
  packaging; chatbot for flavor/allergen/pickup/delivery questions; responsible-AI session on
  reviewing AI content and protecting data; met 2 software vendors + 1 regional bakery
  operator.
- Key findings: start with small tools solving clear problems; highest-value first project =
  weekly demand forecasting; inventory alerts reduce emergency buys/expired stock; review
  AI-generated captions for accuracy/tone; staff training + data rules needed first.
- Expenses: Airfare $1,400, Accommodation $720, Registration $1,750, Meals $600, Local
  transport $250, Insurance $150, Materials/contingency $180 → **Total $5,050**
- Conclusion: Launch a 12-week pilot using spreadsheet-based demand forecasting + simple
  inventory alerts before investing in a full platform.

#### Trip 5 — Singapore (11–12 June 2026, 2 days/1 night)
- Purpose: Attend an international research presentation on social media marketing
- Location: Suntec Singapore Convention & Exhibition Centre
- Overview: Examined short-form video, social commerce, reviews, influencer partnerships,
  and analytics for attracting younger customers and repeat orders.
- Highlights: best short videos show a clear moment (cutting/reveal/decorating/reaction);
  build content on 3 pillars — product desire, behind-the-scenes trust, customer stories;
  micro-influencers > expensive celebrity endorsements for local audiences; simple social
  commerce (clear pricing/delivery info) converts better; track saves/DMs/link
  clicks/conversion/repeat orders, not just likes.
- Key findings: consistent 90-day content plan beats irregular high-budget campaigns;
  bilingual Khmer-English captions featuring local flavors; customer-generated photos build
  trust (with permission); monthly reviews tying content to revenue; budget for 2
  micro-influencer tests/month.
- Expenses: Airfare $1,100, Accommodation $600, Registration $1,400, Meals $350, Local
  transport $120, Networking/materials $150, Insurance/contingency $230 →
  **Total $3,950**
- Conclusion: Launch a 90-day campaign — 3 weekly short videos, 1 customer story, 1
  behind-the-scenes post, 1 limited-time offer per week, with clear inquiry/sales tracking.

#### Consolidated section (add at bottom of `/trip-reports`)
- Priority recommendations (5 bullets — pilot kiosk + hotel-supply proposal; Siem Reap
  pop-up tests before leasing; publish the staff feature & archive recipes; 12-week
  forecasting/inventory pilot; 90-day social campaign)
- Expense summary table: Sihanoukville $1,130 · Siem Reap $2,565 · Mondulkiri $1,650 ·
  Malaysia $5,050 · Singapore $3,950 · **Grand Total $14,345**
- Overall conclusion paragraph on disciplined follow-up, ownership, and monthly review

**4. `/contact` — Contact**
- Contact form (name, email, message — no backend needed, can just log to console)
- Address/location block, social links

### Technical requirements
- Next.js 14+, App Router, TypeScript, Tailwind CSS
- Reusable components: `Navbar`, `Footer`, `Card`, `SectionHeading`, `ExpenseTable`,
  `TeamCard`, `LocationScoreTable`
- Use `next/image` with placeholder paths (`/images/...`) — real/edited images can be
  swapped in later
- Clean semantic HTML, proper heading hierarchy (this is graded)
- No spelling/grammar errors
- Optional: Framer Motion for scroll-reveal animations
- Metadata: title "Five Slices Cheesecake Co.", matching description, favicon

### Deliverable
A working `npm run dev` project with all pages fully populated using the real content above
— nothing should say "placeholder" or "[insert here]" except image files.