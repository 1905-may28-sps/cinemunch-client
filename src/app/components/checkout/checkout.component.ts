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
  //  let taxlog = 0.08885 * ((Number(totalamount)) + (Number(mealPrice)));
   console.log("Tax: $" + tax);

   let total = tax + totalamount + mealPrice + costMem;
  //  let totallog = Number(taxlog) + Number(totalamount) + Number(mealPrice);
   console.log("Total Price: $" + total);

   sessionStorage.setItem("total", JSON.stringify(total));
  //  sessionStorage.setItem("totallog", JSON.stringify(totallog));

   console.log("Total Price: $" + total);
   }


}
