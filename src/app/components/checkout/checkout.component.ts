<<<<<<< HEAD
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
       console.log("new user with meal and membership and ticket price" + Total);
       }
        else if(this.user=="l"){
         var Total=tax + totalamount + mealPrice;
         console.log("logged user with meal and ticket price" + Total);
       }
     else if (this.notHungry == "n" && this.user=="l"){
         var Total=tax + totalamount;
         console.log("logged user with ticket price" + Total);
        }
     else if (this.notHungry == "n" && this.user =="r" ){
         var Total = tax + totalamount + costMem;
         console.log("new user with membership and ticket price" + Total);
        }
    console.log("Total Price: $" + Total);
    sessionStorage.setItem("total", JSON.stringify(Total));
    }
  


}
=======
import { Component, OnInit, ɵRenderDebugInfo } from '@angular/core';
import { Router } from '@angular/router';
import { PersistServiceService } from 'src/app/services/persist-service.service';
import { OrderKey } from 'src/app/models/orderkey';
import { Member } from 'src/app/models/member';
import { ShowTime } from 'src/app/models/ShowTime';
import { Menu } from 'src/app/models/menu';

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
      let tax = Number(0.08885) * Number(totalamount);
      sessionStorage.setItem("Tax", JSON.stringify(tax));
        let Total=tax + totalamount;
        sessionStorage.setItem("total", JSON.stringify(Total));
        console.log("logged user with ticket price" + Total);
       }
    else if (this.notHungry == "n" && this.user =="r" ){
      let tax = Number(0.08885) * Number(totalamount + costMem);
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
  member.id = Number(localStorage.getItem("member Id"));
  this.orderkey.member = member;

  let showTime = new ShowTime();
  showTime.showTimeId = Number(sessionStorage.getItem("showTimeId"));
  this.orderkey.showTime = showTime;

  let seatId = this.seatNo;

  let menu = new Menu();
  menu.menuId = Number(sessionStorage.getItem("menuId"));
  this.orderkey.menu = menu;

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
>>>>>>> 4a7c30fa14ee215c552bf223ec81fea1bae7a35e
