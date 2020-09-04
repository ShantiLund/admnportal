import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import{map} from 'rxjs/Operators/map';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
  private baseurl="https://nodejs-280407.uc.r.appspot.com/";
  constructor(public http: HttpClient) { }
 


  public purchase(): Observable<any> {
    var auth_token = sessionStorage.getItem("auth_token");
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': auth_token
      })
    };
    return this.http.get<any[]>(this.baseurl+'/payment/admin/getAllPurchases', httpOptions)
      console.log("Resopnse success")    
  }
}
