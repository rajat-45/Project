import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  loginCheck(data:any){
    return this.http.post("url",data);
  }

  tokenCheck(token:any){
    return this.http.post("url",token);
  }
}
