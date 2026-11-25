import { NgTemplateOutlet } from '@angular/common';
import { Component, WritableSignal, computed, input, model, output } from '@angular/core';

export type FilterVariant = 'sidebar' | 'sheet';

export interface ConcentrationOption {
  label: string;
  percent: number;
}

export const FILTER_FAMILIES: readonly string[] = [
  'Woody & Resinous',
  'Floral Soliflore',
  'Amber & Balsamic',
  'Oriental Cuir',
  'Fresh Citrus & Herbaceous',
];

export const FILTER_CONCENTRATIONS: readonly ConcentrationOption[] = [
  { label: 'Extrait de Parfum (30%)', percent: 30 },
  { label: 'Eau de Parfum (20%)', percent: 20 },
];

export const FILTER_SIZES: readonly number[] = [50, 100];
export const FILTER_PRICE_MIN = 280;
export const FILTER_PRICE_MAX = 450;

@Component({
  selector: 'app-filter',
  imports: [NgTemplateOutlet],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent {
  // Chrome
  readonly variant = input<FilterVariant>('sidebar');
  readonly resultCount = input(0);

  // Option lists (owned by the filter)
  readonly families = FILTER_FAMILIES;
  readonly concentrations = FILTER_CONCENTRATIONS;
  readonly sizes = FILTER_SIZES;
  readonly priceMin = FILTER_PRICE_MIN;
  readonly priceMax = FILTER_PRICE_MAX;

  // Selection state (two-way, the shop's signals stay the source of truth)
  readonly selFamilies = model.required<string[]>();
  readonly selConcentrations = model.required<number[]>();
  readonly selSizes = model.required<number[]>();
  readonly maxPrice = model.required<number>();

  // Sheet-only events
  readonly close = output<void>();
  readonly apply = output<void>();

  readonly activeCount = computed(
    () =>
      this.selFamilies().length +
      this.selConcentrations().length +
      this.selSizes().length +
      (this.maxPrice() < this.priceMax ? 1 : 0),
  );

  toggleIn<T>(selection: WritableSignal<T[]>, value: T) {
    selection.update((arr) =>
      arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value],
    );
  }

  resetFilters() {
    this.selFamilies.set([]);
    this.selConcentrations.set([]);
    this.selSizes.set([]);
    this.maxPrice.set(this.priceMax);
  }

  onPrice(event: Event) {
    this.maxPrice.set(+(event.target as HTMLInputElement).value);
  }
}
