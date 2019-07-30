import { Injectable } from '@angular/core';
import { Orders } from '../models/orders';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { OrderKey} from '../models/orderkey'

@Injectable()
export class PersistServiceService {

  url = environment.movieAppUrl;
  reqHeaders = {
    headers: new HttpHeaders({'Content-Type' : 'application/json',
    'Access-Control-Allow-Origin':'*'
  })
  };

  constructor(private http: HttpClient) { }

  public persistData(orderkey : OrderKey){
    return this.http.post<OrderKey>(`${this.url}/orderkey`, orderkey, this.reqHeaders)
  }

}
