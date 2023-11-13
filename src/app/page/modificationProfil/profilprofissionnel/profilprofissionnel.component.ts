import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { profissionnel } from 'src/app/model/profissionnel.model';
import { ModifierprofissionnelService } from 'src/app/services/modifierprofissionnel.service';

@Component({
  selector: 'app-profilprofissionnel',
  templateUrl: './profilprofissionnel.component.html',
  styleUrls: ['./profilprofissionnel.component.css']
})
export class ProfilprofissionnelComponent {
  retrievedImage:any=localStorage.getItem('retrievedImage')
  username :any=localStorage.getItem('username')
  public ModifierProfissinnelForm!:FormGroup;
  constructor(private httpClient: HttpClient,private formBuilder:FormBuilder,
    private router : Router,
    private ModifierprofissionnelService:ModifierprofissionnelService){
    
  }
  ngOnInit() {
    this.ModifierProfissinnelForm=this.formBuilder.group({
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
    fileName!:File;
    
    message!: string;
    public onFileChanged(event:any) {
      //Select File
      this.selectedFile = event.target.files[0];
      alert(JSON.stringify(this.selectedFile))
    }
    modifierProfissionnel(){
      let profissionnel:profissionnel=this.ModifierProfissinnelForm.value
      this.ModifierprofissionnelService.modifierProfissinnel(profissionnel).subscribe({
        next : data=>{
          alert(JSON.stringify(profissionnel.nom))
            const uploadImageData = new FormData();
            uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
            uploadImageData.append('imageFilee', profissionnel.nom.toString());
            //Make a call to the Spring Boot Application to save the image
            this.httpClient.put('http://localhost:8081/image/changerImage', uploadImageData, { observe: 'response' })
              .subscribe((response) => {
                if (response.status === 200) {
                  this.message = 'Image uploaded successfully';
                } else {
                  this.message = 'Image not uploaded successfully';
                }
              }
              );
              
    
         
          
        }
      })
    }
    }
    
