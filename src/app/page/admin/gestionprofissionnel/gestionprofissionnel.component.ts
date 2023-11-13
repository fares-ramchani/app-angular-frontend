import { Component, OnInit } from '@angular/core';
import { profissionnel } from 'src/app/model/profissionnel.model';
import { GetprofissionnelService } from 'src/app/services/getprofissionnel.service';

@Component({
  selector: 'app-gestionprofissionnel',
  templateUrl: './gestionprofissionnel.component.html',
  styleUrls: ['./gestionprofissionnel.component.css']
})
export class GestionprofissionnelComponent implements OnInit {
  profissionnels: Array<profissionnel>=[];
  pagee : number =1;
  counte: number =0;
  tableSizee: number=6;
  
  constructor(private GetprofissionnelService:GetprofissionnelService){

  }
  ngOnInit() {
     
     this.getProfissionnel()
  }
  getProfissionnel(){
    this.GetprofissionnelService.getProfissionnel()
    .subscribe({
    next:data =>this.profissionnels=data
  })
    
  }
  onTableDataChange1(evente:any){
    this.pagee=evente;
    this.getProfissionnel()
  }
  deleteprofissionnel(profissionnel:profissionnel){
    this.GetprofissionnelService.deleteprofissionnel(profissionnel)
    .subscribe({
      next:data=>{
        this.getProfissionnel()
      }
    })
  
  }
  searchText=""

}
