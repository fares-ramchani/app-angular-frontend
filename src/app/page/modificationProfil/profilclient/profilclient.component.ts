import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { client } from 'src/app/model/client.model';
import { ModifierclientService } from 'src/app/services/modifierclient.service';

@Component({
  selector: 'app-profilclient',
  templateUrl: './profilclient.component.html',
  styleUrls: ['./profilclient.component.css']
})
export class ProfilclientComponent implements OnInit {
  [x: string]: any;
  retrievedImage:any=localStorage.getItem('retrievedImage')
  username :any=localStorage.getItem('username')
  public ModifierclientForm!:FormGroup;
  constructor(private httpClient: HttpClient,private formBuilder:FormBuilder,private router : Router, private modifierclientService:ModifierclientService){
    
  }
  ngOnInit() {
    this.ModifierclientForm=this.formBuilder.group({
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
fileName!:File;

message!: string;
public onFileChanged(event:any) {
  //Select File
  this.selectedFile = event.target.files[0];
  alert(JSON.stringify(this.selectedFile))
}
modifierClient(){
  let client:client=this.ModifierclientForm.value
  this.modifierclientService.modifierClinet(client).subscribe({
    next : data=>{
      alert(JSON.stringify(client.nom))

        const uploadImageData = new FormData();
        const uploadImageData2 = new FormData();
        uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
        uploadImageData.append('imageFilee', client.nom.toString());
       
        
       
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
