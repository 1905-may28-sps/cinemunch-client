import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  MenuComponent } from './components/menu/menu.component';


//This is my case 
const routes: Routes = [
  { path: 'menu', component: MenuComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }