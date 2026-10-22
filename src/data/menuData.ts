export interface MenuItem {
  id: string;
  name: string;
  category: 'millets' | 'sweets' | 'noodles' | 'tiffins';
  categoryLabel: string;
  description: string;
  priceNote: string;
  isPopular?: boolean;
  image: string;
  imageAlt: string;
}

export const MENU_CATEGORIES = [
  { id: 'all', label: 'All Offerings' },
  { id: 'millets', label: 'Pure Millet Snacks' },
  { id: 'sweets', label: 'Healthy Sweets' },
  { id: 'noodles', label: 'Millet Noodles & Pasta' },
  { id: 'tiffins', label: 'Evening Tiffins' },
] as const;

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'millet-murukku-snacks',
    name: 'Pure Millet Ribbon Murukku & Kara Snacks',
    category: 'millets',
    categoryLabel: 'Pure Millet Snacks',
    description: 'Crisp, aromatic South Indian savory snacks made from wholesome millets, fresh roasted curry leaves, and cumin.',
    priceNote: 'Enquire for pack sizes & price',
    isPopular: true,
    image: '/src/assets/images/millet_snacks_tray_1792641871151.jpg',
    imageAlt: 'Golden crisp pure millet murukku and savory kara snacks'
  },
  {
    id: 'ghee-bobbatlu',
    name: 'Traditional Homemade Ghee Bobbatlu',
    category: 'sweets',
    categoryLabel: 'Healthy Sweets',
    description: 'Freshly prepared Andhra sweet flatbread filled with slow-cooked jaggery and lentils, brushed with aromatic ghee.',
    priceNote: 'Enquire for daily batch price',
    isPopular: true,
    image: '/src/assets/images/traditional_bobbatlu_1792641871143.jpg',
    imageAlt: 'Authentic warm Andhra bobbatlu with pure ghee on banana leaf'
  },
  {
    id: 'millet-veggie-noodles',
    name: 'Nutritious Homemade Millet Noodles',
    category: 'noodles',
    categoryLabel: 'Millet Noodles & Pasta',
    description: 'Wholesome stir-fried millet noodles tossed with colorful crisp seasonal vegetables and mild spices — zero maida.',
    priceNote: 'Enquire for portion availability',
    isPopular: true,
    image: '/src/assets/images/millet_noodles_dish_1792641872496.jpg',
    imageAlt: 'Steaming bowl of nutritious homemade millet noodles'
  },
  {
    id: 'evening-tiffin-platter',
    name: 'Special Millet Evening Tiffin Platter',
    category: 'tiffins',
    categoryLabel: 'Evening Tiffins',
    description: 'Soft steamed millet idlis and crunchy savory fritters paired with fresh ground coconut chutney and spicy Guntur tomato dip.',
    priceNote: 'Enquire for evening tiffin menu',
    isPopular: true,
    image: '/src/assets/images/evening_tiffins_platter_1792641873850.jpg',
    imageAlt: 'Traditional South Indian evening tiffins spread with chutneys'
  },
  {
    id: 'millet-chekkalu-boondi',
    name: 'Handcrafted Millet Chekkalu & Kara Mix',
    category: 'millets',
    categoryLabel: 'Pure Millet Snacks',
    description: 'Handmade crunchy millet crackers enriched with sesame, roasted split peas, and green chilies. Perfect healthy tea-time snack.',
    priceNote: 'Enquire for batch availability',
    image: '/src/assets/images/millet_snacks_tray_1792641871151.jpg',
    imageAlt: 'Handcrafted traditional millet chekkalu and mixture'
  },
  {
    id: 'homemade-millet-pasta',
    name: 'Farm-Fresh Millet Pasta with Country Herbs',
    category: 'noodles',
    categoryLabel: 'Millet Noodles & Pasta',
    description: 'Health-conscious alternative made with pure millet grains, tossed in light homemade sauce with local farm herbs.',
    priceNote: 'Enquire for fresh prep',
    image: '/src/assets/images/millet_noodles_dish_1792641872496.jpg',
    imageAlt: 'Homemade millet pasta tossed with natural herbs'
  }
];

export interface GalleryPhoto {
  id: string;
  title: string;
  caption: string;
  category: string;
  image: string;
  alt: string;
}

export const GALLERY_ITEMS: GalleryPhoto[] = [
  {
    id: 'g-1',
    title: 'Artisanal Home Food Spread',
    caption: 'A complete view of fresh tiffins, sweets, and millet snacks prepared daily.',
    category: 'Spread',
    image: '/src/assets/images/hero_food_spread_1792641870977.jpg',
    alt: 'Grand South Indian food spread at Souji’s Kitchen'
  },
  {
    id: 'g-2',
    title: 'Pure Millet Kara Snacks',
    caption: 'Golden, extra-crisp snacks made with traditional recipes and whole millets.',
    category: 'Snacks',
    image: '/src/assets/images/millet_snacks_tray_1792641871151.jpg',
    alt: 'Crispy millet ribbon murukku on brass dish'
  },
  {
    id: 'g-3',
    title: 'Warm Andhra Bobbatlu',
    caption: 'Melt-in-mouth jaggery sweet flatbread finished with pure desi ghee.',
    category: 'Sweets',
    image: '/src/assets/images/traditional_bobbatlu_1792641871143.jpg',
    alt: 'Freshly prepared ghee bobbatlu on banana leaf'
  },
  {
    id: 'g-4',
    title: 'Healthy Millet Noodles',
    caption: 'Wholesome meals with fresh vegetables and zero preservatives.',
    category: 'Noodles',
    image: '/src/assets/images/millet_noodles_dish_1792641872496.jpg',
    alt: 'Freshly stir-fried millet noodles in bowl'
  },
  {
    id: 'g-5',
    title: 'Evening Tiffin Essentials',
    caption: 'Steamed millet idlis, crispy savories, and traditional home chutneys.',
    category: 'Tiffins',
    image: '/src/assets/images/evening_tiffins_platter_1792641873850.jpg',
    alt: 'Evening tiffins with variety of house-ground chutneys'
  },
  {
    id: 'g-6',
    title: 'Handcrafted with Care',
    caption: 'Traditional techniques passed down through generations in Guntur.',
    category: 'Craft',
    image: '/src/assets/images/kitchen_craft_about_1792641872832.jpg',
    alt: 'Artisanal dough preparation for traditional homemade food'
  }
];
