import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  activeIndex: number=0;
  username :any=localStorage.getItem('username')
  current: string = window.location.href;
  allLinks = document.querySelectorAll(".sidebar-links a");
  collapsed=true;
  
        


  constructor() { }

  ngOnInit(): void {
    const expandBtn = document.querySelector(".expand-btn") as HTMLElement;
    expandBtn.addEventListener("click", () => {
      document.body.classList.toggle("collapsed");
      
    });
    

    this.allLinks.forEach((elem) => {
      elem.addEventListener('click', () => {
        const hrefLinkClick = elem.getAttribute("href");

        this.allLinks.forEach((link) => {
          if (link.getAttribute("href") === hrefLinkClick) {
            link.classList.add("active");
          } else {
            link.classList.remove('active');
          }
        });
      });
    });
  }
  togglecollase():void{
    this.collapsed = !this.collapsed;
  }
  closeSidenav():void{
    this.collapsed =false;
  
  }
  
}
