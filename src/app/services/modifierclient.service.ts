import { Injectable } from '@angular/core';
import { client } from '../model/client.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ModifierclientService {

  constructor(private http:HttpClient) { }
  public modifierClinet(client:client){

    return this.http.put<client>("http://localhost:8081/client/modifierClient",client);
  }
}
