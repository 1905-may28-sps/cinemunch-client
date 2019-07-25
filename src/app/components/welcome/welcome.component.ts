import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/models/member';
import { RegisterService } from 'src/app/services/register.service';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { MembershipType } from 'src/app/models/membershipType';



@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
//cinemaImg: string;
// membershipType: MembershipType = new MembershipType();
selectedOption: string;

options = [
{ name: "Guest", value: 1 },
{ name: "Bronze", value: 21 },
{ name: "Gold", value: 22 }
]
// , membershipTypePrice: this.membershipType.membershipTypePrice
member: Member = new Member();


  constructor(private registerService: RegisterService, private loginService: LoginService, private router: Router) {
  //this.cinemaImg = './assets/images/cinema.jpg';
   }

  ngOnInit() {


  }

  addMember(){
    console.log(this.member);
    let membershipType = new MembershipType();
    // let type = new MembershipType();

    // type.membershipTypeId = 1;

    // this.member.membershipType = type;

    if(this.selectedOption=="Guest"){
    membershipType.membershipTypeId = 1;
    this.member.membershipType = membershipType;}
    else if(this.selectedOption=="Bronze"){
    membershipType.membershipTypeId = 21;
    this.member.membershipType = membershipType;}
    else if(this.selectedOption=="Gold"){
    membershipType.membershipTypeId = 22;
    this.member.membershipType = membershipType;}

    this.registerService.addMember(this.member).subscribe(
      resp => {
        console.log(resp);
        
        this.router.navigateByUrl('/movies');
        document.querySelector('body > div').classList.remove('modal-backdrop');
      },
      error=>{
        console.log('could not post member');
      }
    )

  }

  loginMember(){
    console.log(this.member);
    this.loginService.loginMember(this.member).subscribe(
      resp => {
        console.log(resp);
       
        this.router.navigateByUrl('/movies');
        document.querySelector('body > div').classList.remove('modal-backdrop');
      },
      error=>{
        console.log('could not login member');
      }
    )

  }

}
