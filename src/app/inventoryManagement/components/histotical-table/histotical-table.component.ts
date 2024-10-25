import {
  Component,
  inject,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { TransactionServiceService } from '../../../core/services/transactions/transaction-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PopPutComponent } from '../../../Shared/components/pop-put/pop-put.component';
import { TblTransactionInventory } from '../../../core/interfaces/tbl-transactionInventory';

@Component({
  selector: 'app-histotical-table',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './histotical-table.component.html',
  styleUrl: './histotical-table.component.css',
})
export class HistoticalTableComponent implements OnChanges {
  private transactionsService = inject(TransactionServiceService);
  private _snackBar = inject(MatSnackBar);

  durationInSeconds = 5; //Duración de visualización del pop-put

  displayedColumns: string[] = [
    'idProduct',
    'nameProduct',
    'move',
    'quantity',
    'dateWithoutTime',
    'dateWithTime',
    'employeeName',
  ];
  dataSource: TblTransactionInventory[] = [];

  @Input() moveSelect: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    //Este método invoca al servicio para mandar llamar a los productos filtrados por el tipo de movimiento

    let moveValue: string = '';

    switch (this.moveSelect) {
      case '1':
        moveValue = 'ENTRADA';
        break;
      case '2':
        moveValue = 'SALIDA';
        break;
    }

    this.transactionsService
      .getTransactionsInventoryByMoveType(moveValue)
      .subscribe({
        next: (response: TblTransactionInventory[]) => {
          this.dataSource = response; //Llena la tabla con los datos que regresa la api

          if (response.length === 0) {
            this.openSnackBar(
              `No se encontraron productos con el tipo de movimiento seleccionado.`,
              'assets/img/success.svg'
            );
          }
        },
        error: (response: any) => {
          this.openSnackBar(response.error.message, 'assets/img/cancel.svg');
        },
      });
  }

  openSnackBar(message: string, img: string) {
    /*
    Este método se encarga de mostrar el componente pop-put por un límite de tiempo
    */
    this._snackBar.openFromComponent(PopPutComponent, {
      duration: this.durationInSeconds * 1000,
      data: {
        message: message,
        img: img,
      },
    });
  }
}
