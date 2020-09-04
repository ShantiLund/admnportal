import { Injectable } from '@angular/core';
import { map} from 'rxjs/operators';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  private baseurl="http://localhost:3000/"
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
  public create(payload): Observable<any> {
    return this.http.post(this.baseurl+'videos/create', payload).pipe(map((res) => {
      console.log("Response success");
      return res;
    }, err => {
      console.log("Response error");
      return err;
    }));
  }
}
