import { Component, OnInit } from '@angular/core';
import { MemberkeyService } from 'src/app/services/memberkey.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})


export class CheckoutComponent implements OnInit {
  MemberName=this.memberkeyService.getMemberKey();

  constructor(private memberkeyService: MemberkeyService) { 

  }

  ngOnInit() {
  }

retrieveLoginMember(){
  console.log("this is the get memberkey again" + this.memberkeyService.getMemberKey());
}

}
