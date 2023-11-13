import { Component } from '@angular/core';
import { domaine } from 'src/app/model/domaine.model';
import { GetdomaineService } from 'src/app/services/getdomaine.service';

@Component({
  selector: 'app-gestion-domaine',
  templateUrl: './gestion-domaine.component.html',
  styleUrls: ['./gestion-domaine.component.css']
})
export class GestionDomaineComponent {
  domaines : Array<domaine> =[];
  
  page : number =1;
  count: number =0;
  tableSize: number=7;
  

  constructor(private GetdomaineService:GetdomaineService){

  }
  ngOnInit() {
     this.getdomaine()
     
  }
  getdomaine(){
    this.GetdomaineService.getDomainet()
    .subscribe({
    next:data =>this.domaines=data
  })
    
  }
 
  onTableDataChange(event:any){
    this.page=event;
    this.getdomaine()
  }
  deleteDomaine(domaine:domaine){
    this.GetdomaineService.deleteDomaine(domaine)
    .subscribe({
      next:data=>{
        this.getdomaine()
      }
    })
  
  }

  
 
  searchText=""
}
  
