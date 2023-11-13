import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { domaine } from 'src/app/model/domaine.model';
import { profissionnel } from 'src/app/model/profissionnel.model';
import { GetdomaineService } from 'src/app/services/getdomaine.service';
import { ServiceRegestrerprofissionnelService } from 'src/app/services/service-regestrerprofissionnel.service';

@Component({
  selector: 'app-registrationprofissionnel',
  templateUrl: './registrationprofissionnel.component.html',
  styleUrls: ['./registrationprofissionnel.component.css']
})
export class RegistrationprofissionnelComponent implements OnInit {
  public profissionnelForm!:FormGroup;
  constructor( private httpClient: HttpClient ,private formBuilder:FormBuilder,private ServiceRegestrerprofissionnelService:ServiceRegestrerprofissionnelService,
    private router : Router, private GetdomaineService:GetdomaineService){
    
  }
  domaines : Array<domaine> =[];
  ngOnInit() {
    this.getDomaine()
    this.profissionnelForm=this.formBuilder.group({
      nom:this.formBuilder.control(''),
      prenom:this.formBuilder.control(''),
      telephone:this.formBuilder.control('',[Validators.required,Validators.max(99999999),Validators.min(10000000)]),
      email:this.formBuilder.control('',Validators.email),
      motDePasse:this.formBuilder.control(''),
      avatar:this.formBuilder.control(''),
      ville:this.formBuilder.control(''),
      adresse:this.formBuilder.control(''),
      domaine:this.formBuilder.control(''),
      localisation:this.formBuilder.control(''),
    })
    
  }
  selectedFile!: File;

  message!: string;


  //Gets called when the user selects an image
  public onFileChanged(event:any) {
    //Select File
    this.selectedFile = event.target.files[0];
    alert(JSON.stringify(this.selectedFile))
  }
  saveProfissionnel(){
    let profissionnel:profissionnel=this.profissionnelForm.value
    let selectedFile1: File=this.selectedFile
    let nom:String=profissionnel.nom
   
    const uploadImageData = new FormData();
    this.ServiceRegestrerprofissionnelService.saveProfissionnel(profissionnel,selectedFile1).subscribe({
      next : data=>{
        const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
  
    //Make a call to the Spring Boot Application to save the image
    this.httpClient.post('http://localhost:8081/image/upload', uploadImageData, { observe: 'response' })
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
  getDomaine(){
    this.GetdomaineService.getDomainet()
    .subscribe({
    next:data =>this.domaines=data
  })
    
  }
}
  



