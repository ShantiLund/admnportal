import { Component, OnInit } from '@angular/core';
import{PurchaseService} from '../services/purchaseDetails/purchase.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  
  ItemsArray= [];

  constructor(private restApiService: PurchaseService) { }

  ngOnInit() {
    this.restApiService.purchase().subscribe((res: any[])=>{
      this.ItemsArray= res;
    })  
  }
  

}
