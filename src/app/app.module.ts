<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> b6182c95ff85c039ca31ca647e23dcb745d66418
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

import { TooltipModule } from 'ngx-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { WelcomeComponent } from './components/welcome/welcome.component';
import { RegisterService } from './services/register.service';
import { LoginService } from './services/login.service';

import { MovieAndTimeslotService } from './services/movie-and-timeslot.service';
import { ShowtimesService } from './services/showtimes.service';
import { MenuService } from './services/menu.service';
import { CheckoutComponent } from './components/checkout/checkout.component';

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
    FormsModule

  ],
  providers: [MoviesService, LoginService, RegisterService, MovieAndTimeslotService, ShowtimesService, MenuService],
  bootstrap: [AppComponent]  
})
export class AppModule { }
<<<<<<< HEAD
=======
=======
>>>>>>> faf5a564fe8d7ec8369f0f861a060108b1f84a60
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

import { TooltipModule } from 'ngx-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { WelcomeComponent } from './components/welcome/welcome.component';
import { MenuService } from './services/menu.service';
import { CheckoutComponent } from './components/checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuComponent,
    SeatsComponent,
    MoviesComponent,
    WelcomeComponent,
    CheckoutComponent,

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TooltipModule.forRoot(),
    BrowserAnimationsModule,
    NgbModule, HttpClientModule,
    FormsModule

  ],
  providers: [MoviesService, MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
>>>>>>> b6182c95ff85c039ca31ca647e23dcb745d66418
