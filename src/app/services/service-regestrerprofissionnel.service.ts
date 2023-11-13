import { Injectable } from '@angular/core';
import { profissionnel } from '../model/profissionnel.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceRegestrerprofissionnelService {

  constructor(private http:HttpClient) { }
  public saveProfissionnel(profissionnel:profissionnel,selectedFile1: File){
    //Make a call to the Spring Boot Application to save the image
    return this.http.post<profissionnel>("http://localhost:8081/profissionnel/ajouterProfissionnel?selectedFile=" ,profissionnel);
  }
}