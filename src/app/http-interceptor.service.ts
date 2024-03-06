import { Injectable } from '@angular/core';
import { HttpInterceptor,HttpEvent,HttpHandler,HttpRequest,HttpResponse,HttpErrorResponse } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { tap, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class HttpInterceptorService  implements HttpInterceptor{

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   console.log('Request URL: ', request.url);
    console.log('Request body: ', request.body);

    return next.handle(request).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          console.log('Response: ', event);
        }
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Error: ', error);
        return throwError(error);
      })
    );
  }
  
}
