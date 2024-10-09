import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  register(userData: UserSignUpInfo): Observable<any> {
    return this.http.post('http://localhost:5238/api/register/', userData);
  }

  login(userData: UserLoginInfo): Observable<any> {
    return this.http.post('http://localhost:5238/api/login/', userData);
  }
}

export interface UserSignUpInfo {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface UserLoginInfo {
  email: string;
  password: string;
}
