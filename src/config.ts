/**
 * siteConfig.ts — Central configuration for the site.
 *
 * To clone this template for a new niche site, ONLY edit this file
 * (and swap photos in /public/photos/). Everything else is generic.
 *
 * Content rules (these keep the site out of trouble with Google and the FTC):
 * - No invented reviews, ratings, review counts, or "years in business".
 * - No credentials (licensed, insured, background-checked, guarantees) until
 *   the service partner actually has them — add them then.
 * - Guides are general how-to content: no invented customers, jobs, or
 *   prices charged.
 */

export interface Service {
  title: string;
  slug: string;
  description: string;
  photo: string;
}

export interface City {
  name: string;
  slug: string;
  lat: string;
  lng: string;
  intro: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Guide {
  title: string;
  slug: string;
  summary: string;
}

export const siteConfig = {
  // ── Business identity ──────────────────────────────────────────────
  businessName: "NKY Pressure Washing Pros",
  phone: "(859) 900-8044",
  phoneE164: "+18599008044",
  domain: "nkypowerwashpros.com",
  siteUrl: "https://nkypowerwashpros.com",

  // ── Form Webhook ───────────────────────────────────────────────
  // Google Sheets web app URL (set after deploying google-sheets-webhook.gs)
  formWebhookUrl: "",

  // ── Analytics ───────────────────────────────────────────────────────
  // Set these to your real GA4 / GTM IDs to enable tracking.
  // Leave as placeholders (or empty) to disable — the site still works.
  ga4MeasurementId: "G-XXXXXXXXXX",   // Google Analytics 4
  gtmContainerId: "GTM-XXXXXXX",      // Google Tag Manager

  // Google Search Console → Add property → URL prefix → "HTML tag" method.
  // Paste only the content="..." value here. Leave empty if verified via DNS.
  googleSiteVerification: "",

  // helper: truthy only when the value looks like a real ID
  get hasGA4() {
    return this.ga4MeasurementId && !this.ga4MeasurementId.startsWith('G-XX');
  },
  get hasGTM() {
    return this.gtmContainerId && !this.gtmContainerId.startsWith('GTM-XX');
  },

  // ── Location ───────────────────────────────────────────────────────
  city: "Northern Kentucky",
  state: "KY",
  region: "NKY",
  geoLat: "39.0",
  geoLng: "-84.5",

  // ── SEO keywords ──────────────────────────────────────────────────
  serviceKeyword: "pressure washing",
  serviceKeywordPlural: "pressure washing services",
  brandColor: "#1a6bb5",

  // ── Hero content ─────────────────────────────────────────────────
  heroTagline: "Northern Kentucky Pressure Washing Service",
  heroSubtext: "Transform your home's curb appeal. Call us for a free estimate.",
  heroAlt: "Professional pressure washing technician cleaning a driveway",

  // ── Computed city lists ──────────────────────────────────────────
  get cityListShort() {
    return this.cities.slice(0, 4).map(c => c.name.replace(/, KY$/, '')).join(', ');
  },
  get cityListLong() {
    return this.cities.slice(0, 8).map(c => c.name.replace(/, KY$/, '')).join(', ');
  },

  // ── Opening hours ─────────────────────────────────────────────────
  openingHours: "Mo-Sa 08:00-18:00",

  // ── Services ──────────────────────────────────────────────────────
  services: [
    {
      title: "House Washing",
      slug: "house-washing",
      description:
        "Our soft wash house washing service safely removes mold, mildew, algae, and years of grime from your home's siding. We use low-pressure techniques that clean thoroughly without damaging vinyl, brick, or wood surfaces. Whether your home is in Florence, Covington, Fort Mitchell, or anywhere across NKY, we'll restore its curb appeal in just a few hours.",
      photo: "/photos/residential.jpg",
    },
    {
      title: "Driveway & Concrete Cleaning",
      slug: "driveway-concrete",
      description:
        "Oil stains, tire marks, and years of buildup don't stand a chance against our professional concrete cleaning equipment. We restore driveways, sidewalks, patios, and parking areas to like-new condition. Our high-pressure cleaning removes embedded dirt and discoloration that regular washing can't touch. Serving Northern Kentucky homes and businesses.",
      photo: "/photos/commercial.jpg",
    },
    {
      title: "Deck & Fence Cleaning",
      slug: "deck-fence",
      description:
        "Weather takes a toll on wood surfaces — gray discoloration, algae growth, and splintering are all signs your deck or fence needs professional attention. Our deck and fence cleaning service removes years of weathering, mold, and organic growth to restore the natural beauty of your wood surfaces. We can also apply protective sealant to keep them looking great longer.",
      photo: "/photos/deck-fence-cleaning.jpg",
    },
  ] as Service[],

  // ── Guides (long-form how-to pages under /guides/) ───────────────
  guides: [
    {
      title: "Soft Washing Vinyl Siding: Why Mold and Algae Get Pre-Treated First",
      slug: "pre-treating-mold-on-vinyl-siding",
      summary: "What the green and black growth on siding is, why high pressure alone doesn't fix it, and how a soft wash pre-treatment works.",
    },
  ] as Guide[],

  // ── FAQs ──────────────────────────────────────────────────────────
  faqs: [
    {
      question: "How much does pressure washing cost in Northern Kentucky?",
      answer:
        "Pricing varies based on the size of your home and the level of buildup. We offer free, no-obligation estimates — call us at (859) 900-8044 for a quote over the phone.",
    },
    {
      question: "How often should I have my house pressure washed?",
      answer:
        "Most homeowners in Northern Kentucky benefit from annual pressure washing. If your home is surrounded by trees or in a shaded area that stays damp, you may want to wash it every 6 to 9 months to prevent mold and mildew from taking hold. Regular washing protects your siding and keeps your home looking its best.",
    },
    {
      question: "Is pressure washing safe for my siding?",
      answer:
        "Yes, when it's done right. We use a soft wash technique for house washing, which relies on low pressure and specialized cleaning solutions rather than brute force. This method is safe for vinyl, brick, wood, stucco, and all common siding materials. It actually cleans better than high pressure while being gentler on your home.",
    },
    {
      question: "How long does pressure washing take?",
      answer:
        "A typical house washing takes 1 to 3 hours depending on the size of the home. Driveway cleaning usually takes 30 minutes to an hour. We'll give you a time estimate when we quote the job so you can plan your day.",
    },
    {
      question: "Do I need to be home during the service?",
      answer:
        "For exterior house washing and driveway cleaning, you don't need to be home as long as we have access to your outdoor water spigot and can reach all the areas that need cleaning. We just need you to unlock any gates and make sure windows and doors are closed.",
    },
    {
      question: "Will pressure washing damage my plants or landscaping?",
      answer:
        "We take precautions to protect landscaping: plants and shrubs near the work area are wet down first, cleaning solutions are diluted for the surface being cleaned, and everything nearby is rinsed thoroughly after the job. Point out any delicate or prized plants and they can be covered.",
    },
    {
      question: "Can you remove oil stains from my driveway?",
      answer:
        "Yes! Our professional-grade equipment and specialized degreasers can remove or dramatically reduce most oil stains, rust marks, and tire marks from concrete and asphalt surfaces. Older, deeply set stains may need more than one treatment and may not come out completely, since oil soaks into the concrete itself.",
    },
    {
      question: "How do I schedule a pressure washing appointment?",
      answer:
        "Just call us at (859) 900-8044. We answer the phone and can usually schedule your pressure washing within a few days. We serve Florence, Covington, Fort Mitchell, Erlanger, and all of Northern Kentucky. You can also fill out our online form for a free quote.",
    },
  ] as FAQ[],

  // ── Cities served ─────────────────────────────────────────────────
  cities: [
    {
      name: "Florence, KY",
      slug: "florence-ky",
      lat: "38.9989",
      lng: "-84.6266",
      intro:
        "NKY Pressure Washing Pros provides exterior cleaning for Florence homes and businesses year-round. Whether you live near the Florence Mall area or in one of the quiet residential neighborhoods off US-42, our team brings professional-grade equipment and cleaning solutions right to your property. We understand the local climate — from humid summers that breed mold and mildew to winter storms that leave grime on siding and concrete — and we tailor our soft wash and high-pressure techniques to handle whatever Northern Kentucky weather throws at your home. Florence's mix of older homes and new construction means we've seen every type of surface, and we know how to treat each one with care.",
    },
    {
      name: "Covington, KY",
      slug: "covington-ky",
      lat: "39.0836",
      lng: "-84.5085",
      intro:
        "Covington's historic neighborhoods and riverfront properties demand a pressure washing service that respects both the architecture and the materials. NKY Pressure Washing Pros serves Covington residents and businesses, from the charming Victorian homes of Licking Riverside to the commercial spaces along Madison Avenue. Our team is experienced with the unique challenges Covington properties present — older brick and stone facades, multi-story buildings near the Roebling Bridge, and the mineral deposits that come with proximity to the Ohio River. We take pride in keeping Covington's homes and businesses looking their best, preserving the character of this historic river city.",
    },
    {
      name: "Fort Thomas, KY",
      slug: "fort-thomas-ky",
      lat: "39.0758",
      lng: "-84.4480",
      intro:
        "Fort Thomas is known for its stunning hilltop views, historic homes, and tree-canopied streets — but all that beauty means your exterior surfaces need extra attention. NKY Pressure Washing Pros provides pressure washing that preserves your home's character while restoring its appearance. We're experienced with the unique challenges Fort Thomas presents: steep driveways, multi-level homes built into hillsides, and mature hardwoods that drop leaves, pollen, and sap that cling to siding and concrete. Our team handles it all with skill and care.",
    },
    {
      name: "Newport, KY",
      slug: "newport-ky",
      lat: "39.0915",
      lng: "-84.4954",
      intro:
        "Newport has transformed into one of the region's most vibrant communities, and NKY Pressure Washing Pros is proud to help keep it looking its best. From the Newport on the Levee district to the residential streets of Clifton and Southgate, we provide expert pressure washing for homes and businesses throughout the city. Newport's position along the Ohio River means properties here face unique challenges — humidity, algae growth, and the residue that comes with waterfront living. Our team uses specialized techniques to combat these issues, ensuring your siding, concrete, and wood surfaces stay cleaner longer.",
    },
    {
      name: "Fort Mitchell, KY",
      slug: "fort-mitchell-ky",
      lat: "39.0458",
      lng: "-84.5533",
      intro:
        "Fort Mitchell is one of Northern Kentucky's most desirable communities, and homeowners here expect professional service. NKY Pressure Washing Pros delivers exactly that. We specialize in the kind of meticulous, detail-oriented pressure washing that Fort Mitchell properties deserve — from the stately homes along Dixie Highway to the well-maintained colonials in the residential side streets. Siding is soft washed at low pressure, and driveways and walks are cleaned evenly so they don't end up streaked or striped.",
    },
    {
      name: "Erlanger, KY",
      slug: "erlanger-ky",
      lat: "39.0169",
      lng: "-84.6027",
      intro:
        "Erlanger residents know that a clean exterior makes a real difference in how a home looks and feels. NKY Pressure Washing Pros is proud to serve this thriving community with professional pressure washing that's thorough, affordable, and reliable. Whether you're in a ranch-style home near the Erlanger city park or a two-story house off Stevenson Road, we have the tools and expertise to handle siding, driveways, decks, and fences at any scale. We also serve Erlanger's growing commercial corridor, keeping storefronts and sidewalks looking their best.",
    },
    {
      name: "Edgewood, KY",
      slug: "edgewood-ky",
      lat: "39.0142",
      lng: "-84.5779",
      intro:
        "Edgewood's tree-lined streets and well-kept homes make it one of Kenton County's most charming communities — and NKY Pressure Washing Pros helps keep it that way. We provide the kind of careful, professional pressure washing that this neighborhood's beautiful properties demand. From the homes along Turkeyfoot Road to the quiet cul-de-sacs throughout the city, we adjust the method to Edgewood's varied architecture — soft washing for siding and roofs, higher pressure only on concrete. Plants are wet down before cleaning solutions go on and rinsed again afterward.",
    },
    {
      name: "Independence, KY",
      slug: "independence-ky",
      lat: "38.9431",
      lng: "-84.5431",
      intro:
        "As one of the fastest-growing cities in Kenton County, Independence has seen a surge of new homes and businesses — and NKY Pressure Washing Pros is here to keep every one of them looking sharp. From the newer subdivisions near Taylor Mill Road to the established neighborhoods closer to downtown Independence, we provide house washing, concrete cleaning, and deck and fence cleaning. We know that Independence properties often sit on larger lots with mature trees, which means more organic growth, pollen, and runoff staining on your siding and concrete. Our deep-cleaning process removes it all, restoring your home's curb appeal.",
    },
  ] as City[],
};
