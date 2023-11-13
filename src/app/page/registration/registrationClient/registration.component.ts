import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { client } from 'src/app/model/client.model';
import { ServiceRegestrerService } from 'src/app/services/service-regestrer.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public clientForm!:FormGroup;
  constructor(private httpClient: HttpClient,private formBuilder:FormBuilder,private ServiceRegestrerService:ServiceRegestrerService,private router : Router){
    
  }
  ngOnInit() {
    this.clientForm=this.formBuilder.group({
      nom:this.formBuilder.control('',Validators.required),
      prenom:this.formBuilder.control('',Validators.required),
      telephone:this.formBuilder.control('',[Validators.required,Validators.max(99999999),Validators.min(10000000)]),
      email:this.formBuilder.control('',Validators.email),
      motDePasse:this.formBuilder.control('',Validators.required),
      avatar:this.formBuilder.control(''),
      ville:this.formBuilder.control('',Validators.required),
      adresse:this.formBuilder.control('',Validators.required)
    })
    
  }
  selectedFile!: File;

  message!: string;
  public onFileChanged(event:any) {
    //Select File
    this.selectedFile = event.target.files[0];
    alert(JSON.stringify(this.selectedFile))
  }
  saveClient(){
    let client:client=this.clientForm.value
    let selectedFile1: File=this.selectedFile
    let nom:String=client.nom
    this.ServiceRegestrerService.saveClinet(client,selectedFile1).subscribe({
      next : data=>{
        const uploadImageData = new FormData();
        uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
      
        //Make a call to the Spring Boot Application to save the image
        this.httpClient.post('http://localhost:8081/image/uploadClient', uploadImageData, { observe: 'response' })
          .subscribe((response) => {
            if (response.status === 200) {
              this.message = 'Image uploaded successfully';
            } else {
              this.message = 'Image not uploaded successfully';
            }
          }
          );
         
              
          this.router.navigateByUrl("/login")    
              }
              
          }
        )
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
