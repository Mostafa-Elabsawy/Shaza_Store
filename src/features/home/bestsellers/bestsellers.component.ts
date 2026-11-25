import { Component, ElementRef, signal, viewChild } from '@angular/core';
import { ProductCardComponent } from '../../../shared/components/product-card/product-card.component';
import { Products } from '../../../shared/data/products';

@Component({
  selector: 'app-bestsellers',
  imports: [ProductCardComponent],
  templateUrl: './bestsellers.component.html',
  styleUrl: './bestsellers.component.css',
})
export class BestsellersComponent {
  products = [...Products, ...Products, ...Products];
  track = viewChild.required<ElementRef<HTMLElement>>('track');

  canPrev = signal(false);
  canNext = signal(true);

  ngAfterViewInit() {
    // wait a tick so the slides have rendered
    setTimeout(() => this.updateButtons());
  }

  scroll(direction: 1 | -1) {
    const el = this.track().nativeElement;
    const card = el.firstElementChild as HTMLElement;
    if (!card) return;
    el.scrollBy({ left: direction * card.offsetWidth, behavior: 'smooth' });
  }

  updateButtons() {
    const el = this.track().nativeElement;
    if (!el) return;
    this.canPrev.set(el.scrollLeft > 4);
    this.canNext.set(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }
}
