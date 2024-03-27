import { Injectable, Provider } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { Router } from '@angular/router';
import { ErrorService } from './core/error/error.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    private errorService: ErrorService) {}

  intercept(
    request: HttpRequest<unknown>, 
    next: HttpHandler): Observable<HttpEvent<unknown>> {

      request = request.clone({
        withCredentials: true
      })

    return next.handle(request).pipe(
      catchError((error) => {
          this.errorService.handleError(error);
          this.router.navigate(['/error'])
      
        return [error];
      })
    );
  }
}

export const authInterceptorProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
}
