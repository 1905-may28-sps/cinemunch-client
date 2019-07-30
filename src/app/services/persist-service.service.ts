import { Injectable } from '@angular/core';
import { Orders } from '../models/orderkey';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class PersistServiceService {

  url = environment.movieAppUrl;
  reqHeaders = {
    headers: new HttpHeaders({'Content-Type' : 'application/json',
    'Access-Control-Allow-Origin':'*'
  })
  };

  constructor(private http: HttpClient) { }

  public persistData(orders : Orders){
    return this.http.post<Orders>(`${this.url}/orderkey`, orders, this.reqHeaders)
  }

}
