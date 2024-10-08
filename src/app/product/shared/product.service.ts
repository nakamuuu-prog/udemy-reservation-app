import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}

  private apiUrl = 'http://localhost:5238/api/products';

  getProducts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getProductById(productId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${productId}`);
  }
}
