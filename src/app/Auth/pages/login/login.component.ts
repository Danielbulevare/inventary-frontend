import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormComponent } from '../../components/form/form.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, FormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export default class LoginComponent {}
