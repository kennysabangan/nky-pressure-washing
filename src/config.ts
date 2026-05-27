/**
 * siteConfig.ts — Central configuration for the site.
 *
 * To clone this template for a new niche site, ONLY edit this file
 * (and swap photos in /public/photos/). Everything else is generic.
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

export interface Testimonial {
  quote: string;
  name: string;
  city: string;
}

export const siteConfig = {
  // ── Business identity ──────────────────────────────────────────────
  businessName: "NKY Pressure Washing Pros",
  phone: "(859) 555-0200",
  phoneE164: "+18595550200",
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
  heroTagline: "Northern Kentucky's Trusted Pressure Washing Service",
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
      photo: "/photos/screen-cleaning.jpg",
    },
  ] as Service[],

  // ── FAQs ──────────────────────────────────────────────────────────
  faqs: [
    {
      question: "How much does pressure washing cost in Northern Kentucky?",
      answer:
        "Most house washing jobs run between $200 and $500 depending on the size of your home and the level of buildup. Driveway cleaning typically costs $150 to $300. Give us a call at (859) 555-0200 for a free, no-obligation estimate — we can usually give you a ballpark price over the phone.",
    },
    {
      question: "How often should I have my house pressure washed?",
      answer:
        "Most homeowners in Northern Kentucky benefit from annual pressure washing. If your home is surrounded by trees or in a shaded area that stays damp, you may want to wash it every 6 to 9 months to prevent mold and mildew from taking hold. Regular washing protects your siding and keeps your home looking its best.",
    },
    {
      question: "Is pressure washing safe for my siding?",
      answer:
        "Absolutely. We use a soft wash technique for house washing, which relies on low pressure and specialized cleaning solutions rather than brute force. This method is safe for vinyl, brick, wood, stucco, and all common siding materials. It actually cleans better than high pressure while being gentler on your home.",
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
        "No. We take extra precautions to protect your landscaping. We pre-wet all plants and shrubs near the work area, use plant-safe cleaning solutions, and rinse everything thoroughly after the job. Your lawn and garden will be just as green after we leave as when we arrived.",
    },
    {
      question: "Can you remove oil stains from my driveway?",
      answer:
        "Yes! Our professional-grade equipment and specialized degreasers can remove or dramatically reduce most oil stains, rust marks, and tire marks from concrete and asphalt surfaces. Older, deeply set stains may require multiple treatments, but we typically see great results in a single visit.",
    },
    {
      question: "How do I schedule a pressure washing appointment?",
      answer:
        "Just call us at (859) 555-0200. We answer the phone and can usually schedule your pressure washing within a few days. We serve Florence, Covington, Fort Mitchell, Erlanger, and all of Northern Kentucky. You can also fill out our online form for a free quote.",
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
        "Florence homeowners and businesses trust NKY Pressure Washing Pros for reliable, thorough exterior cleaning year-round. Whether you live near the Florence Mall area or in one of the quiet residential neighborhoods off US-42, our team brings professional-grade equipment and eco-friendly cleaning solutions right to your property. We understand the local climate — from humid summers that breed mold and mildew to winter storms that leave grime on siding and concrete — and we tailor our soft wash and high-pressure techniques to handle whatever Northern Kentucky weather throws at your home. Florence's mix of older homes and new construction means we've seen every type of surface, and we know how to treat each one with care.",
    },
    {
      name: "Covington, KY",
      slug: "covington-ky",
      lat: "39.0836",
      lng: "-84.5085",
      intro:
        "Covington's historic neighborhoods and riverfront properties demand a pressure washing service that respects both the architecture and the materials. NKY Pressure Washing Pros has been serving Covington residents and businesses for years, from the charming Victorian homes of Licking Riverside to the commercial spaces along Madison Avenue. Our team is experienced with the unique challenges Covington properties present — older brick and stone facades, multi-story buildings near the Roebling Bridge, and the mineral deposits that come with proximity to the Ohio River. We take pride in keeping Covington's homes and businesses looking their best, preserving the character of this historic river city.",
    },
    {
      name: "Fort Mitchell, KY",
      slug: "fort-mitchell-ky",
      lat: "39.0458",
      lng: "-84.5533",
      intro:
        "Fort Mitchell is one of Northern Kentucky's most desirable communities, and homeowners here expect a higher standard of service. NKY Pressure Washing Pros delivers exactly that. We specialize in the kind of meticulous, detail-oriented pressure washing that Fort Mitchell properties deserve — from the stately homes along Dixie Highway to the well-maintained colonials in the residential side streets. Our technicians are background-checked, fully insured, and trained to treat your home with the same respect they'd treat their own. Fort Mitchell residents choose us because we show up on time, do the job right, and leave every surface spotless.",
    },
    {
      name: "Erlanger, KY",
      slug: "erlanger-ky",
      lat: "39.0169",
      lng: "-84.6027",
      intro:
        "Erlanger residents know that a clean exterior makes a real difference in how a home looks and feels. NKY Pressure Washing Pros is proud to serve this thriving community with professional pressure washing that's thorough, affordable, and reliable. Whether you're in a ranch-style home near the Erlanger city park or a two-story house off Stevenson Road, we have the tools and expertise to handle siding, driveways, decks, and fences at any scale. We also serve Erlanger's growing commercial corridor, keeping storefronts and sidewalks looking their best. Our flexible scheduling means we work around your life, not the other way around.",
    },
    {
      name: "Independence, KY",
      slug: "independence-ky",
      lat: "38.9431",
      lng: "-84.5431",
      intro:
        "As one of the fastest-growing cities in Kenton County, Independence has seen a surge of new homes and businesses — and NKY Pressure Washing Pros is here to keep every one of them looking sharp. From the newer subdivisions near Taylor Mill Road to the established neighborhoods closer to downtown Independence, we provide pressure washing services that Northern Kentucky homeowners count on. We know that Independence properties often sit on larger lots with mature trees, which means more organic growth, pollen, and runoff staining on your siding and concrete. Our deep-cleaning process removes it all, restoring your home's curb appeal.",
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
      name: "Edgewood, KY",
      slug: "edgewood-ky",
      lat: "39.0142",
      lng: "-84.5779",
      intro:
        "Edgewood's tree-lined streets and well-kept homes make it one of Kenton County's most charming communities — and NKY Pressure Washing Pros helps keep it that way. We've served Edgewood homeowners for years, providing the kind of careful, professional pressure washing that this neighborhood's beautiful properties demand. From the homes along Turkeyfoot Road to the quiet cul-de-sacs throughout the city, we know how to navigate Edgewood's varied architecture and deliver consistently excellent results. Our team respects your landscaping, protects your property, and always leaves your home looking better than we found it.",
    },
    {
      name: "Fort Thomas, KY",
      slug: "fort-thomas-ky",
      lat: "39.0758",
      lng: "-84.4480",
      intro:
        "Fort Thomas is known for its stunning hilltop views, historic homes, and tree-canopied streets — but all that beauty means your exterior surfaces need extra attention. NKY Pressure Washing Pros is Fort Thomas's go-to service for professional pressure washing that preserves your home's character while restoring its original appearance. We're experienced with the unique challenges Fort Thomas presents: steep driveways, multi-level homes built into hillsides, and mature hardwoods that drop leaves, pollen, and sap that cling to siding and concrete. Our team handles it all with skill and care.",
    },
    {
      name: "Bellevue, KY",
      slug: "bellevue-ky",
      lat: "39.1042",
      lng: "-84.4762",
      intro:
        "Bellevue's revitalized Fairfield Avenue corridor and charming hillside homes make it a standout community in Northern Kentucky. NKY Pressure Washing Pros is honored to serve Bellevue residents and business owners with top-quality pressure washing services. We understand the mix of historic and modern properties that define Bellevue, and we approach each job with the care and attention your home or storefront deserves. From the panoramic views along the river hills to the cozy bungalows in the side streets, we bring the same level of professionalism to every appointment.",
    },
    {
      name: "Cold Spring, KY",
      slug: "cold-spring-ky",
      lat: "39.0114",
      lng: "-84.4369",
      intro:
        "Cold Spring's rolling hills and spacious properties make it a beautiful place to live — but they also mean your exterior surfaces face constant exposure to the elements. NKY Pressure Washing Pros provides Cold Spring homeowners with thorough, professional pressure washing that removes dirt, algae, and seasonal buildup from siding, driveways, and decks. Whether your home overlooks Alexandria Pike or sits in one of Cold Spring's peaceful residential developments, we'll make sure your property looks its best. Our eco-friendly cleaning solutions are safe for your family, pets, and landscaping.",
    },
    {
      name: "Taylor Mill, KY",
      slug: "taylor-mill-ky",
      lat: "39.0003",
      lng: "-84.5013",
      intro:
        "Taylor Mill has grown into a thriving community, and NKY Pressure Washing Pros is proud to serve the homes and businesses that make this city special. From the established neighborhoods along Taylor Mill Road to the newer developments spreading across the city, we provide pressure washing that Taylor Mill residents trust. Our team understands the local environment — the clay soil that splatters onto foundations, the seasonal pollen from surrounding woodlands, and the way Northern Kentucky's changing seasons affect your siding and concrete throughout the year. We tailor our approach to each property.",
    },
    {
      name: "Villa Hills, KY",
      slug: "villa-hills-ky",
      lat: "39.0625",
      lng: "-84.5916",
      intro:
        "Villa Hills is one of Northern Kentucky's premier residential communities, and the homes here deserve nothing less than the best. NKY Pressure Washing Pros delivers premium pressure washing services that match Villa Hills' high standards. The city's elevated terrain and river-adjacent location mean your exterior surfaces face unique challenges — morning moisture, afternoon sun, and the organic growth that comes with proximity to the Ohio River floodplain. Our team is equipped to handle all of it, using professional-grade equipment and techniques that leave your siding, driveways, and patios truly spotless.",
    },
    {
      name: "Crescent Springs, KY",
      slug: "crescent-springs-ky",
      lat: "39.0544",
      lng: "-84.5829",
      intro:
        "Crescent Springs residents appreciate quality, and NKY Pressure Washing Pros delivers it with every visit. We've been serving this close-knit community with professional pressure washing that homeowners and businesses rely on. Whether your property is along Buttermilk Pike or in one of Crescent Springs' well-maintained neighborhoods, we bring the same commitment to excellence. Our team handles everything from standard house washing and driveway cleaning to more complex jobs involving multi-level homes, retaining walls, and concrete patios. We work efficiently, respect your time, and always deliver results that exceed expectations.",
    },
    {
      name: "Lakeside Park, KY",
      slug: "lakeside-park-ky",
      lat: "39.0331",
      lng: "-84.5711",
      intro:
        "Lakeside Park may be one of Northern Kentucky's smaller cities, but its residents expect — and deserve — top-tier service. NKY Pressure Washing Pros is proud to serve Lakeside Park with professional pressure washing that keeps homes looking pristine. The tree-lined streets and well-maintained properties that define Lakeside Park require a careful touch, and our technicians deliver exactly that. We protect your landscaping, work neatly, and leave every surface spotless. From routine maintenance washings to post-construction cleanup, Lakeside Park homeowners know they can count on us.",
    },
    {
      name: "Park Hills, KY",
      slug: "park-hills-ky",
      lat: "39.0667",
      lng: "-84.5285",
      intro:
        "Park Hills' hilltop location offers some of the best views in Northern Kentucky — but it also means your exterior surfaces face the full force of the elements. NKY Pressure Washing Pros provides Park Hills homeowners with expert pressure washing that keeps those views framed by a clean, well-maintained property. We're experienced with the steep terrain, multi-story homes, and unique architectural features that Park Hills properties are known for. Our team uses professional equipment and proven techniques to access even the most challenging areas, delivering the same outstanding results whether your home overlooks Devou Park or the Cincinnati skyline beyond.",
    },
    // ── Cincinnati-area cities ────────────────────────────────────────
    {
      name: "Walnut Hills, OH",
      slug: "walnut-hills-oh",
      lat: "39.1212",
      lng: "-84.4872",
      intro:
        "Walnut Hills is one of Cincinnati's most historic and diverse neighborhoods, and it's just minutes from Northern Kentucky across the river. NKY Pressure Washing Pros is proud to extend our pressure washing services to Walnut Hills homeowners and businesses. From the stately homes along Gilbert Avenue to the revitalized commercial district near Peeble's Corner, we bring the same professional-grade pressure washing that NKY residents trust. Walnut Hills' mix of historic Victorian homes, modern apartments, and commercial properties means we see every type of exterior surface — and we know how to clean each one properly.",
    },
    {
      name: "Hyde Park, OH",
      slug: "hyde-park-oh",
      lat: "39.1373",
      lng: "-84.4463",
      intro:
        "Hyde Park is one of Cincinnati's most desirable neighborhoods, known for its beautiful homes, tree-lined streets, and vibrant town square. NKY Pressure Washing Pros brings our professional pressure washing expertise right across the river to serve Hyde Park residents. Whether you own a historic craftsman near the square or a stately home in the surrounding hills, we understand the high standards Hyde Park homeowners expect. Our team delivers clean siding, spotless driveways, and restored decks every time — because a neighborhood this nice deserves exteriors to match.",
    },
    {
      name: "Norwood, OH",
      slug: "norwood-oh",
      lat: "39.1556",
      lng: "-84.4597",
      intro:
        "Norwood is a thriving independent city surrounded by Cincinnati, just a short drive from Northern Kentucky. NKY Pressure Washing Pros is happy to serve Norwood's dense residential neighborhoods and growing commercial district with reliable, affordable pressure washing. Norwood's mix of older homes, duplexes, and storefronts means exterior surfaces here face everything from decades of grime buildup to algae and moss from shaded areas. Our team handles it all with professional equipment and techniques, leaving every property looking fresh and well-maintained.",
    },
    {
      name: "Montgomery, OH",
      slug: "montgomery-oh",
      lat: "39.2289",
      lng: "-84.3541",
      intro:
        "Montgomery's tree-canopied streets and stately homes make it one of the Cincinnati area's premier residential communities. NKY Pressure Washing Pros extends our premium pressure washing services to Montgomery homeowners who expect nothing but the best. The large lots, mature landscaping, and multi-story homes throughout Montgomery require a careful, experienced approach — and our team delivers exactly that. From historic properties near the downtown village center to sprawling estates on the outskirts, we bring the same meticulous attention to detail that has made us Northern Kentucky's most trusted pressure washing service.",
    },
    {
      name: "Deer Park, OH",
      slug: "deer-park-oh",
      lat: "39.2053",
      lng: "-84.3922",
      intro:
        "Deer Park is a welcoming, family-friendly community just north of Cincinnati, and NKY Pressure Washing Pros is proud to bring our pressure washing services to this great neighborhood. From the well-kept ranch homes along Blue Ash Road to the two-story colonials in the residential side streets, Deer Park homes deserve clean siding, bright driveways, and well-maintained decks. We offer flexible scheduling, fair pricing, and the kind of dependable service that Deer Park homeowners appreciate. A clean exterior makes a real difference in how your home looks and feels.",
    },
    {
      name: "Amberly, OH",
      slug: "amberly-oh",
      lat: "39.1987",
      lng: "-84.4281",
      intro:
        "Amberley Village is one of the Cincinnati area's most exclusive residential communities, with large estates and beautifully maintained properties. NKY Pressure Washing Pros provides the premium pressure washing service that Amberley homes demand. The spacious lots, mature trees, and high-end finishes throughout this community require a professional touch — and our fully insured, background-checked technicians deliver exactly that. We protect your property, respect your privacy, and leave every surface looking like new. Amberley homeowners choose us because we treat every home like it's our own.",
    },
    {
      name: "Westwood, OH",
      slug: "westwood-oh",
      lat: "39.1531",
      lng: "-84.6164",
      intro:
        "Westwood is one of Cincinnati's largest and most established neighborhoods, with a strong sense of community and a wide range of homes and businesses. NKY Pressure Washing Pros is excited to serve Westwood with the same reliable pressure washing that Northern Kentucky residents have come to trust. From the charming Victorians along Harrison Avenue to the mid-century homes throughout the neighborhood, we've cleaned every type of exterior surface Westwood has to offer. Our team works efficiently, respects your property, and always delivers outstanding results.",
    },
    {
      name: "Fort Heights, OH",
      slug: "fort-heights-oh",
      lat: "39.0947",
      lng: "-84.5256",
      intro:
        "Fort Wright and the Fort Mitchell Heights area sit just across the river from Northern Kentucky, making them a natural extension of our service area. NKY Pressure Washing Pros brings our professional pressure washing expertise to Fort Heights homeowners who want the same quality service their NKY neighbors enjoy. The elevated terrain here means stunning views — but it also means your exterior surfaces face wind, rain, and the elements head-on. Our deep-cleaning process removes all buildup and leaves your siding, driveways, and patios looking fresh and renewed.",
    },
    {
      name: "Mt. Adams, OH",
      slug: "mt-adams-oh",
      lat: "39.1089",
      lng: "-84.4981",
      intro:
        "Mt. Adams is one of Cincinnati's most iconic hilltop neighborhoods, with stunning skyline views, steep streets, and a mix of historic and modern properties. NKY Pressure Washing Pros brings expert pressure washing to Mt. Adams homeowners and businesses who want to keep their properties looking as incredible as the views they enjoy. The hillside homes and unique architecture in Mt. Adams require careful access and professional techniques — our team has the equipment and experience to handle any exterior safely. Whether you're in a renovated Victorian or a modern condo, we'll make your property shine.",
    },
    {
      name: "Mt. Lookout, OH",
      slug: "mt-lookout-oh",
      lat: "39.1283",
      lng: "-84.4317",
      intro:
        "Mt. Lookout is a charming, walkable neighborhood on Cincinnati's east side, just across the river from Northern Kentucky. NKY Pressure Washing Pros serves Mt. Lookout homeowners with professional pressure washing that keeps homes looking their best. The neighborhood's mix of older bungalows, updated colonials, and new construction means we've seen every exterior surface type Mt. Lookout has to offer. We use eco-friendly cleaning solutions that are safe for your family, pets, and landscaping — perfect for homes along the tree-lined streets of this beloved Cincinnati neighborhood.",
    },
    {
      name: "Oakley, OH",
      slug: "oakley-oh",
      lat: "39.1536",
      lng: "-84.4228",
      intro:
        "Oakley is one of Cincinnati's fastest-growing neighborhoods, with a thriving business district, new developments, and a strong sense of community. NKY Pressure Washing Pros is proud to serve Oakley's homes and businesses with professional pressure washing that matches the neighborhood's upward trajectory. From the homes around Oakley Square to the new builds throughout the area, we provide pressure washing that's thorough, affordable, and reliable. Whether you're a homeowner wanting curb appeal or a business owner keeping your storefront inviting, we've got you covered.",
    },
    {
      name: "Columbia-Tusculum, OH",
      slug: "columbia-tusculum-oh",
      lat: "39.1128",
      lng: "-84.4136",
      intro:
        "Columbia-Tusculum is Cincinnati's oldest neighborhood, nestled along the Ohio River on the city's east side. NKY Pressure Washing Pros brings our professional pressure washing services to this historic riverfront community, where homes range from restored 19th-century cottages to modern river-view condos. The Ohio River proximity means exterior surfaces here face humidity, organic growth, and river residue — our specialized cleaning process tackles all of it. Whether your home overlooks the river or sits tucked into the hillside, we'll make every surface look its best.",
    },
    {
      name: "Pleasant Ridge, OH",
      slug: "pleasant-ridge-oh",
      lat: "39.1842",
      lng: "-84.4403",
      intro:
        "Pleasant Ridge is a vibrant, family-friendly neighborhood on Cincinnati's north side, known for its well-kept homes and strong community spirit. NKY Pressure Washing Pros is happy to extend our pressure washing services to Pleasant Ridge residents who want a clean, well-maintained exterior without the hassle. The neighborhood's diverse housing stock — from classic foursquares to updated ranches — means we adapt our approach to each property. Our team is fast, friendly, and thorough, leaving your home looking its best every single time.",
    },
  ] as City[],

  // ── Testimonials ──────────────────────────────────────────────────
  testimonials: [
    {
      quote:
        "NKY Pressure Washing Pros did an amazing job on our house and driveway. The siding looks brand new and the oil stains on the concrete are completely gone. We will definitely call them again next time we need pressure washing in Florence.",
      name: "Jennifer M.",
      city: "Florence, KY",
    },
    {
      quote:
        "They pressure washed our entire house, deck, and concrete patio in just a few hours. Our place in Covington looks like it got a fresh coat of paint — except it's just clean. Highly recommend their pressure washing service.",
      name: "Robert T.",
      city: "Covington, KY",
    },
    {
      quote:
        "Finally found a pressure washing company that actually shows up when they say they will. The team was fast, friendly, and our Fort Mitchell home has never looked this good. Best pressure washing in Northern Kentucky.",
      name: "Sarah K.",
      city: "Fort Mitchell, KY",
    },
    {
      quote:
        "We get our house and driveway pressure washed every spring with NKY Pressure Washing Pros. They always do a fantastic job and our home in Edgewood looks wonderful every time. Reliable pressure washing company.",
      name: "Karen L.",
      city: "Edgewood, KY",
    },
  ] as Testimonial[],

  // ── Reviews (for reviews page) ────────────────────────────────────
  reviews: [
    {
      name: "Jennifer M.",
      location: "Florence, KY",
      text: "These guys pressure washed our entire house and driveway and everything looks amazing. We have a two-story home in Florence and they cleaned every surface, no problem. The team was friendly and worked fast. Best pressure washing service we've ever used in Northern Kentucky.",
    },
    {
      name: "Robert T.",
      location: "Covington, KY",
      text: "We have an older home in Covington with some tricky surfaces. NKY Pressure Washing Pros handled everything — siding, brick, concrete, deck. No damage, just clean surfaces. They even cleaned our back patio which was covered in algae. Very happy with the service.",
    },
    {
      name: "Sarah K.",
      location: "Fort Mitchell, KY",
      text: "I've tried three different pressure washing companies in Northern Kentucky and these guys are by far the best. They showed up on time, worked quickly, and left every surface spotless. Our house in Fort Mitchell looks so much better with clean siding and a bright driveway.",
    },
    {
      name: "Mike D.",
      location: "Erlanger, KY",
      text: "Hired them to pressure wash the exterior and sidewalk at our restaurant in Erlanger. They worked around our business hours so we didn't have to close. Great pressure washing service. Our customers have commented on how much better the place looks. Will be using them regularly.",
    },
    {
      name: "Jennifer P.",
      location: "Independence, KY",
      text: "We just moved into a new home in Independence and the siding was covered in construction dust and the driveway had concrete residue. NKY Pressure Washing Pros came out and cleaned everything without damaging any surfaces. Our home looks brand new. Highly recommend their pressure washing service.",
    },
    {
      name: "Dave S.",
      location: "Newport, KY",
      text: "Called for pressure washing on our home in Newport. They gave us a fair price over the phone and came out the same week. Siding, driveway, and patio all cleaned. They even removed the mold from our shaded side of the house. Great service, great price.",
    },
    {
      name: "Karen L.",
      location: "Edgewood, KY",
      text: "We get our house pressure washed every year with NKY Pressure Washing Pros. They always do a great job and our home in Edgewood looks wonderful every time. Reliable pressure washing company in Northern Kentucky that we trust completely.",
    },
    {
      name: "Tom W.",
      location: "Fort Thomas, KY",
      text: "Our Fort Thomas home sits on a hill and gets a lot of green algae on the north-facing siding. These guys pressure washed the whole house in about two hours. Every surface is clean and bright. They were careful with our landscaping and cleaned up after themselves. Best pressure washing in NKY.",
    },
  ] as { name: string; location: string; text: string }[],
};
