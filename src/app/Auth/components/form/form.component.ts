import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  formLogin = new FormGroup({
    'mail': new FormControl('', [Validators.required, Validators.email]),
    'password': new FormControl('', Validators.required)
  });

  get mail(){
    //as FormControl evita que pongamos un ? antes de ?.value, ?.hasError, etc.
    return this.formLogin.get('mail') as FormControl;
  }

  get password(){
    return this.formLogin.get('password') as FormControl;
  }

  showPassword = true;

  constructor(private AuthService: AuthService, private router: Router) {}

  login(): void {
    this.AuthService.login(this.formLogin.get('mail')?.value, this.formLogin.get('password')?.value).subscribe({
      next: () => this.router.navigate(['/inventory-management/products']),
      error: (err) => alert('Fallo el login: ' + err),
    });
  }
}
