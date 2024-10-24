import {
  Component,
  inject,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { TblProductsStock } from '../../../core/interfaces/tbl-products-stock';
import { ProductsServiceService } from '../../../core/services/products/products-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PopPutComponent } from '../../../Shared/components/pop-put/pop-put.component';

@Component({
  selector: 'app-stock-table',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './stock-table.component.html',
  styleUrl: './stock-table.component.css',
})
export class StockTableComponent implements OnChanges {
  private productsService = inject(ProductsServiceService);
  private _snackBar = inject(MatSnackBar);

  displayedColumns: string[] = [
    'idProduct',
    'nameProduct',
    'existence',
    'status',
  ];
  //dataSource = ELEMENT_DATA;
  dataSource: TblProductsStock[] = [];
  durationInSeconds = 5; //Duración de visualización del pop-put

  @Input() statusSelect: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    //Este método incoca al servicio para mandar llaamar a los productos filtrados por el estatus

    this.productsService.getProductsExistence(this.statusSelect).subscribe({
      next: (response: TblProductsStock[]) => {
        this.dataSource = response; //Llena la tabla con losa satos que regresa la api

        if (response.length === 0) {
          this.openSnackBar(
            `No se encontraron productos con el estatus seleccionado que tengan existencias.`,
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
