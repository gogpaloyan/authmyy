import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProService} from "../../../../../service/pro/pro.service";
import {DataService} from "../../../../../service/data/data.service";

@Component({
  selector: 'app-procom',
  templateUrl: './procom.component.html',
  styleUrls: ['./procom.component.sass']
})
export class ProcomComponent implements OnInit {
  user = {id: "", name: ""}
  product: any;
  btn: boolean = false



  constructor(private route: ActivatedRoute, private products: ProService, private data: DataService) {
  }
  setPay(title: string, id: string){
    this.btn = true
    return this.data.setPay(title, id)
  }

  gg(){
    this.product = this.product[+this.user.id - 1]
  }
  removePay(id: string){
    this.btn = true
    return this.data.removePay(id)
  }

  ngOnInit() {
    this.product = this.products.getProducts().subscribe((res) => {
      this.product = res
      this.gg()
    })

    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name'],
    }
  }




}
