import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../../models/products/products';
import { TblProductsStock } from '../../interfaces/tbl-products-stock';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsServiceService {
  constructor(private httpClient: HttpClient) {}

  saveProduct(product: Products): Observable<any> {
    //Este método registra un producto en la BD
    return this.httpClient.post<Products>(
      `${environment.URL_BASE_PRODUCTS}/saveProduct`,
      product
    );
  }

  searchProduct(id: Number): Observable<any> {
    //Este método busca un producto en la BD
    return this.httpClient.get<any>(`${environment.URL_BASE_PRODUCTS}/findProductById/${id}`);
  }

  stockProduct(id: Number): Observable<any> {
    //Este método busca un producto y su existencia en la BD
    return this.httpClient.get<any>(`${environment.URL_BASE_PRODUCTS}/findProductStock/${id}`);
  }

  updateProduct(id: Number, product: Products): Observable<any> {
    //Este método actualiza un producto dentro de la BD
    return this.httpClient.put<any>(
      `${environment.URL_BASE_PRODUCTS}/updateProduct/${id}`,
      product
    );
  }

  getProductsExistence(IdStatus: string): Observable<TblProductsStock[]> {
    let id = parseInt(IdStatus);
    //Este método regresa una arreglo de los productos con su exostencia total filtrado por estatus
    return this.httpClient.get<TblProductsStock[]>(
      `${environment.URL_BASE_PRODUCTS}/findProductsWithQuantityFilteredByStatus/${id}`
    );
  }
}
