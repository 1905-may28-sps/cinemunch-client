import { Component, OnInit } from '@angular/core';
import { MemberkeyService } from 'src/app/services/memberkey.service';
import { sessionStorageFactory } from 'angular-webstorage-service';
import { tick } from '@angular/core/testing';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})


export class CheckoutComponent implements OnInit {
MemberName=this.memberkeyService.getMemberKey();

<<<<<<< HEAD
  
  constructor(private memberkeyService: MemberkeyService) { }

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
=======
  constructor(private memberkeyService: MemberkeyService) { 

  }

  ngOnInit() {

    
    // console.log("this is the get memberkey again" + this.memberkeyService.getMemberKey());
    // this.MemberName = this.memberkeyService.getMemberKey();

>>>>>>> refs/remotes/origin/master
  }

retrieveLoginMember(){
  console.log("this is the get memberkey again" + this.memberkeyService.getMemberKey());
}
public calculateTotalPrice(totalamount: number, mealPrice: number){
   let tax = 0.08885 * ((Number(totalamount) + Number(mealPrice)));
   console.log("Tax: $" + tax);
   let total = Number(tax) + Number(totalamount) + Number(mealPrice); 
   console.log("Total Price: $" + total);

   sessionStorage.setItem("total", JSON.stringify(total));
   
   }

}
