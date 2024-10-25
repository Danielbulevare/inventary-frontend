import { Movements } from '../../../inventoryManagement/enums/Movements';
import { Employee } from '../employees/Employee';
import { ProductWithId } from '../products/product-with-id';

export class Transaction {
  quantity: Number = 0;
  move: Movements = Movements.ENTRADA;
  dateWithoutTime: string = new Date().toLocaleDateString('en-CA'); //Recupera la fecha en mi zona horaria, pero con el formato YYYY-MM-dd
  dateWithTime: string = this.getFormattedDateTime(new Date());
  employee: Employee = {
    id: 0,
    mail: '',
    name: '',
    password: '',
    role: { id: 0, role: '' },
    status: { id: 0, status: '' },
  };
  product: ProductWithId = { id: 0, name: '', status: { id: 0, status: '' } };

  // Método para formatear la fecha
  private getFormattedDateTime(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Meses de 0 a 11, por eso sumamos 1
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
  }
}
