import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers = new HttpHeaders()
      .set('x-api-key', 'live_uXSnB1L4ziefCMybU3DAiuuDHqUlGTYLXulAo8V2NyUmb3xj2RCtm1WtoNee8UDy');

    const clonedRequest = req.clone({ headers });

    return next.handle(clonedRequest);
  }
}
