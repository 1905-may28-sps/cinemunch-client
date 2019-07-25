import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Member } from '../models/member';

@Injectable()
export class RegisterService {

  url = environment.movieAppUrl;
  reqHeaders = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  };

  constructor(private http: HttpClient) { }

  public addMember(member : Member){
    return this.http.post<Member>(`${this.url}/signup`, member, this.reqHeaders)
  }

}
