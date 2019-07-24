import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Seats } from '../models/seats';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeatsService {
  
  url="localhost:8085/cinemunch/seatingchart"

  constructor(private http: HttpClient) { }

  public getAllMovies(): Observable<Seats[]>{
    return this.http.get<Seats[]>(`{this.url}/seats`);
}
}