import { Component, OnInit } from '@angular/core';
import {DataService} from "../../../../service/data/data.service";

@Component({
  selector: 'app-mod',
  templateUrl: './mod.component.html',
  styleUrls: ['./mod.component.sass']
})


export class ModComponent implements OnInit {
  myPays: any;

  onDelete(id:number){
    return this.pay.onDeletePay(id)
  }

  constructor(private pay: DataService) { }

  ngOnInit(){

  }
  ngDoCheck(){
    return this.myPays = this.pay.getPay()
  }

}
