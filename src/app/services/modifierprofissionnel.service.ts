import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { profissionnel } from '../model/profissionnel.model';

@Injectable({
  providedIn: 'root'
})
export class ModifierprofissionnelService {

  constructor(private http:HttpClient) { }
  public modifierProfissinnel(profissionnel:profissionnel){

    return this.http.put<profissionnel>("http://localhost:8081/profissionnel/modifierprofissionnel",profissionnel);
  }
}
