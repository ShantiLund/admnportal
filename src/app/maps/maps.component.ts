import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder,Validators } from '@angular/forms';
import { HttpClient, HttpEventType } from '@angular/common/http';
import {AuthorizationService} from '../services/authorization/authorization.service'

declare const google: any;

interface Marker {
lat: number;
lng: number;
label?: string;
draggable?: boolean;
}
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  
  
  ItemsArray= [];

  constructor(private userInfoService: AuthorizationService) { }

  ngOnInit() {
    let payload={
        role: "operator"
       // role: this.signupForm.controls.role.value,
       // contactNumber: this.signupForm.controls.contactNumber.value
      }
    this.userInfoService.getOperators(payload).subscribe((res: any[])=>{
      this.ItemsArray= res;
    })  
  }
}