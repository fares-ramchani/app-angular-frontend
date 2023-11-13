import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceloginService } from '../services/servicelogin.service';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

  constructor( private serviseLogin:ServiceloginService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(!request.url.includes("/auth/login")
    &&!request.url.includes("/image/uploadClient")
    &&!request.url.includes("/profissionnel/ajouterProfissionnel")
    &&!request.url.includes("/image/upload")
    &&!request.url.includes("/image/get")
    &&!request.url.includes("/client/ajouterClient")
    &&!request.url.includes("/domaine/getToutDomaine")
     ){
      let newRequest = request.clone({
        headers : request.headers.set('Authorization','Bearer '+this.serviseLogin.accessToken)
      })
      return next.handle(newRequest);
    } else return next.handle(request);
    
  }
}