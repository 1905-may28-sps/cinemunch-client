import { Component, OnInit, Inject } from '@angular/core';
import { Menu } from 'src/app/models/menu';
import { MenuService } from 'src/app/services/menu.service';
import { Router } from '@angular/router';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: Menu[] = [];
  public data:any=[]

  imgSrc: String;

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService, private menuService: MenuService, private router:Router) { }
  
   seatNo = sessionStorage.getItem("seatNo");

  ngOnInit() {
    this.getMenus();
  }
  getMenus(){
    this.menuService.getAllMenus().subscribe(
      thisIsABody => {
        console.log(thisIsABody);
        this.menus = thisIsABody;
      },
      error => console.log('something bad happened')
    );
}
selectedMenu: Menu;

onSelect(menus: Menu): void {
  this.selectedMenu =  menus;
  console.log(`selectedMenu = ${String(this.selectedMenu)}`);
  sessionStorage.setItem("menuId", String(menus.menuId));
  sessionStorage.setItem("mealName", String(menus.mealName));
  sessionStorage.setItem("mealPrice", String(menus.mealPrice));
    
  this.imgSrc=`./../../assets/images/food-${menus.menuId}.jpg`;
}

saveInLocal(menuKey,menus): void{
  console.log('recieved= menuKey:' + menuKey + 'value' + menus);
  this.storage.set(menuKey,menus);
  this.data[menuKey]= this.storage.get(menuKey)
}
/*
getFromLocal(menuKey): void{
  console.log('recieved= menuKey:' + menuKey);
  this.data[menuKey]= this.storage.get(menuKey);
  console.log(this.data);
}
*/
public doNotIncludeMealPrice(){
  sessionStorage.setItem("notHungry", "n");
 }


differentRoute(){
  this.router.navigateByUrl('/checkout')
}

}