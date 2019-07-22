import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenuComponent } from './components/menu/menu.component';
import { SeatsComponent } from './components/seats/seats.component';
import { MoviesComponent } from './components/movies/movies/movies.component';

import { MoviesService} from './components/movies/movies/movies.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { TooltipModule } from 'ngx-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuComponent,
    SeatsComponent,
    MoviesComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TooltipModule.forRoot(),
    BrowserAnimationsModule,
    NgbModule, HttpClientModule

  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
