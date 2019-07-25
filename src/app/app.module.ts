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

import { WelcomeComponent } from './components/welcome/welcome.component';
import { SeatsService } from './services/seats.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuComponent,
    SeatsComponent,
    MoviesComponent,
    WelcomeComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TooltipModule.forRoot(),
    BrowserAnimationsModule,
    NgbModule, HttpClientModule

  ],
  providers: [MoviesService,
  SeatsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
