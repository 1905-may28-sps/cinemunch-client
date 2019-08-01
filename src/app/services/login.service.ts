import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Member } from '../models/member';

@Injectable()
export class LoginService {

  url = environment.movieAppUrl;
  
  reqHeaders = {
    headers: new HttpHeaders({'Content-Type' : 'application/json',
    'Access-Control-Allow-Origin':'*'
  })
  };

  constructor(private http: HttpClient) { }

  public loginMember(member : Member){
    return this.http.post<Member>(`${this.url}/login`, member, this.reqHeaders)
  }

}
