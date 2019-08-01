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

  twitter(){
    window.location.href='http://www.twitter.com/';

  }
  facebook(){
    window.location.href='http://www.facebook.com';
  }

  insta(){
    window.location.href='http://www.instagram.com'
  }
}
