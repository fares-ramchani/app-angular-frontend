import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { client } from '../model/client.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class GetClientService {

  constructor(private http:HttpClient) { }
  public getClient():Observable<Array<client>>{
    return this.http.get<Array<client>>("http://localhost:8081/client/getToutClient");
  }
  public deleteClient(client :client){
    return this.http.delete<any>("http://localhost:8081/client/deleteClient?nom=" +client.nom);
  }
}
