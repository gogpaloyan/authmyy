import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DataService} from "../../../../service/data/data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.sass']
})
export class RegisterPageComponent implements OnInit {
  form: FormGroup
  error: boolean = false
  errorPage: boolean = false
  userBirtDay: Date = new Date();
  dataBase: any;
  gg:any;


  submit() {
    let auth = this.dataBase.reduce((aggr:boolean, val:any) => {
      if(this.form.value["userEmail"] === val.auth.userEmail){
        return aggr = true
      }
      return aggr
    }, false)
    if(this.form.value["userPassword"] !== this.form.value["repPassword"]){
      return this.error = true
    }
    if(!auth){
      this.router.navigate(["login"])
      return this.data.setDataRegister(
        this.form.value["userName"],
        this.form.value["userSurName"],
        this.form.value["userBirtDay"],
        this.form.value["userEmail"],
        this.form.value["userPassword"])
    }else{
      this.errorPage = true
    }
}

g(){
    console.log(this.dataBase)
}


  constructor(private data: DataService, private router: Router) {

    this.form = new FormGroup({
      "userName": new FormControl("",[Validators.required]),
      "userSurName": new FormControl("",[Validators.required]),
      "userBirtDay": new FormControl("", [Validators.required]),
      "userEmail": new FormControl("",[Validators.email, Validators.required]),
      "userPassword": new FormControl("",[Validators.required]),
      "repPassword": new FormControl("",[Validators.required])
    })
  }

  ngOnInit(){
  }

  ngDoCheck(){
     this.dataBase = this.data.getData()
}

}
