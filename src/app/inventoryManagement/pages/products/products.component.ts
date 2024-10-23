import { Component } from '@angular/core';
import { FormComponent } from './components/form/form.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export default class ProductsComponent {}
