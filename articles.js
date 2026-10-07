/*
  SCAM ALERT — ARTICLE INDEX
  --------------------------------------------------
  EDIT ARTICLE RISK HERE:
  Change the number in `risk` and it will update both
  the Blog card and the article's Trust/Risk bar.

  To add a future article:
  1. Create the HTML file in /blog/
  2. Add its screenshot to /assets/
  3. Add one object below
  4. Add the URL to sitemap.xml
*/
window.SCAM_ARTICLES = [
  {
    slug: "phishing-captcha",
    title: "Phishing CAPTCHA Scam: The “Verify You’re Human” Trap",
    date: "Oct 5, 2026",
    dateISO: "2026-10-05",
    risk: 84,
    href: "blog/phishing-captcha.html",
    image: "assets/phishing-captcha-demo.png",
    description: "How a familiar CAPTCHA flow can be used to push visitors toward credential or payment theft."
  },
  {
    slug: "business-impersonator",
    title: "Business Impersonator Scam: Fake Account Support",
    date: "Sep 28, 2026",
    dateISO: "2026-09-28",
    risk: 88,
    href: "blog/business-impersonator.html",
    image: "assets/impersonator-demo.png",
    description: "A polished support message creates urgency around a fictional account problem and asks for sensitive action."
  },
  {
    slug: "fake-bank-security-alert",
    title: "Fake Bank Security Alert: The Locked Account Trap",
    date: "Sep 20, 2026",
    dateISO: "2026-09-20",
    risk: 94,
    href: "blog/fake-bank-security-alert.html",
    image: "assets/fake-bank-security-alert-demo.png",
    description: "A fictional banking alert uses fear, countdown language and a fake verification page to pressure the visitor."
  },
  {
    slug: "tech-support-popup",
    title: "Fake Tech Support Pop-Up: Your Device Is Infected",
    date: "Sep 12, 2026",
    dateISO: "2026-09-12",
    risk: 90,
    href: "blog/tech-support-popup.html",
    image: "assets/tech-support-popup-demo.png",
    description: "A fictional browser warning imitates a security notification and pushes the visitor toward fake support."
  },
  {
    slug: "social-media-verification",
    title: "Social Media Verification Scam: The Blue Badge Bait",
    date: "Sep 5, 2026",
    dateISO: "2026-09-05",
    risk: 82,
    href: "blog/social-media-verification.html",
    image: "assets/social-media-verification-demo.png",
    description: "A fictional verification offer promises a trusted badge, then asks for login and payment details."
  },
  {
    slug: "fake-charity-donation",
    title: "Fake Charity Donation Page: A Crisis Used as Bait",
    date: "Aug 28, 2026",
    dateISO: "2026-08-28",
    risk: 79,
    href: "blog/fake-charity-donation.html",
    image: "assets/fake-charity-donation-demo.png",
    description: "A fictional donation campaign borrows the look of a legitimate appeal while hiding weak verification signals."
  },
  {
    slug: "simple-ideas",
    title: "Fake Investment Platform: TradeNova",
    date: "Apr 12, 2025",
    dateISO: "2025-04-12",
    risk: 92,
    href: "blog/simple-ideas.html",
    image: "assets/tradenova-demo.png",
    description: "A fictional investment dashboard uses aggressive returns and urgency to create false confidence."
  },
  {
    slug: "constraints",
    title: "Prize Scam: The Truth Behind “You’ve Won”",
    date: "Apr 8, 2025",
    dateISO: "2025-04-08",
    risk: 87,
    href: "blog/constraints.html",
    image: "assets/prize-scam-demo.png",
    description: "A fictional prize message hides fees and information requests behind a promise of an unexpected reward."
  },
  {
    slug: "building-in-public",
    title: "Fake Online Shop: BestEarbuds",
    date: "Apr 5, 2025",
    dateISO: "2025-04-05",
    risk: 76,
    href: "blog/building-in-public.html",
    image: "assets/bestearbuds-demo.png",
    description: "A fictional storefront combines unusually low prices, urgency and weak seller information."
  },
  {
    slug: "documenting-process",
    title: "AI Deepfake Scam: Fake CEO Video",
    date: "Apr 2, 2025",
    dateISO: "2025-04-02",
    risk: 89,
    href: "blog/documenting-process.html",
    image: "assets/ai-deepfake-ceo-demo.png",
    description: "A fictional executive impersonation case shows how synthetic video can add false authority to a payment request."
  }
];
