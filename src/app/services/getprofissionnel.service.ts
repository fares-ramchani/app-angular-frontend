import { Injectable } from '@angular/core';
import { profissionnel } from '../model/profissionnel.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class GetprofissionnelService {

  constructor(private http:HttpClient) { }
  public getProfissionnel():Observable<Array<profissionnel>>{
    return this.http.get<Array<profissionnel>>("http://localhost:8081/profissionnel/getToutProfissionel");
  }
  public deleteprofissionnel(profissionnel :profissionnel){
    return this.http.delete<any>("http://localhost:8081/profissionnel/deleteprofissionel?nom=" +profissionnel.nom);
  }
}
