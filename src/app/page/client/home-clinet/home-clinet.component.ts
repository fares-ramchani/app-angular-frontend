import { Component } from '@angular/core';

@Component({
  selector: 'app-home-clinet',
  templateUrl: './home-clinet.component.html',
  styleUrls: ['./home-clinet.component.css']
})
export class HomeClinetComponent {
  retrievedImage:any=localStorage.getItem('retrievedImage')
}
