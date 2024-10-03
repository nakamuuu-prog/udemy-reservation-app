import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../../products';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent {
  product: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const routerParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routerParams.get('productId'));

    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
  }
}
