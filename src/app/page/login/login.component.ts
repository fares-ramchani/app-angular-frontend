import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { ServiceloginService } from 'src/app/services/servicelogin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formLogin!:FormGroup;
  message :any=localStorage.getItem('message')
  
  constructor (private httpClient: HttpClient,private fb : FormBuilder ,private ServiceloginService : ServiceloginService,private router : Router){
    
  }
  ngOnInit(): void {
    this.formLogin=this.fb.group({
      username :this.fb.control('',Validators.required),
      password:this.fb.control('',Validators.required)
    })
    
  }
  selectedFile!: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;

  imageName1: any;
  login1(){
    let username=this.formLogin.value.username;
    let pwd=this.formLogin.value.password;
    this.ServiceloginService.login(username,pwd).subscribe({
      next : data=> {
        
        this.ServiceloginService.loadProfile(data)
        localStorage.setItem('username',this.ServiceloginService.username)
        if (this.ServiceloginService.role=="CLIENT"){
          this.imageName1=this.formLogin.value.username;
              this.httpClient.get<any>('http://localhost:8081/image/get?imageName='+ this.imageName1)
                .subscribe({next : data => {
                  this.retrieveResonse = data;
                  this.base64Data = this.retrieveResonse.picByte;
                  this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
                  localStorage.setItem('retrievedImage','data:image/jpeg;base64,' + this.base64Data)
        
          this.router.navigateByUrl("/profilClinet")
        }}
        );
        
        }else if((this.ServiceloginService.role=="PROFISSIONNEL")){
              this.imageName1=this.formLogin.value.username;
              this.httpClient.get<any>('http://localhost:8081/image/get?imageName='+ this.imageName1)
                .subscribe({next : data => {
                  this.retrieveResonse = data;
                  this.base64Data = this.retrieveResonse.picByte;
                  this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
                  localStorage.setItem('retrievedImage','data:image/jpeg;base64,' + this.base64Data)
                  this.router.navigateByUrl("/profilProfissionnel")
                }}
              );
              
              
            }else if((this.ServiceloginService.role=="ADMIN CLIENT")){
          this.router.navigateByUrl("/Homeadmin/GestionclienteComponent")
          
          
        }
        }
      

        
      })
      

  }
  getErrorsMessage(arg0: string,error: any):string {
    if(error['required']){
      return arg0+ " obligatoir";
    }else if(error['email']){
      return "email invalid"
    }
    else if(error['min']){
      return  "telephone invalid"
    }
    else if(error['max']){
      return  "telephone invalid"
    }
    else return "";
    
  
  }
}

  