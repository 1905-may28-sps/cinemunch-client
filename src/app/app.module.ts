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
=======
import { StorageServiceModule} from 'angular-webstorage-service';
>>>>>>> 8b5299f23a13e1d03b7fd3507d278159a26f3634

import { TooltipModule } from 'ngx-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { WelcomeComponent } from './components/welcome/welcome.component';
<<<<<<< HEAD
import { MovieAndTimeslotService } from './services/movie-and-timeslot.service';
import { ShowtimesService } from './services/showtimes.service';
import { CheckoutComponent } from './components/checkout/checkout.component';
=======
import { RegisterService } from './services/register.service';
import { LoginService } from './services/login.service';

import { MenuService } from './services/menu.service';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { MovieAndTimeslotService } from './services/movie-and-timeslot.service';
import { ShowtimesService } from './services/showtimes.service';
import { MemberkeyService } from './services/memberkey.service';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { PreviewComponent } from './components/preview/preview.component';
import { PersistServiceService } from './services/persist-service.service';
>>>>>>> 8b5299f23a13e1d03b7fd3507d278159a26f3634

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuComponent,
    SeatsComponent,
    MoviesComponent,
    WelcomeComponent,
<<<<<<< HEAD
    CheckoutComponent
=======
    CheckoutComponent,
    AboutusComponent,
    PreviewComponent
>>>>>>> 8b5299f23a13e1d03b7fd3507d278159a26f3634
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TooltipModule.forRoot(),
    BrowserAnimationsModule,
<<<<<<< HEAD
    NgbModule, HttpClientModule,
    FormsModule,

  ],
  providers: [MoviesService, MovieAndTimeslotService, ShowtimesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
=======
    NgbModule, HttpClientModule, 
    FormsModule, StorageServiceModule

  ],
  providers: [MoviesService, LoginService, RegisterService, MovieAndTimeslotService, ShowtimesService, MenuService, MemberkeyService, PersistServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }










>>>>>>> 8b5299f23a13e1d03b7fd3507d278159a26f3634
