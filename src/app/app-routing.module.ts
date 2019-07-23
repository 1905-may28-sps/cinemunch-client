import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  MenuComponent } from './components/menu/menu.component';
import { MoviesComponent } from './components/movies/movies.component';
import { SeatsComponent } from './components/seats/seats.component';
import { WelcomeComponent  } from './components/welcome/welcome.component';



//This is my case 
const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "welcome"},
  {path: "welcome", component: WelcomeComponent},
  { path: 'movies', component: MoviesComponent},
  { path: 'menu', component: MenuComponent },
  { path: 'seats', component: SeatsComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }