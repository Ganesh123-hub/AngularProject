import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiConnService {

  private baseUrl:String = "http://localhost:3000";

  constructor(private http : HttpClient) { }

     registerData(data:any) {
      return this.http.post(`${this.baseUrl}/add`, data);
     }

     getData() {
      return this.http.get(`${this.baseUrl}/get`);
     }


}
