import { Component, OnInit, ɵRenderDebugInfo } from '@angular/core';
import { Router } from '@angular/router';
import { PersistServiceService } from 'src/app/services/persist-service.service';
import { OrderKey } from 'src/app/models/orderkey';
import { Component } from '@angular/core';
import { Member } from 'src/app/models/member';
import { ShowTime } from 'src/app/models/ShowTime';
import { Menu } from 'src/app/models/menu';
import { Seats } from 'src/app/models/seats';

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
checkoutError;
checkoutErrorMessage = 'Your order could not be submitted. Please call us.';
orderkey: OrderKey = new OrderKey;

  constructor(private router: Router, private persistServiceService: PersistServiceService) { }

  movieName = sessionStorage.getItem("movieName");
  showDate = sessionStorage.getItem("showDate");
  seatId = sessionStorage.getItem("seatId");
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
    sessionStorage.clear();
  }

  backToWelcome(){
    this.router.navigateByUrl('/welcome')
  }

public calculateTotalPrice(totalamount: number, mealPrice: number, costMem: number){
  //  let tax = Number(0.08885) * Number(totalamount + mealPrice + costMem);
  // sessionStorage.setItem("Tax", JSON.stringify(tax));
  //  console.log("Tax: $" + tax);
     if (this.user=="r" && this.notHungry != "n"){
      let tax = Number(0.08885) * Number(totalamount + mealPrice + costMem);
      sessionStorage.setItem("Tax", JSON.stringify(tax));
       let Total = tax + totalamount + mealPrice + costMem;
       sessionStorage.setItem("total", JSON.stringify(Total));
      console.log("new user with meal and membership and ticket price" + Total);
      }
       else if(this.user=="l" && this.notHungry != "n"){
        let tax = Number(0.08885) * Number(totalamount + mealPrice);
        sessionStorage.setItem("Tax", JSON.stringify(tax));
        let Total=tax + totalamount + mealPrice;
        sessionStorage.setItem("total", JSON.stringify(Total));
        console.log("logged user with meal and ticket price" + Total);
      }
    else if (this.notHungry == "n" && this.user=="l"){
      let menuPrice = 0;
      sessionStorage.setItem("menuId", "44");
      console.log(sessionStorage.getItem("menuId"));      
      let tax = Number(0.08885) * (Number(totalamount) + Number(menuPrice));
      sessionStorage.setItem("Tax", JSON.stringify(tax));
        let Total=tax + totalamount;
        sessionStorage.setItem("total", JSON.stringify(Total));
        console.log("logged user with ticket price" + Total);
       }
    else if (this.notHungry == "n" && this.user =="r" ){
      let menuPrice = 0;
      sessionStorage.setItem("menuId", "44");
      console.log(sessionStorage.getItem("menuId"));
      
      let tax = Number(0.08885) * (Number(totalamount) + Number(menuPrice) + Number(costMem));
      sessionStorage.setItem("Tax", JSON.stringify(tax));
        let Total = tax + totalamount + costMem;
        sessionStorage.setItem("total", JSON.stringify(Total));
        console.log("new user with membership and ticket price" + Total);
       }
   //  console.log("Total Price: $" + Total);
  //  sessionStorage.setItem("total", JSON.stringify(Total));
   }


persistData(){

  let member = new Member();
  member.memberId = Number(sessionStorage.getItem("memberId"));
  this.orderkey.member = member;

  let showTime = new ShowTime();
  showTime.showTimeId = Number(sessionStorage.getItem("showTimeId"));
  this.orderkey.showTime = showTime;

  let seatId = Number(sessionStorage.getItem("seatId"));
  this.orderkey.seatId = seatId;

  let menu = new Menu();
  menu.menuId = Number(sessionStorage.getItem("menuId"));
  this.orderkey.menu = menu;

  console.log(this.orderkey)
  this.persistServiceService.persistData(this.orderkey).subscribe(
    resp => {
      console.log(resp);
      this.router.navigateByUrl('/welcome');
    },
    error=>{
      this.checkoutError = true;
      console.log('could not post checkout');
    }
  )
}
}

