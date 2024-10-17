import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../Shared/components/header/header.component';

@Component({
  selector: 'app-inventory-management',
  standalone: true,
  imports: [RouterModule, HeaderComponent],
  templateUrl: './inventory-management.component.html',
  styleUrl: './inventory-management.component.css',
})
export default class InventoryManagementComponent {}
