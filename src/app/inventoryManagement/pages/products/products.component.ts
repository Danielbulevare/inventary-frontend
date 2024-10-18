import { Component } from '@angular/core';
import { FormComponent } from './components/form/form.component';
import { ActionButtonsComponent } from './components/action-buttons/action-buttons.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FormComponent, ActionButtonsComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export default class ProductsComponent {}
