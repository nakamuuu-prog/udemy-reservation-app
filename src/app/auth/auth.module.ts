import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistarComponent } from './registar/registar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './shared/auth.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registar', component: RegistarComponent },
];

@NgModule({
  declarations: [RegistarComponent, LoginComponent],
  imports: [RouterModule.forChild(routes), CommonModule],
  providers: [AuthService],
  bootstrap: [],
})
export class AuthModule {}
