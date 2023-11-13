import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceloginService } from 'src/app/services/servicelogin.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(public serviceloginService: ServiceloginService, private router:Router){}
  ngOnInit(): void {
  }
  username :any=localStorage.getItem('username')
  retrievedImage:any=localStorage.getItem('retrievedImage')
  logout(){
    this.serviceloginService.logout()
    this.router.navigateByUrl("/login")
    this.username=undefined;
    this.retrievedImage=undefined;
    localStorage.setItem('username',"")
    localStorage.setItem('retrievedImage',"")
  }

}
