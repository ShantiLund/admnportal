import { Component, OnInit } from '@angular/core';
import {AuthorizationService} from '../services/authorization/authorization.service';
import{Router} from '@angular/router';

@Component({
  selector: 'app-pligrim',
  templateUrl: './pligrim.component.html',
  styleUrls: ['./pligrim.component.css']
})
export class PligrimComponent implements OnInit {

  ItemsArray= [];

  constructor(private restApiService: AuthorizationService,private router:Router) { }

  ngOnInit() {
    let payload={
      role:"pilgrim"
    }
    this.restApiService.getPligrims(payload).subscribe((res: any[])=>{
      this.ItemsArray= res;
    })  
  }
  setAddress(email){
    console.log(email);
    this.router.navigate(['/address',email]);
  }

}
