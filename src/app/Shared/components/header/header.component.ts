import { Component, Output, EventEmitter, inject, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { UserDataServiceService } from '../../../core/services/user-data/user-data-service.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule, MatTooltipModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  private userDataService = inject(UserDataServiceService);

  showMenu?: boolean; //Bandera para mostrar u ocultar la navegación
  showOptions?: boolean; //Bandera para mostrar u ocultar las opciones del menú
  nameEmployee: string = '';
  roleEmployee: string = '';

  //Evento que pasará el valor modificado de la bandera al componente padre
  @Output() openedChanged = new EventEmitter<boolean>();

  //Evento que pasará el valor modificado de la bandera al componente padre
  @Output() openMenuChanged = new EventEmitter<boolean>();

  ngOnInit(): void {
    this.userDataService.updateUserData(); //Invocamos este método para que muestre la info. del usuario en el header
    //Recupera los datos del usuario para imprimirlos
    this.nameEmployee = this.userDataService.getName;
    this.roleEmployee = this.userDataService.getRole.role;
  }

  showNavigation() {
    this.showMenu = !this.showMenu; //Cambia el estado de la bandera

    //Pasa el nuevo valor al componente padre para mostrar u ocultar la navegación
    this.openedChanged.emit(this.showMenu);
  }

  showMenuOptions() {
    this.showOptions = !this.showOptions;
    this.openMenuChanged.emit(this.showOptions);
  }
}
