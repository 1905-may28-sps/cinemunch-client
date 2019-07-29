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

  constructor(private router: Router) { }

  movieName = sessionStorage.getItem("movieName");
  showDate = sessionStorage.getItem("showDate");
  seatNo = sessionStorage.getItem("seatNo");
  totalamount = sessionStorage.getItem("totalamount");
  menuId = sessionStorage.getItem("menuId");
  mealName = sessionStorage.getItem("mealName");
  mealPrice = sessionStorage.getItem("mealPrice");
  total = sessionStorage.getItem("total");
  
    ngOnInit(): void {
    this.calculateTotalPrice (parseFloat(this.totalamount), parseFloat(this.mealPrice));
  }

  logOut(){
    localStorage.clear();
  }

  backToWelcome(){
    this.router.navigateByUrl('/welcome')
  }

public calculateTotalPrice(totalamount: number, mealPrice: number){
   let tax = 0.08885 * ((Number(totalamount)) + (Number(mealPrice)));
   console.log("Tax: $" + tax);
   let total = Number(tax) + Number(totalamount) + Number(mealPrice); 
   console.log("Total Price: $" + total);

   sessionStorage.setItem("total", JSON.stringify(total));
   
   }


}
