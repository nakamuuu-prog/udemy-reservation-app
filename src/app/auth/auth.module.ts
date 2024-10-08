import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistarComponent } from './registar/registar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './shared/auth.service';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registar', component: RegistarComponent },
];

@NgModule({
  declarations: [RegistarComponent, LoginComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    // FormsModuleは入力欄などのフォーム用のモジュール
    // イントロダクションの部分は熟読した方がいい
    // REFE: https://v17.angular.io/guide/forms-overview
    FormsModule,
  ],
  providers: [AuthService],
  bootstrap: [],
})
export class AuthModule {}
