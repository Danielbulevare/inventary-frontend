import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transaction } from '../../models/transactions/Transaction';
import { Observable } from 'rxjs';
import { TblTransactionInventory } from '../../interfaces/tbl-transactionInventory';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TransactionServiceService {
  constructor(private httpClient: HttpClient) {}

  saveMove(trasaction: Transaction): Observable<any> {
    //Este método registra una transaccion de entrada o salida en la BD
    return this.httpClient.post<any>(
      `${environment.URL_BASE_TRANSACTIONS}/transaccionInventarioRepository`,
      trasaction
    );
  }

  getTransactionsInventoryByMoveType(moveType: string): Observable<TblTransactionInventory[]> {
    //Este método regresa una arreglo de los productos con su exostencia total filtrado por estatus
    return this.httpClient.get<TblTransactionInventory[]>(
      `${environment.URL_BASE_TRANSACTIONS}/findProductsByMoveType/${moveType}`
    );
  }
}
