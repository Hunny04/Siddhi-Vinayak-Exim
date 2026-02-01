export type ProductSpec = {
  label: string;
  value: string;
};

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  image: string;
  inStock: boolean;
  overview: string;
  specifications: ProductSpec[];
  applications: string[];
  packaging: string[];
  certifications: string[];
  hsCode: string;
};

export const products: Product[] = [
  {
    slug: "ashwagandha",
    name: "Ashwagandha",
    tagline: "Premium Ayurvedic Root · Export Quality",
    image: "/images/ashwagandha-hero.webp",
    inStock: true,
    overview:
      "Ashwagandha (Withania somnifera) is a premium Indian herbal root widely used in Ayurvedic and nutraceutical applications.\n\nOur Ashwagandha is carefully sourced from Neemuch, Madhya Pradesh, cleaned, and processed to maintain its natural potency and purity, making it suitable for bulk supply and international export.",
    specifications: [
      { label: "Botanical Name", value: "Withania somnifera" },
      { label: "Origin", value: "Neemuch, Madhya Pradesh, India" },
      { label: "Available Forms", value: "Dried Whole Roots, Powder" },
      { label: "Color", value: "Light Brown" },
      { label: "Moisture Content", value: "Max 10%" },
      { label: "Purity", value: "99%" },
      { label: "Foreign Matter", value: "Less than 1%" },
      { label: "Mesh Size (Powder)", value: "80-100 Mesh" },
    ],
    applications: ["Ayurvedic formulations", "Herbal & nutraceutical products"],
    packaging: ["25 kg export-grade bags", "50 kg export-grade bags", "Custom packaging available"],
    certifications: ["COA", "GMP", "ISO", "Phytosanitary Certificate"],
    hsCode: "121190",
  },
  {
    slug: "safed-musli",
    name: "Safed Musli",
    tagline: "Premium Vitality Herb · Export Grade",
    image: "/images/safed-musli.webp",
    inStock: true,
    overview:
      "Safed Musli (Chlorophytum borivilianum) is a premium Ayurvedic herb widely used in herbal, nutraceutical, and wellness products.\n\nOur Safed Musli is carefully sourced from Madhya Pradesh and Rajasthan and processed to ensure purity, consistency, and suitability for global export markets.",
    specifications: [
      { label: "Botanical Name", value: "Chlorophytum borivilianum" },
      { label: "Origin", value: "Madhya Pradesh & Rajasthan, India" },
      { label: "Available Forms", value: "Dried Whole Roots, Powder" },
      { label: "Color", value: "White to Cream" },
      { label: "Moisture Content", value: "Max 10%" },
      { label: "Purity", value: "99%" },
      { label: "Foreign Matter", value: "Less than 1%" },
      { label: "Mesh Size (Powder)", value: "80-100 Mesh" },
    ],
    applications: ["Ayurvedic formulations", "Herbal & nutraceutical products"],
    packaging: ["25 kg export-grade bags", "50 kg export-grade bags", "Custom packaging available"],
    certifications: ["COA", "GMP", "ISO", "Phytosanitary Certificate"],
    hsCode: "121190",
  },

  {
    slug: "aloe-vera",
    name: "Aloe Vera",
    tagline: "Natural Herbal Ingredient · Export Quality",
    image: "/images/aloe-vera.webp",
    inStock: true,
    overview:
      "Aloe Vera (Aloe barbadensis Miller) is a widely used herbal ingredient known for its versatility in herbal, nutraceutical, cosmetic, and wellness applications.\n\nOur Aloe Vera is sourced from Gujarat and Rajasthan and processed under controlled conditions to maintain purity and export-grade quality.",
    specifications: [
      { label: "Botanical Name", value: "Aloe barbadensis Miller" },
      { label: "Origin", value: "Gujarat & Rajasthan, India" },
      { label: "Available Forms", value: "Dried Powder, Aloe Vera Gel (on request)" },
      { label: "Color", value: "Off-white to Light Green" },
      { label: "Moisture Content", value: "Max 8%" },
      { label: "Purity", value: "99%" },
      { label: "Foreign Matter", value: "Less than 1%" },
      { label: "Mesh Size (Powder)", value: "80-100 Mesh" },
    ],
    applications: ["Herbal & nutraceutical products", "Cosmetic & wellness formulations"],
    packaging: ["25 kg export-grade bags", "50 kg export-grade bags", "Custom packaging available"],
    certifications: ["COA", "GMP", "ISO", "Phytosanitary Certificate"],
    hsCode: "121190",
  },
  {
    slug: "moringa-powder",
    name: "Moringa Powder",
    tagline: "Nutrient-Rich Leaf Powder · Export Grade",
    image: "/images/moringa-powder.webp",
    inStock: true,
    overview:
      "Moringa Powder is produced from carefully dried moringa leaves and is widely used in herbal, nutraceutical, and wellness products.\n\nOur moringa powder is finely processed to retain natural nutrients and meets international export-quality standards.",
    specifications: [
      { label: "Botanical Name", value: "Moringa oleifera" },
      { label: "Origin", value: "Tamil Nadu & Rajasthan, India" },
      { label: "Available Forms", value: "Dried Leaf Powder" },
      { label: "Color", value: "Green" },
      { label: "Moisture Content", value: "Max 8%" },
      { label: "Purity", value: "99%" },
      { label: "Foreign Matter", value: "Less than 1%" },
      { label: "Mesh Size", value: "80-100 Mesh" },
    ],
    applications: ["Nutraceutical & herbal products", "Wellness & dietary supplements"],
    packaging: ["25 kg export-grade bags", "50 kg export-grade bags", "Custom packaging available"],
    certifications: ["COA", "GMP", "ISO", "Phytosanitary Certificate"],
    hsCode: "121190",
  },
  {
    slug: "amla",
    name: "Amla",
    tagline: "Natural Vitamin C Rich Fruit · Export Grade",
    image: "/images/amla.webp",
    inStock: true,
    overview:
      "Amla (Emblica officinalis) is a widely used Ayurvedic fruit known for its high nutritional value and antioxidant properties.\n\nOur Amla is carefully sourced from Madhya Pradesh and Uttar Pradesh and processed to maintain natural quality, making it suitable for bulk supply and international export.",
    specifications: [
      { label: "Botanical Name", value: "Emblica officinalis" },
      { label: "Origin", value: "Madhya Pradesh & Uttar Pradesh, India" },
      { label: "Available Forms", value: "Dried Amla, Amla Powder" },
      { label: "Color", value: "Light Brown to Greenish" },
      { label: "Moisture Content", value: "Max 10%" },
      { label: "Purity", value: "99%" },
      { label: "Foreign Matter", value: "Less than 1%" },
      { label: "Mesh Size (Powder)", value: "80-100 Mesh" },
    ],
    applications: ["Ayurvedic formulations", "Herbal & nutraceutical products"],
    packaging: ["25 kg export-grade bags", "50 kg export-grade bags", "Custom packaging available"],
    certifications: ["COA", "GMP", "ISO", "Phytosanitary Certificate"],
    hsCode: "121190",
  },

  {
    slug: "jeera-cumin-seeds",
    name: "Jeera (Cumin Seeds)",
    tagline: "Premium Aromatic Spice · Export Quality",
    image: "/images/jeera.webp",
    inStock: true,
    overview:
      "Jeera (Cuminum cyminum) is a premium Indian spice widely used in food products, spice blends, and herbal formulations.\n\nSourced from Unjha, Gujarat—India's major spice hub—our cumin seeds are known for strong aroma, high oil content, and export-grade quality.",
    specifications: [
      { label: "Botanical Name", value: "Cuminum cyminum" },
      { label: "Origin", value: "Unjha, Gujarat, India" },
      { label: "Available Forms", value: "Whole Seeds, Powder" },
      { label: "Color", value: "Brownish" },
      { label: "Moisture Content", value: "Max 10%" },
      { label: "Purity", value: "99%" },
      { label: "Foreign Matter", value: "Less than 1%" },
      { label: "Oil Content", value: "High (Natural)" },
    ],
    applications: ["Food & spice industry", "Herbal & nutraceutical products"],
    packaging: ["25 kg export-grade bags", "50 kg export-grade bags", "Custom packaging available"],
    certifications: ["COA", "GMP", "ISO", "Phytosanitary Certificate"],
    hsCode: "090931",
  },

  {
    slug: "variyaali-fennel-seeds",
    name: "Variyali (Fennel Seeds)",
    tagline: "Sweet Aromatic Seeds · Export Grade",
    image: "/images/fennel.webp",
    inStock: true,
    overview:
      "Variyali (Foeniculum vulgare) is a premium aromatic spice widely used in food, herbal, and nutraceutical applications.\n\nSourced from Unjha, Gujarat, our fennel seeds are known for their sweet aroma, uniform size, and export-grade quality.",
    specifications: [
      { label: "Botanical Name", value: "Foeniculum vulgare" },
      { label: "Origin", value: "Unjha, Gujarat, India" },
      { label: "Available Forms", value: "Whole Seeds, Powder" },
      { label: "Color", value: "Green to Light Green" },
      { label: "Moisture Content", value: "Max 10%" },
      { label: "Purity", value: "99%" },
      { label: "Foreign Matter", value: "Less than 1%" },
      { label: "Aroma", value: "Sweet & Strong" },
    ],
    applications: ["Food & spice industry", "Herbal & nutraceutical products"],
    packaging: ["25 kg export-grade bags", "50 kg export-grade bags", "Custom packaging available"],
    certifications: ["COA", "GMP", "ISO", "Phytosanitary Certificate"],
    hsCode: "090961",
  },

  {
    slug: "isabgol-psyllium-husk",
    name: "Isabgol (Psyllium Husk)",
    tagline: "Natural Dietary Fiber · Export Quality",
    image: "/images/isabgol.webp",
    inStock: true,
    overview:
      "Isabgol (Plantago ovata) is a natural dietary fiber widely used in nutraceutical, herbal, and pharmaceutical products.\n\nOur Isabgol is processed under strict quality controls to ensure high purity, excellent swelling capacity, and export-grade standards.",
    specifications: [
      { label: "Botanical Name", value: "Plantago ovata" },
      { label: "Origin", value: "Rajasthan & Gujarat, India" },
      { label: "Available Forms", value: "Psyllium Husk, Psyllium Powder" },
      { label: "Color", value: "Off-white" },
      { label: "Moisture Content", value: "Max 12%" },
      { label: "Purity", value: "99%" },
      { label: "Foreign Matter", value: "Less than 1%" },
      { label: "Swelling Index", value: "High (Export Standard)" },
    ],
    applications: ["Nutraceutical & dietary supplements", "Herbal & pharmaceutical products"],
    packaging: ["25 kg export-grade bags", "50 kg export-grade bags", "Custom packaging available"],
    certifications: ["COA", "GMP", "ISO", "Phytosanitary Certificate"],
    hsCode: "121190",
  },

  {
    slug: "rose-petals",
    name: "Rose",
    tagline: "Natural Aromatic Flower · Export Grade",
    image: "/images/rose.webp",
    inStock: true,
    overview:
      "Rose (Rosa damascena) is a premium aromatic flower widely used in herbal, nutraceutical, cosmetic, and wellness products.\n\nOur rose petals are carefully dried and processed to retain natural color, aroma, and export-grade quality.",
    specifications: [
      { label: "Botanical Name", value: "Rosa damascena" },
      { label: "Origin", value: "Rajasthan & Uttar Pradesh, India" },
      { label: "Available Forms", value: "Dried Rose Petals, Rose Powder" },
      { label: "Color", value: "Pink to Reddish" },
      { label: "Moisture Content", value: "Max 10%" },
      { label: "Purity", value: "99%" },
      { label: "Foreign Matter", value: "Less than 1%" },
      { label: "Aroma", value: "Natural & Pleasant" },
    ],
    applications: ["Herbal & nutraceutical products", "Cosmetic & wellness formulations"],
    packaging: ["10 kg export-grade bags", "25 kg export-grade bags", "Custom packaging available"],
    certifications: ["COA", "GMP", "ISO", "Phytosanitary Certificate"],
    hsCode: "121190",
  },

  {
    slug: "aparajita-butterfly-pea",
    name: "Aparajita Flower (Butterfly Pea)",
    tagline: "Natural Blue Flower · Export Quality",
    image: "/images/aparajita.webp",
    inStock: true,
    overview:
      "Aparajita Flower (Clitoria ternatea) is a traditional Ayurvedic herb widely used in herbal, wellness, and nutraceutical applications.\n\nOur flowers are carefully dried and processed to retain natural color, purity, and export-grade quality.",
    specifications: [
      { label: "Botanical Name", value: "Clitoria ternatea" },
      { label: "Origin", value: "Gujarat & Rajasthan, India" },
      { label: "Available Forms", value: "Dried Whole Flowers, Powder" },
      { label: "Color", value: "Deep Blue" },
      { label: "Moisture Content", value: "Max 10%" },
      { label: "Purity", value: "99%" },
      { label: "Foreign Matter", value: "Less than 1%" },
      { label: "Aroma", value: "Mild & Natural" },
    ],
    applications: ["Herbal & nutraceutical products", "Wellness & tea formulations"],
    packaging: [
      "5 kg export-grade bags",
      "10 kg export-grade bags",
      "25 kg export-grade bags",
      "Custom packaging available",
    ],
    certifications: ["COA", "GMP", "ISO", "Phytosanitary Certificate"],
    hsCode: "121190",
  },

  {
    slug: "ginger",
    name: "Ginger",
    tagline: "Strong Aroma Spice · Export Grade",
    image: "/images/ginger.webp",
    inStock: true,
    overview:
      "Ginger (Zingiber officinale) is a widely used spice and herbal ingredient valued for its strong aroma and natural potency.\n\nOur ginger is sourced from Kerala and North-East India and processed to meet international export-quality standards.",
    specifications: [
      { label: "Botanical Name", value: "Zingiber officinale" },
      { label: "Origin", value: "Kerala & North-East India" },
      { label: "Available Forms", value: "Dried Ginger, Ginger Powder" },
      { label: "Color", value: "Light Brown" },
      { label: "Moisture Content", value: "Max 10%" },
      { label: "Purity", value: "99%" },
      { label: "Foreign Matter", value: "Less than 1%" },
      { label: "Aroma", value: "Strong & Natural" },
    ],
    applications: ["Food & spice industry", "Herbal & nutraceutical products"],
    packaging: ["25 kg export-grade bags", "50 kg export-grade bags", "Custom packaging available"],
    certifications: ["COA", "GMP", "ISO", "Phytosanitary Certificate"],
    hsCode: "091011",
  },
];
