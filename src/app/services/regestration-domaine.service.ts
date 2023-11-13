import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { domaine } from '../model/domaine.model';

@Injectable({
  providedIn: 'root'
})
export class RegestrationDomaineService {

  constructor(private http:HttpClient) { }
  public saveDomaine(domaine:domaine){
    return this.http.post<domaine>("http://localhost:8081/domaine/ajouterDomaine" ,domaine);
  }
}
