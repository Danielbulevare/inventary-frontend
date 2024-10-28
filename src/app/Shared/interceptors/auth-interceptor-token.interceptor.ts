import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export const authInterceptorTokenInterceptor: HttpInterceptorFn = (
  req,
  next
) => {
  const token = localStorage.getItem('authToken'); //Obtiene el token del almacenamiento
  const loginUrl = `${environment.URL_BASE_EMPLOYEES}/authenticate`;

  if (req.url.includes(loginUrl)) {
    /*
    Si la solicitud es al login, no agregues el token, ya que de lo contrario fallará el endpoint
    al momento de que token ya haya expirado y queramos solicitar uno nuevo
    */
    return next(req);
  }


  if (token) {
    //Clona la solicitud y agrega el token a las cabeceras
    const clonedRequest = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` },
    });

    return next(clonedRequest); //Pasar la solicitud clonada
  }

  return next(req); //Pasa la solicitud original si no hay token
};
