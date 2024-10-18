import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-detail-form',
  standalone: true,
  imports: [
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
  ],
  templateUrl: './detail-form.component.html',
  styleUrl: './detail-form.component.css',
})
export class DetailFormComponent {
  form = new FormGroup({
    nameProduct: new FormControl(''),
    existence: new FormControl(''),
  });

  constructor() {
    // Desactiva el control
    this.form.get('nameProduct')?.disable();
    this.form.get('existence')?.disable();
  }
}
