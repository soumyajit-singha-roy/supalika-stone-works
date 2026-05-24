// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// SUPALIKA STONE WORKS LLP — Site Data
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const SITE_CONFIG = {
  company: "Supalika Stone Works LLP",
  tagline: "Building Strong Foundations for India",
  domain: "supalikastone.com",
  email: "info@supalikastone.com",
  phone: "+91 98765 43210",
  whatsapp: "919876543210",
  address: "Supalika Stone Works LLP, Jajpur District, Odisha 755019, India",
  workingHours: "Monday – Saturday: 7:00 AM – 6:00 PM IST",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Leadership", href: "/leadership" },
  { label: "Products", href: "/products" },
  { label: "Process", href: "/process" },
  { label: "Industries", href: "/industries" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const HERO_STATS = [
  { value: 250, suffix: " TPH", label: "Integrated Plant Capacity" },
  { value: 2026, suffix: "", label: "Year Established" },
  { value: 0, suffix: "Railway", label: "Standard Certified Quality", isText: true },
  { value: 0, suffix: "Eastern India", label: "Trusted Supplier Network", isText: true },
];

export const MARQUEE_ITEMS = [
  "Stone Aggregates",
  "Railway Ballast",
  "Crushed Stone",
  "Quarry Materials",
  "Infrastructure Grade",
  "250 TPH Plant",
  "Quality Certified",
];

export const ABOUT_COPY = {
  label: "OUR STORY",
  heading: "Modern Stone, Strength & Infrastructure",
  paragraphs: [
    "Supalika Stone Works LLP is a registered aggregate company delivering premium quality materials across Odisha and Eastern India. With advanced quarrying operations and integrated crushing systems, we serve the nation's most demanding infrastructure, railway, and construction projects.",
    "Our state-of-the-art 250 TPH two-stage production plant operates with precision automation, delivering consistent gradation, superior shape index, and zero contamination — meeting railway ballast specifications and national highway standards alike.",
    "From deep quarry extraction to final dispatch, every tonne of aggregate bears the mark of operational excellence that has made Supalika the trusted choice for contractors, developers, and public sector infrastructure across Eastern India.",
  ],
  stats: [
    { label: "Operational Reliability", value: 98 },
    { label: "Quality Pass Rate", value: 99.6 },
    { label: "On-Time Delivery", value: 96 },
  ],
};

export const LEADERSHIP = [
  {
    name: "Sanjay Kumar Pradhan",
    title: "Managing Director",
    shortTitle: "MD",
    bio: "With a visionary approach to navigating the demanding terrain of quarrying, excavation, and infrastructure materials, Sanjay Kumar Pradhan has built more than a company — he has built a legacy. His leadership is transforming a local quarrying operation into a trusted Eastern India supplier for major national infrastructure projects. Known for his deep geological knowledge, operational discipline, and client-first philosophy, he shapes every tonne of aggregate that leaves Supalika's facilities.",
    linkedin: "#",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80",
  },
  {
    name: "Pranat Bajaj",
    title: "Director",
    shortTitle: "DIR",
    bio: "Pranat Bajaj brings a relentless focus on quality compliance, technical innovation, and operational scalability. His expertise in railway ballast specifications, IS code compliance, and infrastructure-grade material standards has positioned Supalika at the forefront of quality assurance in the aggregate industry. Under his directorship, the company achieved railway-standard certification and expanded its client base to include national highway contractors and port development authorities across Eastern India.",
    linkedin: "#",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80",
  },
];

export const PRODUCTS = [
  {
    name: "Railway Ballast",
    slug: "railway-ballast",
    category: "Premium Grade",
    description: "Precisely graded stone ballast meeting Indian Railway specifications for track bedding, drainage, and load distribution across mainline and branch-line operations.",
    image: "/product-railway-ballast.png",
    featured: true,
  },
  {
    name: "Stone Aggregates",
    slug: "stone-aggregates",
    category: "Construction",
    description: "Multi-grade crushed stone aggregates for concrete production, road construction, and structural foundations — available in 10mm, 20mm, and 40mm specifications.",
    image: "/product-stone-aggregates.png",
    featured: false,
  },
  {
    name: "Crushed Stone",
    slug: "crushed-stone",
    category: "Infrastructure",
    description: "Angular, mechanically crushed stone with superior interlock properties for highway base layers, embankments, and heavy-duty industrial pavements.",
    image: "/product-crushed-stone.png",
    featured: false,
  },
  {
    name: "Quarry Dust",
    slug: "quarry-dust",
    category: "Fine Material",
    description: "Manufactured stone dust and fines for use in brick production, plastering, and as controlled fill material in foundation and trenching operations.",
    image: "/product-quarry-dust.png",
    featured: false,
  },
  {
    name: "Infrastructure Aggregate",
    slug: "infrastructure-aggregate",
    category: "Heavy-Duty",
    description: "Engineered aggregate blends designed for national highway projects, airport runways, and heavy-load industrial infrastructure with strict IS code compliance.",
    image: "/product-infrastructure-aggregate.png",
    featured: false,
  },
  {
    name: "Mining Products",
    slug: "mining-products",
    category: "Raw Material",
    description: "Direct-from-quarry oversize stone, boulders, and riprap for mining support structures, erosion control, and marine/port construction applications.",
    image: "/product-mining-products.png",
    featured: false,
  },
];

export const PROCESS_STEPS = [
  {
    step: 1,
    name: "Quarry Extraction",
    description: "Controlled blasting and excavation from certified mineral reserves",
    icon: "Mountain",
  },
  {
    step: 2,
    name: "Primary Crushing",
    description: "High-capacity jaw crushers reduce oversize material to feed grade",
    icon: "Settings",
  },
  {
    step: 3,
    name: "Secondary Screening",
    description: "Vibrating screens separate material into precise size fractions",
    icon: "Filter",
  },
  {
    step: 4,
    name: "Washing & Grading",
    description: "Water-wash systems remove dust and clay for clean output",
    icon: "Droplets",
  },
  {
    step: 5,
    name: "Quality Testing",
    description: "Laboratory analysis verifies gradation, shape index, and strength",
    icon: "Microscope",
  },
  {
    step: 6,
    name: "Dispatch & Logistics",
    description: "Weigh-bridge verified loading with fleet tracking to site",
    icon: "Truck",
  },
];

export const INFRASTRUCTURE_COUNTERS = [
  { value: 250, suffix: " TPH", label: "Integrated Plant Capacity" },
  { value: 99.6, suffix: "%", label: "Quality Pass Rate", decimals: 1 },
  { value: 2026, suffix: "", label: "Year Established" },
  { value: 6, suffix: "", label: "Material Categories" },
];

export const INFRASTRUCTURE_FEATURES = [
  {
    title: "2-Stage Crushing System",
    description: "Sequential jaw and cone crushing delivers precise gradation with minimal wastage, operating at full 250 TPH rated throughput across all material categories.",
    icon: "Layers",
  },
  {
    title: "Integrated Quarry Operations",
    description: "Vertically integrated from extraction to dispatch — our quarry, crushing, screening, and logistics operate as a single unified production chain.",
    icon: "Factory",
  },
  {
    title: "Advanced Quality Lab",
    description: "On-site testing laboratory with sieve analysis, Los Angeles abrasion testing, flakiness index measurement, and specific gravity verification per IS standards.",
    icon: "FlaskConical",
  },
];

export const INDUSTRIES = [
  {
    name: "Railway Infrastructure",
    description: "Certified ballast for Indian Railways mainline and branch operations",
    image: "/industry-railway.png",
  },
  {
    name: "National Highways",
    description: "Base and sub-base aggregates for NH construction and maintenance",
    image: "/industry-highway.png",
  },
  {
    name: "Building Construction",
    description: "Structural aggregates for foundations, columns, and floor systems",
    image: "/industry-building.png",
  },
  {
    name: "Mining Operations",
    description: "Oversize material and support aggregates for open-cast mining sites",
    image: "/industry-mining.png",
  },
  {
    name: "Ports & Waterways",
    description: "Riprap, armour stone, and marine-grade aggregates for coastal infrastructure",
    image: "/industry-ports.png",
  },
  {
    name: "Industrial Estates",
    description: "Pavement and foundation materials for SEZs and industrial complexes",
    image: "/industry-estates.png",
  },
];

export const WHY_CHOOSE_US = [
  {
    icon: "ShieldCheck",
    title: "Certified Quality Standards",
    description: "Every tonne tested against Indian Railway ballast specifications and National Highway aggregate standards — zero compromise on compliance.",
  },
  {
    icon: "TrendingUp",
    title: "High-Volume Throughput",
    description: "250 TPH integrated crushing capacity operating round-the-clock to meet the most demanding project timelines and volume requirements.",
  },
  {
    icon: "Award",
    title: "Compliance First",
    description: "Materials verified against IS codes, railway circulars, and MORTH specifications — with full test certificates for every consignment dispatched.",
  },
  {
    icon: "Clock",
    title: "Reliable On-Time Delivery",
    description: "Regional logistics network with GPS-tracked fleet ensures consistent supply to project sites across Odisha and Eastern India.",
  },
  {
    icon: "Users",
    title: "Expert Leadership",
    description: "Modern domain expertise in quarrying, aggregate production, and infrastructure material supply, setting new standards for the industry.",
  },
  {
    icon: "MapPin",
    title: "Eastern India Coverage",
    description: "Strategically located in Odisha with pan-Eastern supply capability — serving projects from Bihar to Andhra Pradesh.",
  },
];

export const CAREER_LISTINGS = [
  {
    title: "Quarry Operations Manager",
    department: "Operations",
    location: "Jajpur, Odisha",
    type: "Full-Time",
  },
  {
    title: "Quality Control Officer",
    department: "Quality Assurance",
    location: "Jajpur, Odisha",
    type: "Full-Time",
  },
];

export const CAREER_CULTURE = [
  "Hands-on work with India's largest aggregate operations",
  "Mentorship under leading industry experts",
  "Growth aligned with India's infrastructure boom",
];

export const PRODUCT_OPTIONS = [
  "Railway Ballast",
  "Stone Aggregates",
  "Crushed Stone",
  "Quarry Dust",
  "Infrastructure Aggregate",
  "Mining Products",
  "Other",
];

export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
  quarryAerial: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1400&q=80",
  crushingPlant: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&q=80",
  stoneCloseup: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
  miningMachinery: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1400&q=80",
  highway: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1400&q=80",
  infrastructure: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&q=80",
};
