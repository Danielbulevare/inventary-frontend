import { Component, inject, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PopPutComponent } from '../../../Shared/components/pop-put/pop-put.component';
import { DetailFormComponent } from '../detail-form/detail-form.component';
import { TransactionServiceService } from '../../../core/services/transactions/transaction-service.service';
import { Transaction } from '../../../core/models/transactions/Transaction';
import { ProductWithId } from '../../../core/models/products/product-with-id';
import { Employee } from '../../../core/models/employees/Employee';
import { UserDataServiceService } from '../../../core/services/user-data/user-data-service.service';
import { Movements } from '../../enums/Movements';
import { ProductsServiceService } from '../../../core/services/products/products-service.service';

@Component({
  selector: 'app-form-input-output',
  standalone: true,
  imports: [
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    DetailFormComponent,
  ],
  templateUrl: './form-input-output.component.html',
  styleUrl: './form-input-output.component.css',
})
export class FormInputOutputComponent implements OnInit {
  private _snackBar = inject(MatSnackBar);
  private transactionsService = inject(TransactionServiceService);
  private productsService = inject(ProductsServiceService);
  private userDataService = inject(UserDataServiceService);

  private product: ProductWithId = new ProductWithId();
  private employee: Employee = new Employee();

  durationInSeconds = 5; //Duración de visualización del pop-put
  hiddenButton: boolean = false;
  quantityInventory: Number = 0;

  inputOutputForm = new FormGroup({
    idProduct: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
    ]),
    quantity: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
    ]),
    move: new FormControl('1'),
  });

  ngOnInit(): void {
    this.move.disable(); //Desactiva la entrada, ya que el valor se pondra dependiendo el rol

    //Verifica el rol del usuario para dejar predeterminado el tipo de movimiento
    switch (this.userDataService.getRole.role) {
      case 'Administrador':
        this.move.setValue('1'); //ENTRADA
        break;
      case 'General':
        this.move.setValue('2'); //SALIDA
        break;
    }
  }

  get idProduct() {
    return this.inputOutputForm.get('idProduct') as FormControl;
  }

  get quantity() {
    return this.inputOutputForm.get('quantity') as FormControl;
  }

  get move() {
    return this.inputOutputForm.get('move') as FormControl;
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

  saveTransactionMovement() {
    /*
    Este método se encarga de crear los objetos necesarios para construir el objeto transacction
    y mandarlo al servicio para registrarlo en la BD
    */

    let transaction: Transaction = new Transaction();

    this.product.id = parseInt(this.idProduct.value || '0');

    this.employee.id = this.userDataService.getId;
    this.employee.status = this.userDataService.getStatus;
    this.employee.role = this.userDataService.getRole;

    transaction.employee = this.employee;

    let moveTrsaction = parseInt(this.move.value || '0');
    let total = parseInt(this.quantity.value || '0');

    //Verifica que tipo de movimiento fue seleccionado
    switch (moveTrsaction) {
      case 1:
        transaction.move = Movements.ENTRADA;
        break;
      case 2:
        transaction.move = Movements.SALIDA;
        total = -total; //Asigna el signo menos al ser una salida
        break;
    }

    transaction.product = this.product;
    transaction.quantity = total;

    this.transactionsService.saveMove(transaction).subscribe({
      next: (response: any) => {
        this.openSnackBar(
          `El movimiento fue registrado con el id ${response.id}.`,
          'assets/img/success.svg'
        );
        this.clearForm();
      },
      error: (response: any) => {
        this.openSnackBar(response.error.message, 'assets/img/cancel.svg');
        this.clearForm();
      },
    });
  }

  getStatusProduct() {
    /*
    Este método se encarga de buscar el producto y obtener su estatus para validar si mostrar
    el botón de guardar (si el estatus es Activo muestra el botón, si es Inactivo lo ocultará,
    si no existe, también lo ocultará)
    */

    if (isNaN(this.idProduct.value)) {
      /*
      Si no es número, oculta el botón y termina la función
      */
      this.hiddenButton = true;
      return;
    }

    let id = parseInt(this.idProduct.value || '0');

    if (id <= 0) {
      /*
      Si el id es menor o igual a cero, oculta el botón
      */
      this.hiddenButton = true;
      return;
    }

    this.productsService.searchProduct(id).subscribe({
      next: (response: any) => {
        if (response.status == 'Inactivo') {
          this.hiddenButton = true;
          this.openSnackBar(
            `El producto está inactivo, no puedes realizar movimientos.`,
            'assets/img/cancel.svg'
          );
        } else {
          this.hiddenButton = false;
        }
      },
      error: (response: any) => {
        this.hiddenButton = true;
        this.openSnackBar(response.error.message, 'assets/img/cancel.svg');
      },
    });
  }

  clearForm() {
    //Este método limpia el formulario
    this.idProduct.setValue('');
    this.quantity.setValue('');
    //this.move.setValue('1');
  }
}
