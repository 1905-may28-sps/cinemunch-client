import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Menu } from '../models/menu';
import { environment } from '../../environments/environment';



@Injectable()
  
export class MenuService {

  url = environment.MenuAppUrl;
  httpOptions = {
    headers : new HttpHeaders({
      'Access-Control-Allow-Origin':'*'
    })
  }
   
  constructor(private http: HttpClient) { }

    public getAllMenus(): Observable<Menu[]>{
    return this.http.get<Menu[]>(`${this.url}/menu`, this.httpOptions);
  }
}