import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Movies } from '../models/movies';
import { Observable } from 'rxjs';


@Injectable()
  
export class MoviesService {

  url = "http://localhost:8082/cinemunch/movie";

  reqHeaders = {
    headers: new HttpHeaders({'Content-Type' : 'application/json',
    'Access-Control-Allow-Origin':'*'
  })
};
   
  constructor(private http: HttpClient) { }

    public getAllMovies(): Observable<Movies[]>{
    return this.http.get<Movies[]>(`${this.url}`, this.reqHeaders);
  }
}
