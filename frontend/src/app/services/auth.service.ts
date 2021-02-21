import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import {User} from "../models/User";

import { Observable, BehaviorSubject } from 'rxjs';
import { first, tap, catchError } from 'rxjs/operators';
import { ErrorHandlerService } from "./error-handler.service";

@Injectable({
  providedIn: "root"
})
export class AuthService {

  isUserLoggedIn$ = new BehaviorSubject<boolean>(false); //globally : tells us if the user is logged in or not
  userId: Pick<User, "id">; //if a particular user is signed in or not
  private url ="http://localhost:3000/auth";


  constructor( private http: HttpClient,
    private errorHandlerService: ErrorHandlerService,
    private router: Router) { }


  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  signup(user: Omit<User, "id">): Observable<User> {
    return this.http
      .post<User>(`${this.url}/signup`, user, this.httpOptions) //sending the user
      .pipe(
        first(),
        catchError(this.errorHandlerService.handleError<User>("signup"))
      );
  }

  login(email: Pick<User, "email">,password: Pick<User, "password">): Observable<{
    token: string;
    userId:  Pick<User, "id">
     }> 
     { //will pick from the user the email and the password
    return this.http
    .post(`${this.url}/login`, { email, password }, this.httpOptions)  //sending the email and the password
    .pipe(
      first(),
      tap((tokenObject: {token: string; userId: Pick<User, "id">})=>{
        this.userId = tokenObject.userId;
        localStorage.setItem("token", tokenObject.token); //store the response in local storage
        this.isUserLoggedIn$.next(true);
        this.router.navigate(["formations"]);
      }),
      catchError(
        this.errorHandlerService.handleError<{
          token: string;
          userId: Pick<User, "id">;
        }>("login"))
      );
  }



}
