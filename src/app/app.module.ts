<<<<<<< HEAD
=======
<<<<<<< HEAD
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
<<<<<<< HEAD
import { SeatsService } from './services/seats.service';
=======
import { MenuService } from './services/menu.service';
import { CheckoutComponent } from './components/checkout/checkout.component';
>>>>>>> refs/remotes/origin/master

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
<<<<<<< HEAD
  providers: [MoviesService,
  SeatsService],
=======
  providers: [MoviesService, MenuService],
>>>>>>> refs/remotes/origin/master
  bootstrap: [AppComponent]
})
export class AppModule { }
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
