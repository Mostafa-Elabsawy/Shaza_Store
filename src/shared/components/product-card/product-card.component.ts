import { Component, input, model, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../data/products';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {
  product = input.required<Product>();
  compact = input(false);
  wishlisted = model(false);

  quickAdd = output<string>();
  wishlistToggle = output<Product>();

  toggleWishlist() {
    this.wishlisted.update((v) => !v);
    this.wishlistToggle.emit(this.product());
  }
}
