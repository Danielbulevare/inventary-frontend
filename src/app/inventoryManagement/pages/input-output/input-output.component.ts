import { Component } from '@angular/core';
import { FormInputOutputComponent } from '../../components/form-input-output/form-input-output.component';
import { DetailFormComponent } from '../../components/detail-form/detail-form.component';

@Component({
  selector: 'app-input-output',
  standalone: true,
  imports: [FormInputOutputComponent, DetailFormComponent],
  templateUrl: './input-output.component.html',
  styleUrl: './input-output.component.css',
})
export default class InputOutputComponent {}
