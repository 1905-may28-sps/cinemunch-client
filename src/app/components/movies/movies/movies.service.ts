import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { Movies } from './movies';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:8082/cinemunch/movie";
  public getAllMovies(){
    return this.http.get<Movies[]>(this.url);
  }
 
}
