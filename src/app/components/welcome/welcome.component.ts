import { Component, OnInit, Inject } from '@angular/core';
import { Member } from 'src/app/models/member';
import { RegisterService } from 'src/app/services/register.service';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';



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
public data:any=[]


  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService, private registerService: RegisterService, private loginService: LoginService, private router: Router) {
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
        
        this.router.navigateByUrl('/movies');
        document.querySelector('body > div').classList.remove('modal-backdrop');
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
       
        this.router.navigateByUrl('/movies');
        document.querySelector('body > div').classList.remove('modal-backdrop');
      },
      error=>{
        this.loginError = true;
        console.log('could not login member');
      }
    )

  }

saveInLocal(memberKey, member): void {
    console.log('recieved= memberKey:' + memberKey + 'value:' + member);
    this.storage.set(memberKey, member);
    this.data[memberKey]= this.storage.get(memberKey);
   }

  //  getFromLocal(memberKey): void {
  //   console.log('recieved= memberKey:' + memberKey);
  //   this.data[memberKey]= this.storage.get(memberKey);
  //   console.log(this.data);
  //  }

}
