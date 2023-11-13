import { Component } from '@angular/core';
import { navbarData } from './nav-data';

@Component({
  selector: 'app-sidebarr',
  templateUrl: './sidebarr.component.html',
  styleUrls: ['./sidebarr.component.css']
})
export class SidebarrComponent {
  collapsed=true;
  navData=navbarData;
togglecollase():void{
  this.collapsed = !this.collapsed
}
closeSidenav():void{
  this.collapsed =false

}
}
