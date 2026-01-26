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
};

export const products: Product[] = [
  {
    slug: "ashwagandha",
    name: "Ashwagandha Roots",
    tagline: "Indian Ginseng · Export Quality",
    image: "/images/Ashwagandha-hero.webp",
    inStock: true,
    overview:
      "Ashwagandha (Withania somnifera) Known as 'Indian Ginseng' or the 'Prince of Herbs'.\n \nWhat it is: A powerful adaptogenic herb used for over 3,000 years in Ayurveda to help the body manage stress and increase energy.\n \nKey Ingredients (Bioactive Compounds):\n \nWithanolides: The most important active ingredient. High-quality roots (like yours) are valued for their high Withanolide content.\n \nAlkaloids & Saponins: These provide anti-inflammatory and antioxidant properties.\n \nMinerals: Rich in Iron, Calcium, and Magnesium.\n \nBenefits:\n \nStress & Anxiety: Reduces cortisol levels (the stress hormone).\n \nPhysical Performance: Increases stamina, muscle strength, and recovery for athletes.\n \nBrain Health: Improves memory, focus, and sleep quality.\n \nHow to Use:\n \nWhole Roots: Primarily used by manufacturers to create high-potency extracts (like KSM-66) or for boiling in traditional tonics.",
    specifications: [
      { label: "Botanical Name", value: "Withania somnifera" },
      { label: "Plant Part Used", value: "100% Dried Roots (No leaves/stems)" },
      { label: "Active Ingredient", value: "Withanolides > 2.5%" },
      { label: "Moisture Content", value: "Less than 10%" },
      { label: "Color", value: "Light Brown to Creamy White" },
      {
        label: "Form",
        value: "Whole Roots / Fine Powder (80-100 Mesh)",
      },
      {
        label: "Drying Method",
        value: "Natural Sun-Dried / Solar Dried",
      },
    ],
  },
  {
    slug: "ashwagandha-powder",
    name: "Ashwagandha Powder",
    tagline: "Fine Mesh · High Withanolides",
    image: "/images/ashwagandha-powder-hero.avif",
    inStock: true,
    overview:
      "Ashwagandha (Withania somnifera) Known as 'Indian Ginseng' or the 'Prince of Herbs'.\n \nWhat it is: A powerful adaptogenic herb used for over 3,000 years in Ayurveda to help the body manage stress and increase energy.\n \nKey Ingredients (Bioactive Compounds):\n \nWithanolides: The most important active ingredient. High-quality roots (like yours) are valued for their high Withanolide content.\n \nAlkaloids & Saponins: These provide anti-inflammatory and antioxidant properties.\n \nMinerals: Rich in Iron, Calcium, and Magnesium.\n \nBenefits:\n \nStress & Anxiety: Reduces cortisol levels (the stress hormone).\n \nPhysical Performance: Increases stamina, muscle strength, and recovery for athletes.\n \nBrain Health: Improves memory, focus, and sleep quality.\n \nHow to Use:\n \nPowder: Can be mixed with warm milk or honey, or added to smoothies and wellness capsules.",
    specifications: [
      { label: "Botanical Name", value: "Withania somnifera" },
      { label: "Plant Part Used", value: "Dried Roots (Powdered)" },
      { label: "Withanolide Content", value: "> 2.0%" },
      { label: "Mesh Size", value: "80-100 Mesh" },
      { label: "Moisture Content", value: "Less than 8%" },
      { label: "Color", value: "Light Brown" },
      { label: "Form", value: "Fine Powder" },
    ],
  },
  {
    slug: "safed-musli",
    name: "Safed Musli Roots",
    tagline: "Premium Ayurvedic Vitality Herb",
    image: "/images/safed-musli.webp",
    inStock: true,
    overview:
      "Safed Musli (Chlorophytum borivilianum) en called 'White Gold' or 'Divya Aushad' due to its high value.\n \nWhat it is: A rare Indian herb highly prized for its rejuvenating and vitalizing properties.\n \nKey Ingredients (Bioactive Compounds):\n \nSaponins: The primary active component (up to 17% in premium roots). It gives the powder its slightly foamy texture.\n \nAlkaloids & Polysaccharides: Provide the 'tonic' effect for the body.\n \nProteins & Fibers: High nutritional value for muscle building.\n \nBenefits:\n \nVitality & Energy: Known globally as a natural 'superfood' for stamina and reproductive health.\n \nImmune Booster: Strengthens the body's natural defense system.\n \nJoint Health: Contains anti-inflammatory properties that help with arthritis and joint pain.\n \nHow to Use:\n \nWhole Roots: Usually processed into 'Musli Chips' or ground fresh to maintain maximum potency.",
    specifications: [
      { label: "Botanical Name", value: "Chlorophytum borivilianum" },
      { label: "Plant Part Used", value: "Dried Tuberous Roots" },
      { label: "Saponin Content", value: "Rich Natural Content" },
      { label: "Moisture Content", value: "Less than 10%" },
      { label: "Color", value: "Creamy White" },
      { label: "Form", value: "Whole Dried Roots" },
      { label: "Drying Method", value: "Natural / Shade Dried" },
    ],
  },
  {
    slug: "safed-musli-powder",
    name: "Safed Musli Powder",
    tagline: "Fine Quality · Natural Strength Support",
    image: "/images/safed-musli-powder-hero.png",
    inStock: true,
    overview:
      "Safed Musli (Chlorophytum borivilianum) en called 'White Gold' or 'Divya Aushad' due to its high value.\n \nWhat it is: A rare Indian herb highly prized for its rejuvenating and vitalizing properties.\n \nKey Ingredients (Bioactive Compounds):\n \nSaponins: The primary active component (up to 17% in premium roots). It gives the powder its slightly foamy texture.\n \nAlkaloids & Polysaccharides: Provide the 'tonic' effect for the body.\n \nProteins & Fibers: High nutritional value for muscle building.\n \nBenefits:\n \nVitality & Energy: Known globally as a natural 'superfood' for stamina and reproductive health.\n \nImmune Booster: Strengthens the body's natural defense system.\n \nJoint Health: Contains anti-inflammatory properties that help with arthritis and joint pain.\n \nHow to Use:\n \nPowder: Traditionally taken (1/2 teaspoon) with lukewarm milk twice a day as a daily health tonic.",
    specifications: [
      { label: "Botanical Name", value: "Chlorophytum borivilianum" },
      { label: "Plant Part Used", value: "Dried Roots (Powdered)" },
      { label: "Mesh Size", value: "80-100 Mesh" },
      { label: "Moisture Content", value: "Less than 8%" },
      { label: "Color", value: "Off White to Cream" },
      { label: "Form", value: "Fine Powder" },
    ],
  },
];
