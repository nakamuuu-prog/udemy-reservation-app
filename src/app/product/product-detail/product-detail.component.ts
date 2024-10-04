import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent {
  product: any;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    const routerParams = this.route.snapshot.paramMap;
    const productIdFromRoute = String(routerParams.get('productId'));
    const productsObservable =
      this.productService.getProductById(productIdFromRoute);
    productsObservable.subscribe(
      (data) => {
        this.product = data;
      },
      (err) => {
        console.error('something wrong occurred: ' + err);
      }
    );
  }
}
