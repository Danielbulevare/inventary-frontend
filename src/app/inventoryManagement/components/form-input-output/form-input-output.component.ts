import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-form-input-output',
  standalone: true,
  imports: [
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
  ],
  templateUrl: './form-input-output.component.html',
  styleUrl: './form-input-output.component.css',
})
export class FormInputOutputComponent {
  idProduct = new FormControl('', [
    Validators.required,
    Validators.pattern('^[0-9]*$'),
  ]);
  quantity = new FormControl('', [
    Validators.required,
    Validators.pattern('^[0-9]*$'),
  ]);
  move = new FormControl('1');
}
