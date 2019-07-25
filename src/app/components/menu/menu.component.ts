import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/models/menu';
import { MenuService } from 'src/app/services/menu.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: Menu[] = [];

  imgSrc: String;

  constructor( private menuService: MenuService, private router:Router) { }

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
  console.log(`selectedMenu = ${JSON.stringify(this.selectedMenu)}`);
  this.imgSrc=`./../../assets/images/food-${menus.menuId}.jpg`;
}

differentRoute(){
  this.router.navigateByUrl('/checkout')
}

}