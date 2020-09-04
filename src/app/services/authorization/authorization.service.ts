import { Injectable } from '@angular/core';
import { map} from 'rxjs/operators';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
private baseurl="https://nodejs-280407.uc.r.appspot.com/"
  constructor(public http: HttpClient) { }
  
  public login(payload): Observable<any> {
    return this.http.post(this.baseurl+'admin/login', payload).pipe(map((res) => {
      console.log("Response success");
      return res;
    }, err => {
      console.log("Response error");
      return err;
    }));
  }
  public signup(payload): Observable<any> {
    return this.http.post(this.baseurl+'admin/signup', payload).pipe(map((res) => {
      console.log("Response success");
      return res;
    }, err => {
      console.log("Response error");
      return err;
    }));
  }
  public addressCreate(payload): Observable<any> {
    return this.http.post(this.baseurl+'address/create', payload).pipe(map((res) => {
      console.log("Response success");
      return res;
    }, err => {
      console.log("Response error");
      return err;
    }));
  }

  public signout(): Observable<any> {
    var auth_token = sessionStorage.getItem("auth_token");
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': "bearer "+auth_token
      })
    };
    return this.http.post(this.baseurl+'users/me/logout', {} ,httpOptions).pipe(map((res) => {
      console.log("Response success");
      return res;
    }, err => {
      console.log("Response error");
      return err;
    }));
  }
  public getOperators(payload): Observable<any> {
    var auth_token = sessionStorage.getItem("auth_token");
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': auth_token
      })
    };
    return this.http.post<any[]>(this.baseurl+'/admin/getAll', payload,httpOptions)
      console.log("Resopnse success")    
  }
  public getPligrims(payload): Observable<any> {
    var auth_token = sessionStorage.getItem("auth_token");
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': auth_token
      })
    };
    return this.http.post<any[]>(this.baseurl+'/admin/getAll', payload,httpOptions)
      console.log("Resopnse success")    
  }

  public getCustomers(payload): Observable<any> {
    console.log('I am here');
    var auth_token = sessionStorage.getItem("auth_token");
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': auth_token
      })
    };
    return this.http.post<any[]>(this.baseurl+'/admin/getAll', payload,httpOptions)
      console.log("Resopnse success")    
  }



}

