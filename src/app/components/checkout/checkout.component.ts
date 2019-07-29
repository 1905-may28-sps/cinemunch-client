import { Component, OnInit, ɵRenderDebugInfo } from '@angular/core';
import { MemberkeyService } from 'src/app/services/memberkey.service';
import { randomFill } from 'crypto';
import { Router } from '@angular/router';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})


export class CheckoutComponent implements OnInit {
  
regFNLN = localStorage.getItem("registered member first name") + " " + localStorage.getItem("registered member last name");
logFNLN = localStorage.getItem("logged in member first name") + " " + localStorage.getItem("logged in member last name");

// backToWelcome = 
// MemberName =
// ShowTime = localStorage.getItem("selectedMovieDate");
// ShowTimeId=sessionStorage.getItem("showTimeId");

  constructor(private router: Router) { 

  }

  ngOnInit() {
  
  }

  logOut(){
    localStorage.clear();
  }

  backToWelcome(){
    this.router.navigateByUrl('/welcome')
  }

}
