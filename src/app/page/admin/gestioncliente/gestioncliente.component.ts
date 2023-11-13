import { Component, OnInit } from '@angular/core';
import { client } from 'src/app/model/client.model';
import { profissionnel } from 'src/app/model/profissionnel.model';
import { GetClientService } from 'src/app/services/get-client.service';

@Component({
  selector: 'app-gestioncliente',
  templateUrl: './gestioncliente.component.html',
  styleUrls: ['./gestioncliente.component.css']
})
export class GestionclienteComponent  implements OnInit {

  clients : Array<client> =[];
  
  page : number =1;
  count: number =0;
  tableSize: number=6;
  

  constructor(private GetClientService:GetClientService){

  }
  ngOnInit() {
     this.getProducts()
     
  }
  getProducts(){
    this.GetClientService.getClient()
    .subscribe({
    next:data =>this.clients=data
  })
    
  }
 
  onTableDataChange(event:any){
    this.page=event;
    this.getProducts()
  }

  
  deleteClient(client:client){
    this.GetClientService.deleteClient(client)
    .subscribe({
      next:data=>{
        this.getProducts()
      }
    })
  
  }
  searchText=""
}
  



