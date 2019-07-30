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
      //  Total = parseFloat(Math.round(Total*10^2)/10^2);
        console.log("New user with meal and membership and ticket price: $" + Total);
       }
        else if(this.user=="l"){
         var Total=tax + totalamount + mealPrice;

         console.log("Logged user with meal and ticket price: $" + Total);
       }
     else if (this.notHungry == "n" && this.user=="l"){
         var Total=tax + totalamount;
         console.log("Logged user with ticket price: $" + Total);
        }
     else if (this.notHungry == "n" && this.user =="r" ){
         var Total = tax + totalamount + costMem;
         console.log("New user with membership and ticket price: $" + Total);
        }
    console.log("Total Price: $" + Total);
    sessionStorage.setItem("total", JSON.stringify(Total));
    }
  


}
