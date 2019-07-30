import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/models/member';
import { RegisterService } from 'src/app/services/register.service';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { MemType } from 'src/app/models/memType';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {
//cinemaImg: string;
selectedOption: string;

options = [
{ name: "Guest", value: 1 },
{ name: "Bronze", value: 2 },
{ name: "Gold", value: 3 }
]

WrongUsernamePassword = 'Wrong Username and/or Password. Please try again.';
loginError;
datadismiss='true';
WrongOrNullRegistration = 'Wrong Registration Details. Please try again.';
registerError;
removeMessage(){
  this.registerError = false;
  this.loginError = false;
}

member: Member = new Member();

  constructor(private registerService: RegisterService, private loginService: LoginService, private router: Router) {

   }

  ngOnInit() {
  }

  addMember(){
    console.log(this.member);
    let memType = new MemType();
    // let type = new MembershipType();
    // type.membershipTypeId = 1;
    // this.member.membershipType = type;

    if(this.selectedOption=="Guest"){
      memType.memTypeId = 1;
      this.member.memType = memType;}
      else if(this.selectedOption=="Bronze"){
      memType.memTypeId = 2;
      this.member.memType = memType;}
      else if(this.selectedOption=="Gold"){
      memType.memTypeId = 3;
      this.member.memType = memType;}

    this.registerService.addMember(this.member).subscribe(
      resp => {
        console.log(resp);

        localStorage.setItem("member first name", resp.firstName);
        localStorage.setItem("member last name", resp.lastName);
        localStorage.setItem("name membership type", String(resp.memType.memTypeName));
        localStorage.setItem("cost membership type", String(resp.memType.memTypePrice));
        localStorage.setItem("user", "r");

        this.router.navigateByUrl('/movies');

      },
      error=>{
        this.registerError = true;
        console.log('could not post member');
      }
    )
  }

  loginMember(){
    console.log(this.member);
    this.loginService.loginMember(this.member).subscribe(
      resp => {
        console.log(resp);

        localStorage.setItem("member first name", resp.firstName);
        localStorage.setItem("member last name", resp.lastName);
        localStorage.setItem("name membership type", String(resp.memType.memTypeName));
        localStorage.setItem("cost membership type", String(resp.memType.memTypePrice));
        localStorage.setItem("user", "l");
        this.router.navigateByUrl('/movies');

      },
      error=>{
        this.loginError = true;
        console.log('could not login member');
      }
    )
  }
}
