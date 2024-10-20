import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HeaderComponent } from '../Shared/components/header/header.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { AuthService } from '../Auth/services/auth.service';

@Component({
  selector: 'app-inventory-management',
  standalone: true,
  imports: [
    RouterModule,
    HeaderComponent,
    MatSidenavModule,
    MatCardModule,
    MenuItemComponent,
    MatDividerModule,
    MatListModule,
  ],
  templateUrl: './inventory-management.component.html',
  styleUrl: './inventory-management.component.css',
})
export default class InventoryManagementComponent {
  //Variable para mostrar u ocultar la navegación
  opened: boolean = false;
  openMenu: boolean = false;

  constructor(private AuthService: AuthService, private router: Router) {}

  logout(): void {
    this.AuthService.logout();
  }
}
