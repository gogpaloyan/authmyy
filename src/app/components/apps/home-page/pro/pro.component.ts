import { Component, OnInit } from '@angular/core';
import {ProService} from "../../../../service/pro/pro.service";

@Component({
  selector: 'app-pro',
  templateUrl: './pro.component.html',
  styleUrls: ['./pro.component.sass']
})
export class ProComponent implements OnInit {
  products: any = []
  search: string = ""
  constructor(private productserviceapp: ProService) { }

  ngOnInit() {
   this.productserviceapp.getProducts().subscribe((res)=>{
      return this.products = res
    })
  }

}
