import { Component } from '@angular/core';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { Product, Products } from '../../shared/data/products';

@Component({
  selector: 'app-trash',
  imports: [ProductCardComponent],
  templateUrl: './trash.component.html',
  styleUrl: './trash.component.css',
})
export class TrashComponent {
  Products: Product[] = Products;
}
