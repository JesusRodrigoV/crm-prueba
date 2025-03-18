import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product';

@Component({
  selector: 'app-products',
  imports: [AsyncPipe, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProductsComponent {
  private productService = inject(ProductService);
  products$ = this.productService.getProducts();
}
