import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductModule } from './product/product.module';

const routes: Routes = [
  // TOPページに遷移すると真っ白なので、productsのページにリダイレクトされるようにする
  { path: '', redirectTo: 'products', pathMatch: 'full' },
];

@NgModule({
  // Productの各コンポーネントをインポートしていたが、ProductModuleとして1つにまとめたものをインポートする
  // そうすることでProductModule内で定義されたコンポーネントやルーティングが正常に動作するようになる
  imports: [RouterModule.forRoot(routes), ProductModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
