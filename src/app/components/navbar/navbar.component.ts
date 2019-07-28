import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menubutton: String;

  constructor() { 

  this.menubutton = './assets/images/dropdown.png';
  
}

  ngOnInit() {
  }

}
