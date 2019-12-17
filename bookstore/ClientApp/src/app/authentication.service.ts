import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { User } from "./user";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  apiurl: string;
  BASE_ENDPOINT = "api/bookstore/";
  constructor(private http: HttpClient, @Inject("BASE_URL") baseUrl: string) {
    this.apiurl = baseUrl;
  }

  public loginUser(login: User) {
    let user = JSON.stringify(login);
    return this.http.get(this.apiurl + this.BASE_ENDPOINT + user);
  }
    //public validateUser(login: User) { 
    //    return this.http.post(this.apiurl + this.BASE_ENDPOINT, login);
    //}

}
