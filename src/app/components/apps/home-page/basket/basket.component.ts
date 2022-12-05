import { Component, OnInit } from '@angular/core';
import {DataService} from "../../../../service/data/data.service";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.sass']
})
export class BasketComponent implements OnInit {

  myPays: any;

  onDelete(id:number){
    return this.pay.onDeletePay(id)
  }
  constructor(private pay: DataService) { }
  ngOnInit(){}
  ngDoCheck(){
    return this.myPays = this.pay.getPay()
  }

}
