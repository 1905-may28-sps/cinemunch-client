import { Component, OnInit } from '@angular/core';
import { MemberkeyService } from 'src/app/services/memberkey.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})


export class CheckoutComponent implements OnInit {
<<<<<<< HEAD
MemberName=this.memberkeyService.getMemberKey();
=======
  MemberName=this.memberkeyService.getMemberKey();

>>>>>>> tiff
  constructor(private memberkeyService: MemberkeyService) { 

  }

  ngOnInit() {
<<<<<<< HEAD
    
    // console.log("this is the get memberkey again" + this.memberkeyService.getMemberKey());
    // this.MemberName = this.memberkeyService.getMemberKey();
=======

>>>>>>> tiff
  }

retrieveLoginMember(){
  console.log("this is the get memberkey again" + this.memberkeyService.getMemberKey());
}

}
