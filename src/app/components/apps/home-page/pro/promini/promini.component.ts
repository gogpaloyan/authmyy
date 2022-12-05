import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {DataService} from "../../../../../service/data/data.service";

@Component({
  selector: 'app-promini',
  templateUrl: './promini.component.html',
  styleUrls: ['./promini.component.sass']
})
export class ProminiComponent implements OnInit {

  @Input() product: any = []
  show: boolean = false
  btn: boolean = true;


  setPay(title:string, id:string, img: string){
    this.btn = false
    return this.data.setPay(title, id, img)
  }
  removePay(id:string){
    this.btn = true
    return this.data.removePay(id)
  }



  getRoute(text:string | number, id:string){
    return this.router.navigate(["home/gg", id, text])
  }

  constructor(private router: Router, private data: DataService) { }

  ngOnInit() {


  }

  ngDoCheck(){
  }
}
