import { Injectable } from '@angular/core';
import { Role } from '../../models/roles/Role';
import { Status } from '../../models/estatus/status';

@Injectable({
  providedIn: 'root',
})
export class UserDataServiceService {
  private id: Number = 0;
  private name: string = '';
  private role: Role = { id: 0, role: '' };
  private status: Status = { id: 0, status: '' };

  constructor() {}

  updateUserData() {
    //Este método recupera el payload del token para actualizar los datos del usuario

    const token = localStorage.getItem('authToken') || ''; //Recupera el token
    const payload = JSON.parse(atob(token.split('.')[1])); //Obtenemos el payload del token

    //Asignamos los datos del usuario a las propiedades de la clase
    this.id = payload.idEmployee;
    this.name = payload.nameEmployee;
    this.role = payload.roleEmployee;
    this.status = payload.statusEmployee;
  }

  get getId(): Number {
    return this.id;
  }

  get getName(): string {
    return this.name;
  }

  get getRole(): Role {
    return this.role;
  }

  get getStatus(): Status {
    return this.status;
  }
}
