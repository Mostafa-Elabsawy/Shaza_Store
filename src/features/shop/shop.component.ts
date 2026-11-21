import { NgTemplateOutlet } from '@angular/common';
import { Component, HostListener, OnDestroy, WritableSignal, computed, effect, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

type SortId = 'featured' | 'price-desc' | 'price-asc' | 'harvest' | 'bestseller';

interface Product {
  id: number;
  name: string;
  concentration: 'Extrait de Parfum' | 'Eau de Parfum';
  percent: number;
  size: number;
  price: number;
  family: string;
  badge?: 'Bestseller' | 'New Harvest';
  note: string;
  footer: string;
  alt: string;
  image: string;
}

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [RouterLink, NgTemplateOutlet],
  templateUrl: './shop.component.html',
})
export class ShopComponent implements OnDestroy {
  readonly families = ['Woody & Resinous', 'Floral Soliflore', 'Amber & Balsamic', 'Oriental Cuir', 'Fresh Citrus & Herbaceous'];
  readonly concentrations = [
    { label: 'Extrait de Parfum (30%)', percent: 30 },
    { label: 'Eau de Parfum (20%)', percent: 20 },
  ];
  readonly sizes = [50, 100];
  readonly priceMin = 280;
  readonly priceMax = 450;

  products: Product[] = [
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
  ];

  // Filters
  selFamilies = signal<string[]>([]);
  selConcentrations = signal<number[]>([]);
  selSizes = signal<number[]>([]);
  maxPrice = signal(this.priceMax);
  sort = signal<SortId>('featured');

  // UI
  sheetOpen = signal(false);
  desktopCols = signal<3 | 4>(3);   // desktop sits next to the sidebar, so 3 is the better default
  mobileCols = signal<1 | 2>(2);
  toast = signal<string | null>(null);
  private toastTimer?: ReturnType<typeof setTimeout>;

  compact = computed(() => this.mobileCols() === 2);

  gridClass = computed(() => {
    const mobile = this.mobileCols() === 1 ? 'grid-cols-1' : 'grid-cols-2';
    const desktop = this.desktopCols() === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3';
    return `${mobile} ${desktop}`;
  });

  activeCount = computed(
    () =>
      this.selFamilies().length +
      this.selConcentrations().length +
      this.selSizes().length +
      (this.maxPrice() < this.priceMax ? 1 : 0),
  );

  filtered = computed(() => {
    const fam = this.selFamilies(), con = this.selConcentrations(), siz = this.selSizes(), max = this.maxPrice();
    const list = this.products.filter(p =>
      (!fam.length || fam.includes(p.family)) &&
      (!con.length || con.includes(p.percent)) &&
      (!siz.length || siz.includes(p.size)) &&
      p.price <= max);

    switch (this.sort()) {
      case 'price-desc': return [...list].sort((a, b) => b.price - a.price);
      case 'price-asc': return [...list].sort((a, b) => a.price - b.price);
      case 'harvest': return [...list].sort((a, b) => +(b.badge === 'New Harvest') - +(a.badge === 'New Harvest'));
      case 'bestseller': return [...list].sort((a, b) => +(b.badge === 'Bestseller') - +(a.badge === 'Bestseller'));
      default: return list;
    }
  });

  constructor() {
    // Lock page scroll while the bottom sheet is open
    effect(() => {
      if (typeof document === 'undefined') return;
      document.body.style.overflow = this.sheetOpen() ? 'hidden' : '';
    });
  }

  ngOnDestroy() {
    if (typeof document !== 'undefined') document.body.style.overflow = '';
    clearTimeout(this.toastTimer);
  }

  toggleIn<T>(sig: WritableSignal<T[]>, value: T) {
    sig.update(arr => (arr.includes(value) ? arr.filter(v => v !== value) : [...arr, value]));
  }

  resetFilters() {
    this.selFamilies.set([]);
    this.selConcentrations.set([]);
    this.selSizes.set([]);
    this.maxPrice.set(this.priceMax);
  }

  onSort(e: Event) { this.sort.set((e.target as HTMLSelectElement).value as SortId); }
  onPrice(e: Event) { this.maxPrice.set(+(e.target as HTMLInputElement).value); }

  quickAdd(name: string) {
    this.toast.set(name);
    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => this.toast.set(null), 3200);
  }

  @HostListener('document:keydown.escape')
  onEscape() { this.sheetOpen.set(false); }

  @HostListener('window:resize')
  onResize() {
    // Close the sheet if the screen grows into the desktop layout
    if (window.innerWidth >= 1024 && this.sheetOpen()) this.sheetOpen.set(false);
  }
}