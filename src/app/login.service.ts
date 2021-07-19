import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  loginCheck(username: any, pass: any){
    return this.http.get("https://raj12.azurewebsites.net/api/Get/"+username+"/"+pass+"/?code=A93xCkTu4ChB8voNruUGC7KOtrI3RGvpM4xOUXXDLtlNAcaMYdiN0w==");
  }

  tokenCheck(token:any){
    return this.http.post("url",token);
  }
}
