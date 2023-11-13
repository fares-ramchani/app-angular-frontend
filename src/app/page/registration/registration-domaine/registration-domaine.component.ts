import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { domaine } from 'src/app/model/domaine.model';
import { RegestrationDomaineService } from 'src/app/services/regestration-domaine.service';

@Component({
  selector: 'app-registration-domaine',
  templateUrl: './registration-domaine.component.html',
  styleUrls: ['./registration-domaine.component.css']
})
export class RegistrationDomaineComponent implements OnInit {
  public DomaineForm!:FormGroup;
  constructor(private httpClient: HttpClient,private formBuilder:FormBuilder,private router : Router,private RegestrationDomaineService:RegestrationDomaineService){
    
  }
  ngOnInit() {
    this.DomaineForm=this.formBuilder.group({
      nom:this.formBuilder.control('',Validators.required),
      discription:this.formBuilder.control('',Validators.required),
    })
    
  }

  saveDomaine(){
    let domaine:domaine=this.DomaineForm.value
    this.RegestrationDomaineService.saveDomaine(domaine).subscribe({
      next : data=>{      
          this.router.navigateByUrl("/Homeadmin/GestionDomaineComponent")    
              }
              
          }
        )
      }
  getErrorsMessage(arg0: string,error: any):string {
    if(error['required']){
      return arg0+ " obligatoir";
    }
    else return "";
    
  
  }

}

