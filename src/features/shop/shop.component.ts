import { Component, HostListener, OnDestroy, computed, effect, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { Products } from '../../shared/data/products';
import { FilterComponent, FILTER_PRICE_MAX } from './filter/filter.component';

type SortId = 'featured' | 'price-desc' | 'price-asc' | 'harvest' | 'bestseller';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [NgClass, RouterLink, ProductCardComponent, FilterComponent],
  templateUrl: './shop.component.html',
})
export class ShopComponent implements OnDestroy {
  readonly products = Products;

  // Filters
  selFamilies = signal<string[]>([]);
  selConcentrations = signal<number[]>([]);
  selSizes = signal<number[]>([]);
  maxPrice = signal(FILTER_PRICE_MAX);
  sort = signal<SortId>('featured');

  // UI
  sheetOpen = signal(false);
  mobileCols = signal<1 | 2>(1);
  desktopCols = signal<3 | 4>(3); // desktop sits next to the sidebar, so 3 is the better default
  toast = signal<string | null>(null);
  private toastTimer?: ReturnType<typeof setTimeout>;

  compact = computed(() => this.desktopCols() === 4);
  private readonly MOBILE_GRID = {
    1: 'max-md:grid-cols-1',
    2: 'max-md:grid-cols-2',
  } as const;

  private readonly DESKTOP_GRID = {
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
  } as const;
  gridClass = computed<string[]>(() =>  [`${this.DESKTOP_GRID[this.desktopCols()]}` ,`${this.MOBILE_GRID[this.mobileCols()]}`]   );

  activeCount = computed(
    () =>
      this.selFamilies().length +
      this.selConcentrations().length +
      this.selSizes().length +
      (this.maxPrice() < FILTER_PRICE_MAX ? 1 : 0),
  );

  filtered = computed(() => {
    const fam = this.selFamilies(),
      con = this.selConcentrations(),
      siz = this.selSizes(),
      max = this.maxPrice();
    const list = this.products.filter(
      (p) =>
        (!fam.length || fam.includes(p.family)) &&
        (!con.length || con.includes(p.percent)) &&
        (!siz.length || siz.includes(p.size)) &&
        p.price <= max,
    );

    switch (this.sort()) {
      case 'price-desc':
        return [...list].sort((a, b) => b.price - a.price);
      case 'price-asc':
        return [...list].sort((a, b) => a.price - b.price);
      case 'harvest':
        return [...list].sort(
          (a, b) => +(b.badge === 'New Harvest') - +(a.badge === 'New Harvest'),
        );
      case 'bestseller':
        return [...list].sort((a, b) => +(b.badge === 'Bestseller') - +(a.badge === 'Bestseller'));
      default:
        return list;
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

  resetFilters() {
    this.selFamilies.set([]);
    this.selConcentrations.set([]);
    this.selSizes.set([]);
    this.maxPrice.set(FILTER_PRICE_MAX);
  }

  onSort(e: Event) {
    this.sort.set((e.target as HTMLSelectElement).value as SortId);
  }

  quickAdd(name: string) {
    this.toast.set(name);
    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => this.toast.set(null), 3200);
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    this.sheetOpen.set(false);
  }

  @HostListener('window:resize')
  onResize() {
    // Close the sheet if the screen grows into the desktop layout
    if (window.innerWidth >= 1024 && this.sheetOpen()) this.sheetOpen.set(false);
  }
}
