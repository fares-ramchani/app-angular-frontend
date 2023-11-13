import { Component } from '@angular/core';

@Component({
  selector: 'app-homeprofissionnel',
  templateUrl: './homeprofissionnel.component.html',
  styleUrls: ['./homeprofissionnel.component.css']
})
export class HomeprofissionnelComponent {
  retrievedImage:any=localStorage.getItem('retrievedImage')

}
