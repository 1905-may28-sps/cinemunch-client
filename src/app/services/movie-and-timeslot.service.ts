import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { movieAndTimeslot } from '../models/movieAndTimeslot';
import { OriginalSource } from 'webpack-sources';

@Injectable()
export class MovieAndTimeslotService {

  httpOptions = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'http://localhost:8082',
      'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token, Authorization, Keep-Alive'
    })
  };

  url = 'http://localhost:8082/cinemunch/movie/listings';
  constructor(private http: HttpClient) { }

  public getShowTimeByMovie(id: number): Observable<movieAndTimeslot>{
    return this.http.get<movieAndTimeslot>(`${this.url}/${id}`, this.httpOptions);
}
}
