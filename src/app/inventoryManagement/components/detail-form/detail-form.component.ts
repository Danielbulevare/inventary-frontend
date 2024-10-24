import {
  Component,
  inject,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PopPutComponent } from '../../../Shared/components/pop-put/pop-put.component';
import { ProductsServiceService } from '../../../core/services/products/products-service.service';

@Component({
  selector: 'app-detail-form',
  standalone: true,
  imports: [
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
  ],
  templateUrl: './detail-form.component.html',
  styleUrl: './detail-form.component.css',
})
export class DetailFormComponent implements OnChanges {
  private productsService = inject(ProductsServiceService);
  private _snackBar = inject(MatSnackBar);

  detailFormProduct = new FormGroup({
    nameProduct: new FormControl(''),
    existence: new FormControl(''),
  });

  durationInSeconds = 5; //Duración de visualización del pop-put

  @Input() idProduct: any;

  constructor() {
    // Desactiva el control
    this.detailFormProduct.get('nameProduct')?.disable();
    this.detailFormProduct.get('existence')?.disable();
  }
  ngOnChanges(changes: SimpleChanges): void {
    //Valida que se haya pasado un número entero y que sea mayor a cero (que el id sea de 1 en adelante)
    if (!isNaN(this.idProduct) && this.idProduct > 0) {
      this.getStockProduct();
    } else {
      this.clearForm();
    }
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

  getStockProduct() {
    //Este método recupera el nombre del producto junto con sus existencia total

    let id = parseInt(this.idProduct);

    this.productsService.stockProduct(id).subscribe({
      next: (response: any) => {
        this.detailFormProduct
          .get('nameProduct')
          ?.setValue(response.nameProduct); //Imprime el nombre
        this.detailFormProduct.get('existence')?.setValue(response.existence); //Imprime la cantidad
      },
      error: (response: any) => {
        this.openSnackBar(response.error.message, 'assets/img/cancel.svg');
        this.clearForm();
      },
    });
  }

  clearForm() {
    //Este método limpia el formulario
    this.detailFormProduct.get('nameProduct')?.setValue('');
    this.detailFormProduct.get('existence')?.setValue('');
  }
}
