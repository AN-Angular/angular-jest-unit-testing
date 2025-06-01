import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface ProductResponse {
  limit: number;
  products: any;
  skip: number;
  total: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {

  }

  getProductList() {
    return this.http.get<ProductResponse>(this.url);
  }

  // for using datatype with interface
  // getProductList(): Observable<Product[]> {
  //   return this.http.get<Product[]>(this.url);  
  // }
}
