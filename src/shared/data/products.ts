export interface Product {
  id: number;
  name: string;
  image: string;
  alt: string;
  price: number;
  concentration: 'Extrait de Parfum' | 'Eau de Parfum';
  percent: number;
  size: number;
  family: string;
  badge?: 'Bestseller' | 'New Harvest' | null;
  note: string;
  footer: string;
}

export const Products: Product[] = [
  {
    id: 1,
    name: 'Oud Impérial',
    concentration: 'Extrait de Parfum',
    percent: 30,
    size: 100,
    price: 360,
    family: 'Woody & Resinous',
    badge: 'Bestseller',
    note: 'Smoked Amber, Wild Indonesian Agarwood & Rare Cambodian Oud distilled at high potency.',
    footer: '30% Concentration',
    alt: 'SHAZA Oud Impérial Flacon in emerald green architectural glass',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBYVlhZorpLGGfV1HHzlsSd0ypW5K5DDvWxP_HgmvhNPKsPDcS48GiffaupeC6M0muq4bWI6V1abMxBYD2TB1GIxC6r-5BsWYsgjShZXrLJrZBmovCQH8VHxoP-nWtyQrmwoCTICGrhoKqGLMirwvxtVzrNrnCSRmDKiwRbI4BnRxAohydfBP2njNEX66ZyPDGbO7D-0q0QWUiOAk11-E2oojh6PLjHvgW8h9hFB5H5Qwr6aUgdmBKHUg',
  },
  {
    id: 2,
    name: 'Rose Solaire',
    concentration: 'Eau de Parfum',
    percent: 20,
    size: 100,
    price: 320,
    family: 'Floral Soliflore',
    badge: 'New Harvest',
    note: 'Morning Grasse Centifolia rose petals illuminated by Persian saffron threads and solar musk.',
    footer: 'May 2024 Distillation',
    alt: 'SHAZA Rose Solaire Flacon in faceted luminous crystal',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBIfx6zshxlZnc0x8Y-itWBILt_A0DgV9KmpAdzmpgnNShfo7971R5hUPyzw6TIusGIh_8Mypel5LIZv1mhLdk0xsn1MMAwTPUQgFyKDZ1wR91dyc6qYL7Wz-VJgyocGk_wPAFeFLtKWtFWFGS1egnPSN--suMmKC9wpUssvnYAfiQCVEYhTwswnkCRbFY1GNxh3RDfOFG3UGSnsdRuCu1CtUSZT1mwh4GKZ4mmsBza0Y8wuLrrwEdseA',
  },
  {
    id: 3,
    name: 'Santal Blanc',
    concentration: 'Extrait de Parfum',
    percent: 30,
    size: 100,
    price: 340,
    family: 'Woody & Resinous',
    note: 'Creamy Australian Sandalwood paired with Florentine white iris butter and delicate cardamom pod.',
    footer: 'Single Forest Sourced',
    alt: 'Santal Blanc perfume bottle in milky alabaster glass with pale wood cap',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDU-tNye0tGXMKCIO6Z-enru1Pea-AvmOW-5v7TaZVexcBunCU6pmryouQrK0fBTKNKLdp-7vULEXsr5Q469Lb0y6daRqX0pAk0e1vMIov_UKOcXbjqpdjnmyCq8l5jRS_da3tliI5QDQSLwxEse0Xq3eSDn0cwlq3a2321HcHX2uQmtiW2vgf3iBjeiHddK30roMxqj2AOZHFDtRMRm574AC9PED31FirO0KAHFOYYyiSBMPIEJ2VdkA',
  },
  {
    id: 4,
    name: 'Cuir Noir Élixir',
    concentration: 'Extrait de Parfum',
    percent: 30,
    size: 100,
    price: 380,
    family: 'Oriental Cuir',
    note: 'Tuscan birch tar, cured vintage saddle leather, smoky cade oil, and dense Baltic black amber.',
    footer: 'Vintage Leather Accord',
    alt: 'Cuir Noir Élixir perfume bottle in glossy obsidian black glass',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB_0fqDgOlaZrOpoiVCohLDHTKy3KJQKgnUIZRHreO464FVLRgEc9zQtqrShHf3QJZ4U5sZFVWNEyQI6CHbptLeqSw_5cAElqSSNGmb7EWcMSRgPSjjFbSferXQrqirZMGd0D7KaHtcJrKoElSwwFYft5aAW6xI0dyMfbxQzk2ansmeP34iYVFfqkRJHt-L7Xr37A1Ak_np1shFz0-ue6XnR2pORIWwg60rpxlLL2RZEKmGUKaolEX4ZA',
  },
  {
    id: 5,
    name: 'Ambre Éternelle',
    concentration: 'Extrait de Parfum',
    percent: 30,
    size: 100,
    price: 350,
    family: 'Amber & Balsamic',
    note: 'Warm Siam golden benzoin, Madagascar vanilla bourbon, aged cistus labdanum, and spun gold honey.',
    footer: 'Bourbon Vanilla Cru',
    alt: 'Ambre Éternelle octagonal perfume bottle with honey-golden liquid',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDda0OPD8i-_Ul1MHxEqzLGiMx3e51DTS7CDIQYuJYSSD-af4Dq8j59bTNLNr15Z3Qhbm5UXWSWZqUjU3GBNZB-jV5f5hn--nPwTfXeV3ShOW-LbmutaCv-MLPsSp-eHg6Bu3oiD6seRueeagGPdfyRs82hLgh20V7jKcVh53ySKhrzHo-8yboGv6WA8XDODj2sTXGYx1LKpVihi5nIpTgWcbY8Mtpw0QqFw1B-6CMu1oVWy3l4dOjcyg',
  },
  {
    id: 6,
    name: 'Vétiver Céleste',
    concentration: 'Eau de Parfum',
    percent: 20,
    size: 100,
    price: 295,
    family: 'Fresh Citrus & Herbaceous',
    note: 'Sun-bleached Haitian vetiver roots spiked with cold pressed bitter orange and Calabrian bergamot zest.',
    footer: 'Haitian Terroir',
    alt: 'Vétiver Céleste perfume bottle on pale green linen',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB0rK9vZ2uzZlC4QOqXuppIs5w2nOszr8BTOJZYa2Xe-c3gyah_k73IsOuaGbiuUCExRprhb7gIxD8hnGH4TB9TO_0A-MHWI_1CPOPg626Qa0eoH_4vvFBvcJ8Hu-nD8GJkOAAkiX-sCB77pT6V63GohqfezuCNf_xLo2TA_qvMhZkMV2SSVq4XjQYGwtGx7jMdcJAbSG3i7i2npIUSXMamxR-bLeLUL2KU7PYdL3rRsJW4afIepK_xOA',
  },
  {
    id: 7,
    name: 'Fleur de Nuit',
    concentration: 'Extrait de Parfum',
    percent: 30,
    size: 100,
    price: 330,
    family: 'Floral Soliflore',
    note: 'Night-blooming Indian Sambac jasmine, roasted Venezuelan tonka bean, and velvety white cashmere woods.',
    footer: 'Midnight Harvest',
    alt: 'Fleur de Nuit frosted glass bottle with gold leaf collar',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB-Q0-rHzPKab0paoPQFFq3fVpUaetcE7ZphGNR-xRQudnQbZfjNJspj_fkJ-QCvpIkeiowD9ZIIPNLhPPqkkHvb-g21yKQwNbd0oRLZR-XpZ7LD5dacTmaxhZDGyb5B-CX6kWVJcCR5oKDEYtQW9NcOok6iLXuwE4nDXd_orUeNqjwrgInFaYmQ5AeCUsj6MGSmjQ7vxBJc18Trn8Iv7XtlUoeCug5tKlHNaCCtYiM0hziF7hm3xbh_g',
  },
  {
    id: 8,
    name: 'Cèdre Majestueux',
    concentration: 'Extrait de Parfum',
    percent: 30,
    size: 100,
    price: 345,
    family: 'Woody & Resinous',
    note: 'Century-old Moroccan Atlas cedarwood, tears of Omani frankincense, green cardamom, and smoked papyrus.',
    footer: 'Rare Wood Distillate',
    alt: 'Cèdre Majestueux dark emerald glass flacon with walnut cap',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBq59EC3PsdpsczkcQQxkQStFevtfrOqI3OEZyu-PcQLSKejB6rhwB_KaOS25q8DQyJnGuaylQzv8GrprjFNsK9S4MmhGxdBi2WqaW-QtJ5IyJauAcjZMX1q6xsp-R3YYXbPdvlavwWdlGvRpeUvQeIGwCo3f0dZfGbKfFuzMBhxWggY86GfkJC3GdRjHi5KwOW-MIV3WVpwlb8Csif53LjD5-vz8dj6-SQp-UqHCzWlyFHxDam2XQK4w',
  },
  {
    id: 9,
    name: 'Sauvage Elixir',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB-p_QTlf_bF1BEAoSK5_ocE8zGuFdIUF6cuDcvId4xGqDhbpvVs-DCTaCgAxdXFhBZrO4fQNSdqwAYNvcDDp7lKZnJaiOadlhUsjlsyIj0n1xTS5zSRUP3tXbXGjwje8bT7KyXa56tyERYO7oqM_t6ZzOk3NVouLhu1k-m2KLTcTkhkOBa475DFvMCdplLNfEOy1UDZv6Fqjez563kx38ccFmNU-WGba3GmqdN-Oy_TU5r2apnKWZLWQ',
    alt: 'Oud Impérial luxury extrait de parfum',
    price: 360,
    concentration: 'Extrait de Parfum',
    percent: 30,
    size: 100,
    family: 'Woody & Resinous',
    badge: 'Bestseller',
    note: 'Wild Cambodian Agarwood, Smoked Benzoin, Atlas Cedarwood, and Black Cistus Labdanum.',
    footer: 'Woody • Smoky • Opulent',
  },
  {
    id: 10,
    name: 'Creed Aventuse',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAJ3CyZtQKonEtX8tHMcg_4PVvPsqZ5yEU0z_5uRZTt7KydsFxXMZBDEkW_6sly-ipOE3gxX5eqjSgNGql3NGz3oDlXVt430C7Qsztjjvbu_Quzhe1oLynJqQVWRfcYPDVnReJwuznP-LWBivOz1jeHMFgyPLwjW_pwyvVYOwIMm3nBZQY5vOu-ftertj5F0_-o1zr9Ra7MSZNwDU_H-wQxV2lw3xg21NzPyOVkRJ68B6n5Gwv9zchBLw',
    alt: 'Creed Aventus',
    price: 320,
    concentration: 'Eau de Parfum',
    percent: 20,
    size: 100,
    family: 'Floral Soliflore',
    badge: 'New Harvest',
    note: 'Centifolia Rose of May, Saffron Filament, Sunlit Ambergris, and Golden Beeswax.',
    footer: 'Solar Floral • Spicy Amber',
  },
];
