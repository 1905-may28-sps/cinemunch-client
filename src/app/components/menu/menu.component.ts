import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/models/menu.model';
import { MenuService } from 'src/app/services/menu.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: Menu[] = [];

  constructor( private menuService: MenuService) { }

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
}

}