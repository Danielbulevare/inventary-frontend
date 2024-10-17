import { Component, Output, EventEmitter } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  showMenu?: boolean; //Bandera para mostrar u ocultar la navegación

  //Evento que pasará el valor modificado de la abndera al componente padre
  @Output() openedChanged = new EventEmitter<boolean>();

  showNavigation() {
    this.showMenu = !this.showMenu; //Cambia el estado de la bandera

    //Pasa el nuevo valor al componente padre para mostrar u ocultar la navegación
    this.openedChanged.emit(this.showMenu);
  }
}
