import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { profissionnel } from '../model/profissionnel.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceloginService {

  isAuthenticated : boolean=false;
  role : any;
  username : any;
  accessToken!:string;
  message!:string;

  constructor(private http:HttpClient) { }
  public login(username : string, password : string){
    let options={
      headers : new HttpHeaders().set("Content-Type","application/x-www-form-urlencoded")
    }
    let params =new HttpParams().set("username",username).set("password",password);
return this.http.post("http://localhost:8081/auth/login", params, options)
  }
  loadProfile(data : any){
    this.isAuthenticated=true;
    this.accessToken=data['access-token'];
    localStorage.setItem('message',data['access-token']);
    let decodedJwt:any = jwtDecode(this.accessToken);
    this.username=decodedJwt.sub;
    this.role=decodedJwt.scope;

  }
 
  public getAvatar(username: String){
    return this.http.get<String>("http://localhost:8081/profissionnel/getAvatar?nom=" +username);
  }
  logout(){
   this.isAuthenticated=false;
  this.role =undefined;
  this.username =undefined;
  this.accessToken="";

  }
}