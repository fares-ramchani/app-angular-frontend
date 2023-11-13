import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { client } from '../model/client.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceRegestrerService {

  constructor(private http:HttpClient) { }
  public saveClinet(client:client,selectedFile1: File){

    return this.http.post<client>("http://localhost:8081/client/ajouterClient?selectedFile=",client);
  }
}
