import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {DataService} from "../../../../service/data/data.service";

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.sass']
})
export class AppsComponent implements OnInit {
  error: boolean = false
  database: any;
  input: string = ""




  onAdd(text: string){
    if(this.input.length > 0){
      this.input = ""
      this.error = false
      return this.data.onAdd(text)
    }else{
      return  this.error = true
    }
  }

  onDelete(id:number){
    return this.data.onDelete(id)
  }

  gg(){
    return this.database.data.filter((i:any) => i.completed).length
  }





  constructor(private router: Router, private data: DataService) {
  }

  ngOnInit() {
    // return this.database = this.data.database
  }
  ngDoCheck(){
    return this.database = this.data.database
  }


}
