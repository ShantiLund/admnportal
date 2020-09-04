import { Component, OnInit } from '@angular/core';
import {AuthorizationService} from '../services/authorization/authorization.service'

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  ItemsArray= [];

  constructor(private userInfoService: AuthorizationService) { }

  ngOnInit() {
    let payload={
        role: "customer"
       // role: this.signupForm.controls.role.value,
       // contactNumber: this.signupForm.controls.contactNumber.value
      }
    this.userInfoService.getCustomers(payload).subscribe((res: any[])=>{
      this.ItemsArray= res;
      console.log(this.ItemsArray);
      
    })  
  }
}