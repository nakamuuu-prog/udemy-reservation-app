import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-listings/product-listings.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductComponent,
    children: [
      { path: '', component: ProductListComponent },
      // 商品詳細ページに遷移した時、商品IDがURLに表示されるようにする
      { path: ':productId', component: ProductDetailComponent },
    ],
  },
];

@NgModule({
  // Productのコンポーネントをモジュールでまとめる
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductDetailComponent,
  ],
  imports: [
    // forRoot(親)はルートディレクトリのapp-routing.module.tsに定義されている
    // ここではforChild(子)の子要素としてインポートする
    RouterModule.forChild(routes),
    // CommonModuleはngForやngIfが定義された共通モジュール
    // REFE: https://v17.angular.io/api/common/CommonModule
    CommonModule,
  ],
  providers: [],
  bootstrap: [],
})
export class ProductModule {}
