<<<<<<< HEAD
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Movies } from '../models/movies';
import { Orders } from '../models/orders';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

 // url = environment.checkouturl; //Please copy the exact url
  reqHeaders = {
    headers: new HttpHeaders ({'Content_Type' : 'APPLICATION/JSON'})
  }
  constructor(private http: HttpClient) { }

  
  // public submitOrder(orders : Orders) {
  //   return this.http.post<Orders>(`${this.url}/order`, orders, this.reqHeaders)
  // }

  public cancelOrder(){
    return null;
  }
}
=======
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Movies } from '../models/movies';
import { Orders } from '../models/orderkey';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

 // url = environment.checkouturl; //Please copy the exact url
  reqHeaders = {
    headers: new HttpHeaders ({'Content_Type' : 'APPLICATION/JSON'})
  }
  constructor(private http: HttpClient) { }

  
  // public submitOrder(orders : Orders) {
  //   return this.http.post<Orders>(`${this.url}/order`, orders, this.reqHeaders)
  // }

  public cancelOrder(){
    return null;
  }
}
>>>>>>> 4a7c30fa14ee215c552bf223ec81fea1bae7a35e
