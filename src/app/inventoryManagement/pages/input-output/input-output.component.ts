import { Component } from '@angular/core';
import { FormInputOutputComponent } from '../../components/form-input-output/form-input-output.component';

@Component({
  selector: 'app-input-output',
  standalone: true,
  imports: [FormInputOutputComponent],
  templateUrl: './input-output.component.html',
  styleUrl: './input-output.component.css',
})
export default class InputOutputComponent {}
