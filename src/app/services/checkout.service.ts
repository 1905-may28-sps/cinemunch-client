import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
<<<<<<< HEAD
import { Movies } from '../models/movies';
=======

>>>>>>> bea0ac78ea596497524e416e5a64c1718ab3668f
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
