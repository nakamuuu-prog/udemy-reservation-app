import { Component } from '@angular/core';
import { AuthService, UserSignUpInfo } from '../shared/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registar',
  templateUrl: './registar.component.html',
  styleUrl: './registar.component.scss',
})
export class RegistarComponent {
  errors: string[] = [];

  constructor(private authService: AuthService, private router: Router) {}

  register(registarForm: NgForm) {
    const userSignUpInfo = registarForm.value as UserSignUpInfo;

    if (!this.validate(userSignUpInfo)) return;

    this.authService.register(userSignUpInfo).subscribe(
      (result) => {
        this.router.navigate(['/login']);
      },
      (err: HttpErrorResponse) => {
        this.errors = err.error;
      }
    );
  }

  private validate(userSignUpInfo: UserSignUpInfo): boolean {
    const clientErrors = [];
    if (!userSignUpInfo.userName) {
      clientErrors.push('ユーザー名は必須です。');
    }

    if (userSignUpInfo.userName.length > 60) {
      clientErrors.push('ユーザー名は最大60文字までです。');
    }

    if (!userSignUpInfo.email) {
      clientErrors.push('Eメールは必須です。');
    }

    if (userSignUpInfo.email.length > 60) {
      clientErrors.push('Eメールは最大60文字までです。');
    }

    if (!userSignUpInfo.password) {
      clientErrors.push('パスワードは必須です。');
    }

    if (userSignUpInfo.password.length < 6) {
      clientErrors.push('パスワードは6文字以上で入力してください。');
    }

    if (userSignUpInfo.password.length > 30) {
      clientErrors.push('パスワードは最大30文字までです。');
    }

    if (!userSignUpInfo.confirmPassword) {
      clientErrors.push('パスワード（確認）は必須です。');
    }

    if (userSignUpInfo.password !== userSignUpInfo.confirmPassword) {
      clientErrors.push('パスワードとパスワード（確認）が一致しません。');
    }

    this.errors = clientErrors;

    return this.errors.length === 0;
  }
}
