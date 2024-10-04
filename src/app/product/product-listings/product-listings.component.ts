import { Component } from '@angular/core';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-listings',
  templateUrl: './product-listings.component.html',
  styleUrl: './product-listings.component.scss',
})
export class ProductListComponent {
  products: any;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    const productsObservable = this.productService.getProducts();
    productsObservable.subscribe(
      (data) => {
        this.products = data;
      },
      (err) => {
        console.error('something wrong occurred: ' + err);
      }
    );
  }
}
