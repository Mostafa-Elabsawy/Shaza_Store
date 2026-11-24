import { Component } from '@angular/core';
import {
  Product2,
  ProductCard2Component,
  Products2,
} from '../../shared/components/product-card2/product-card2.component';
import {
  Product,
  ProductCardComponent,
  products,
} from '../../shared/components/product-card/product-card.component';

@Component({
  selector: 'app-trash',
  imports: [ProductCardComponent, ProductCard2Component],
  templateUrl: './trash.component.html',
  styleUrl: './trash.component.css',
})
export class TrashComponent {
  Products2: Product2[] = Products2;
  Products: Product[] = products;
}
