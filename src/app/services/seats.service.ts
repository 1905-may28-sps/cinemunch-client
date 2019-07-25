import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Seats } from '../models/seats';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeatsService {

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*'
      // 'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS',
      // 'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token, Authorization, Keep-Alive'
    })
  };
  
  url="http://localhost:8085/cinemunch/seatingchart"

  constructor(private http: HttpClient) { }

  public getAllSeats(): Observable<Seats[]>{
    return this.http.get<Seats[]>(`${this.url}`, this.httpOptions);
}
}