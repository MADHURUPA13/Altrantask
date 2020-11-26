import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }

  Emaildata() {
   // tslint:disable-next-line:quotemark
   return this.http.get("http://localhost:3000/emaillist");
  }
countryslist() {
  // tslint:disable-next-line:quotemark
  return this.http.get("http://localhost:3000/countrydata");
}
}
