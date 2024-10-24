import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../../models/products/products';
import { TblProductsStock } from '../../interfaces/tbl-products-stock';

@Injectable({
  providedIn: 'root',
})
export class ProductsServiceService {
  private baseURL: string = 'http://localhost:8080/api/productos';

  constructor(private httpClient: HttpClient) {}

  saveProduct(product: Products): Observable<any> {
    //Este método registra un producto en la BD
    return this.httpClient.post<Products>(
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

  updateProduct(id: Number, product: Products): Observable<any> {
    //Este método actualiza un producto dentro de la BD
    return this.httpClient.put<any>(
      `${this.baseURL}/updateProduct/${id}`,
      product
    );
  }

  getProductsExistence(IdStatus: string): Observable<TblProductsStock[]> {
    let id = parseInt(IdStatus);
    //Este método regresa una arreglo de los productos con su exostencia total filtrado por estatus
    return this.httpClient.get<TblProductsStock[]>(
      `${this.baseURL}/findProductsWithQuantityFilteredByStatus/${id}`
    );
  }
}
