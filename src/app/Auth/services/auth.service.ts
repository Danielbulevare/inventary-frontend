import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private LOGIN_URL: string =
    'http://localhost:8080/api/empleados/authenticate';
  private tokenKey: string = 'authToken';

  constructor(private httpClien: HttpClient, private router: Router) {}

  login(mail: string | null | undefined, password: string | null | undefined): Observable<any> {
    return this.httpClien.post<any>(this.LOGIN_URL, { mail, password }).pipe(
      /*
      tap, para interceptar la respuesta del servidor para realizar ciertas acciones, en este caso
      verifica si el servidor me envió en el payload el atributo o clave llamada 'token'
      */
      tap((response) => {
        //Verifica que la respuesta del servidor me haaya regresado un payload con el nombre 'token'
        if (response.token) {
          this.setToken(response.token);
        }
      })
    );
  }

  private setToken(token: string): void {
    //Este método almacena el token en el local storage
    localStorage.setItem(this.tokenKey, token);
  }

  private getToken(): string | null {
    //Recupera el token siempre y cuando sea diferente de undefined, para quitar el error de la consola
    if(typeof window !== 'undefined'){
      //Este método recupera el token desde el local storage
      return localStorage.getItem(this.tokenKey);
    }else{
      return null;
    }
  }

  isAuthenticated(): boolean {
    /*
   Este método valida que el usuario este está autenticado o no, validando el tiempo de
   expiración del token y si el token existe dentron de nuestro local storage
   */
    const token = this.getToken();

    //Si el token no existe, retorna false
    if (!token) {
      return false;
    }

    //Recupera el payload del token (el token está en base64, así que hay que decodificar con atob)
    const payload = JSON.parse(atob(token.split('.')[1])); //El payload está en la posición 1 del jwt
    const exp = payload.exp * 1000; //Recupera la fecha de expiración y la convertimos a milisegundos

    return Date.now() < exp; //Valida si la fecha actual es menor que la fecha de expiración
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/login']);
  }
}
