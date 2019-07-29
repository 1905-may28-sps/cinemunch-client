import { Component, OnInit, Inject } from '@angular/core';
import { Member } from 'src/app/models/member';
import { RegisterService } from 'src/app/services/register.service';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { MemberkeyService } from 'src/app/services/memberkey.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {
//cinemaImg: string;

loggedIn="logged in Member";
registeredIn="registered Member";
WrongUsernamePassword = 'Wrong Username and/or Password. Please try again.';
loginError;
WrongOrNullRegistration = 'Wrong Registration Details. Please try again.';
registerError;
removeMessage(){
  this.registerError = false;
  this.loginError = false;
}

member: Member = new Member();

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService, private registerService: RegisterService, private loginService: LoginService, private router: Router, private memberkeyService: MemberkeyService) {
  //this.cinemaImg = './assets/images/cinema.jpg';
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

        this.storage.set(this.registeredIn, resp.firstName + " " + resp.lastName);

        console.log("this is the registered member " + this.storage.get(this.registeredIn));
        this.memberkeyService.setMemberKey(this.storage.get(this.registeredIn));

        this.router.navigateByUrl('/movies');
        document.body.classList.remove('modal-open');
        
        // document.querySelector('body > div').classList.remove('modal');
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
        this.storage.set(this.loggedIn, resp.firstName + " " + resp.lastName);

        console.log("this is the logged in member " + this.storage.get(this.loggedIn));
        this.memberkeyService.setMemberKey(this.storage.get(this.loggedIn));
        console.log("this is the get member key" + this.memberkeyService.getMemberKey());

        this.router.navigateByUrl('/movies');
        console.log("after movies loads" + this.memberkeyService.getMemberKey());
        document.querySelector('body > div').classList.remove('modal-backdrop');
      },
      error=>{
        this.loginError = true;
        console.log('could not login member');
      }
    )
  }
}
