import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transaction } from '../../models/transactions/Transaction';
import { Observable } from 'rxjs';
import { TblTransactionInventory } from '../../interfaces/tbl-transactionInventory';

@Injectable({
  providedIn: 'root',
})
export class TransactionServiceService {
  private baseURL: string =
    'http://localhost:8080/api/transacciones-inventario';

  constructor(private httpClient: HttpClient) {}

  saveMove(trasaction: Transaction): Observable<any> {
    //Este método registra una transaccion de entrada o salida en la BD
    return this.httpClient.post<any>(
      `${this.baseURL}/transaccionInventarioRepository`,
      trasaction
    );
  }

  getTransactionsInventoryByMoveType(moveType: string): Observable<TblTransactionInventory[]> {
    //Este método regresa una arreglo de los productos con su exostencia total filtrado por estatus
    return this.httpClient.get<TblTransactionInventory[]>(
      `${this.baseURL}/findProductsByMoveType/${moveType}`
    );
  }
}
