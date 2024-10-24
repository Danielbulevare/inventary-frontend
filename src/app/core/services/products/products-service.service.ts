import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/products/Product';


@Injectable({
  providedIn: 'root',
})
export class ProductsServiceService {
  private baseURL: string = 'http://localhost:8080/api/productos';

  constructor(private httpClient: HttpClient) {}

  /*getProducById(): Observable<ProductById>{
    return this.httpClient.get<ProductById>(this.baseURL + '/findProductById'});
  }*/
  saveProduct(product: Product): Observable<any> {
    //Este método registra un producto en la BD
    return this.httpClient.post<Product>(
      `${this.baseURL}/saveProduct`,
      product
    );
  }

  searchProduct(id: Number): Observable<any> {
    //Este método busca un producto en la BD
    return this.httpClient.get<any>(`${this.baseURL}/findProductById/${id}`);
  }

  stockProduct(id: Number): Observable<any> {
    //Este método busca un producto y su existencia en la BD
    return this.httpClient.get<any>(`${this.baseURL}/findProductStock/${id}`);
  }

  updateProduct(id: Number, product: Product): Observable<any> {
    //Este método actualiza un producto dentro de la BD
    return this.httpClient.put<any>(
      `${this.baseURL}/updateProduct/${id}`,
      product
    );
  }
}
