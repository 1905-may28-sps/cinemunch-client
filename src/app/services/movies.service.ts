import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Movies } from '../models/movies';
import { Observable } from 'rxjs';


@Injectable()
  
export class MoviesService {

  url = "http://localhost:8082/cinemunch/movie";
   
  constructor(private http: HttpClient) { }

    public getAllMovies(): Observable<Movies[]>{
    return this.http.get<Movies[]>(`{this.url}/movies`);
  }
}
