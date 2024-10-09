import { Component } from '@angular/core';
import { AuthService, UserLoginInfo } from '../shared/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  errors: string[] = [];

  constructor(private authService: AuthService, private router: Router) {}

  login(loginForm: NgForm) {
    const userLoginInfo = loginForm.value as UserLoginInfo;

    if (!this.validate(userLoginInfo)) return;

    this.authService.login(userLoginInfo).subscribe(
      (result) => {
        // this.router.navigate(['/']);
        console.log(result);
      },
      (err: HttpErrorResponse) => {
        this.errors = err.error;
      }
    );
  }

  private validate(userLoginInfo: UserLoginInfo): boolean {
    const clientErrors = [];
    if (!userLoginInfo.email) {
      clientErrors.push('Eメールは必須です。');
    }

    if (userLoginInfo.email.length > 60) {
      clientErrors.push('Eメールは最大60文字までです。');
    }

    if (!userLoginInfo.password) {
      clientErrors.push('パスワードは必須です。');
    }

    if (userLoginInfo.password.length < 6) {
      clientErrors.push('パスワードは6文字以上で入力してください。');
    }

    if (userLoginInfo.password.length > 30) {
      clientErrors.push('パスワードは最大30文字までです。');
    }

    this.errors = clientErrors;

    return this.errors.length === 0;
  }
}
