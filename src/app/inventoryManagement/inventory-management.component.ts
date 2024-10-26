import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HeaderComponent } from '../Shared/components/header/header.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { AuthService } from '../Auth/services/auth.service';
import { Menu } from '../core/interfaces/menu';

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
  authService = inject(AuthService);

  //Variable para mostrar u ocultar la navegación
  opened: boolean = false;
  openMenu: boolean = false;

  //Establecemos todas las opciones del menú de navegación
  menuRole: Menu[] = [
    {
      link: '/inventory-management/products',
      img: 'assets/img/products.svg',
      option: 'Productos',
      rol: 'Administrador',
    },
    {
      link: '/inventory-management/stock',
      img: 'assets/img/inventory.svg',
      option: 'Stock',
      rol: 'Administrador',
    },
    {
      link: '/inventory-management/input-output',
      img: 'assets/img/input-output.svg',
      option: 'Entrada / Salida',
      rol: 'Administrador',
    },
    {
      link: '/inventory-management/historical',
      img: 'assets/img/historical.svg',
      option: 'Histórico',
      rol: 'Administrador',
    },
    {
      link: '/inventory-management/stock',
      img: 'assets/img/inventory.svg',
      option: 'Stock',
      rol: 'General',
    },
    {
      link: '/inventory-management/input-output',
      img: 'assets/img/input-output.svg',
      option: 'Entrada / Salida',
      rol: 'General',
    },
  ];

  constructor(private AuthService: AuthService, private router: Router) {}

  showOptionByRole(): Menu[] {
    /*
    Este método se encarga de filtrar las opciones del menú dependiendo del rol del usuario
    */
    return this.menuRole.filter(
      (item) => item.rol === this.authService.getRoleUser().role
    );
  }

  logout(): void {
    this.AuthService.logout();
  }
}
