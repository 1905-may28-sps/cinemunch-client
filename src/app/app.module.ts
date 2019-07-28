import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenuComponent } from './components/menu/menu.component';
import { SeatsComponent } from './components/seats/seats.component';
import { MoviesComponent } from './components/movies/movies.component';

import { MoviesService} from './services/movies.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
<<<<<<< HEAD
import { StorageServiceModule} from 'angular-webstorage-service';
=======

import {LOCAL_STORAGE, WebStorageService, StorageServiceModule} from 'angular-webstorage-service';
>>>>>>> 715b6b56cee692a4d5ffa3dc293b8c89cf21797e

import { TooltipModule } from 'ngx-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { WelcomeComponent } from './components/welcome/welcome.component';
<<<<<<< HEAD
import { RegisterService } from './services/register.service';
import { LoginService } from './services/login.service';

import { MenuService } from './services/menu.service';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { MovieAndTimeslotService } from './services/movie-and-timeslot.service';
import { ShowtimesService } from './services/showtimes.service';
=======
import { CheckoutComponent } from './components/checkout/checkout.component';
import { LoginService } from './services/login.service';
import { RegisterService } from './services/register.service';
import { MovieAndTimeslotService } from './services/movie-and-timeslot.service';
import { ShowtimesService } from './services/showtimes.service';
import { MemberkeyService } from './services/memberkey.service';
import { MenuService } from './services/menu.service';

>>>>>>> 715b6b56cee692a4d5ffa3dc293b8c89cf21797e

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuComponent,
    SeatsComponent,
    MoviesComponent,
    WelcomeComponent,
    CheckoutComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TooltipModule.forRoot(),
    BrowserAnimationsModule,
    NgbModule, HttpClientModule, 
    FormsModule, StorageServiceModule

  ],
<<<<<<< HEAD
  providers: [MoviesService, LoginService, RegisterService, MovieAndTimeslotService, ShowtimesService, MenuService],
=======

  providers: [MoviesService, LoginService, RegisterService, MovieAndTimeslotService, ShowtimesService, MenuService, MemberkeyService],
>>>>>>> 715b6b56cee692a4d5ffa3dc293b8c89cf21797e
  bootstrap: [AppComponent]
})
export class AppModule { }
