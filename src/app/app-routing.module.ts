import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  MenuComponent } from './components/menu/menu.component';
import { MoviesComponent } from './components/movies/movies.component';
import { SeatsComponent } from './components/seats/seats.component';
import { WelcomeComponent  } from './components/welcome/welcome.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import {PreviewComponent} from './components/preview/preview.component';



//This is my case 
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'seats', component: SeatsComponent},
  { path: 'checkout', component: CheckoutComponent},
  { path: 'aboutus', component: AboutusComponent},
  { path: 'preview', component: PreviewComponent},




 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }