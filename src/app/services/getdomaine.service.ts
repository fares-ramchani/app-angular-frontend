import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { domaine } from '../model/domaine.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetdomaineService {

  constructor(private http:HttpClient) { }
  public getDomainet():Observable<Array<domaine>>{
    return this.http.get<Array<domaine>>("http://localhost:8081/domaine/getToutDomaine");

  }
  public deleteDomaine(domaine :domaine){
    return this.http.delete<any>("http://localhost:8081/domaine/deleteDomaine?nom=" +domaine.nom);
  }
}
