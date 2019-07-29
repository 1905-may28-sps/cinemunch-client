<<<<<<< HEAD
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
    sessionStorage.clear();
  }

  backToWelcome(){
    this.router.navigateByUrl('/welcome')
  }

public calculateTotalPrice(totalamount: number, mealPrice: number){
  console.log("Meal Price: "+mealPrice);
   let tax = 0.08885 * ((Number(totalamount)) + (Number(mealPrice)));
   console.log("Tax: $" + tax);
   let total = Number(tax) + Number(totalamount) + Number(mealPrice); 
   sessionStorage.setItem("total", JSON.stringify(total));
   console.log("Total Price: $" + total);

   
   }


}
=======
import { Component, OnInit, ɵRenderDebugInfo } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})

export class CheckoutComponent implements OnInit {
  
FNLN = localStorage.getItem("member first name") + " " + localStorage.getItem("member last name");
nameMem = localStorage.getItem("name membership type");
costMem=localStorage.getItem("cost membership type");
// costMem = localStorage.getItem("price of membership type");

  constructor(private router: Router) { }

  movieName = sessionStorage.getItem("movieName");
  showDate = sessionStorage.getItem("showDate");
  seatNo = sessionStorage.getItem("seatNo");
  totalamount = sessionStorage.getItem("totalamount");
  menuId = sessionStorage.getItem("menuId");
  mealName = sessionStorage.getItem("mealName");
  mealPrice = sessionStorage.getItem("mealPrice");
  total = sessionStorage.getItem("total");
  user = localStorage.getItem("user");
  notHungry = sessionStorage.getItem("notHungry");
  Tax = sessionStorage.getItem("Tax");

    ngOnInit(): void {
    this.calculateTotalPrice (+this.totalamount, +this.mealPrice, +this.costMem);
  }

  logOut(){
    localStorage.clear();
  }

  backToWelcome(){
    this.router.navigateByUrl('/welcome')
  }

public calculateTotalPrice(totalamount: number, mealPrice: number, costMem: number){
   let tax = Number(0.08885) * Number(totalamount + mealPrice + costMem);
  sessionStorage.setItem("Tax", JSON.stringify(tax));
   console.log("Tax: $" + tax);

  
     if (this.user=="r"){
       var Total = tax + totalamount + mealPrice + costMem;
       sessionStorage.setItem("total", JSON.stringify(Total));
      console.log("new user with meal and membership and ticket price" + Total);
      }
       else if(this.user=="l"){
        var Total=tax + totalamount + mealPrice;
        sessionStorage.setItem("total", JSON.stringify(Total));
        console.log("logged user with meal and ticket price" + Total);
      }
    else if (this.notHungry == "n" && this.user=="l"){
        var Total=tax + totalamount;
        sessionStorage.setItem("total", JSON.stringify(Total));
        console.log("logged user with ticket price" + Total);
       }
    else if (this.notHungry == "n" && this.user =="r" ){
        var Total = tax + totalamount + costMem;
        sessionStorage.setItem("total", JSON.stringify(Total));
        console.log("new user with membership and ticket price" + Total);
       }
     
   console.log("Total Price: $" + Total);

  //  sessionStorage.setItem("total", JSON.stringify(Total));


   }


}
>>>>>>> refs/remotes/origin/master
