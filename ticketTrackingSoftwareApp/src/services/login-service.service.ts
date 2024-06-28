import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonInterface } from '../interfaces/common-interface';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  apiUrl : string = 'https://freeapi.miniprojectideas.com/api/TicketsNew/'
  constructor(private http:HttpClient) { }
  // `${this.apiUrl}Login`
  loginData(loginObj:CommonInterface){
    debugger;
    return this.http.post(this.apiUrl + 'Login' ,loginObj);
  }
}
