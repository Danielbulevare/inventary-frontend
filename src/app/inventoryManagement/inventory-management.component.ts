import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../Shared/components/header/header.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MenuItemComponent } from './components/menu-item/menu-item.component';

@Component({
  selector: 'app-inventory-management',
  standalone: true,
  imports: [
    RouterModule,
    HeaderComponent,
    MatSidenavModule,
    MatCardModule,
    MenuItemComponent,
  ],
  templateUrl: './inventory-management.component.html',
  styleUrl: './inventory-management.component.css',
})
export default class InventoryManagementComponent {
  //Variable para mostrar u ocultar la navegación
  opened: boolean = false;
}
