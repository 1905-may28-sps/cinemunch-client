import { Component, OnInit, Inject } from '@angular/core';
import { Member } from 'src/app/models/member';
import { RegisterService } from 'src/app/services/register.service';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { MemberkeyService } from 'src/app/services/memberkey.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {
//cinemaImg: string;

WrongUsernamePassword = 'Wrong Username and/or Password. Please try again.';
loginError;
WrongOrNullRegistration = 'Wrong Registration Details. Please try again.';
registerError;
removeMessage(){
  this.registerError = false;
  this.loginError = false;
}

member: Member = new Member();

  constructor(private registerService: RegisterService, private loginService: LoginService, private router: Router, private memberkeyService: MemberkeyService) {

   }

  ngOnInit() {
  }

  addMember(){
    console.log(this.member);

    // let type = new MembershipType();
    // type.membershipTypeId = 1;
    // this.member.membershipType = type;

    this.registerService.addMember(this.member).subscribe(
      resp => {
        console.log(resp);

        localStorage.setItem("registered member first name", resp.firstName);
        localStorage.setItem("registered member last name", resp.lastName);

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

        localStorage.setItem("logged in member first name", resp.firstName);
        localStorage.setItem("logged in member last name", resp.lastName);

        this.router.navigateByUrl('/movies');

      },
      error=>{
        this.loginError = true;
        console.log('could not login member');
      }
    )
  }
}
