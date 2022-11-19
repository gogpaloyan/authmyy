import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {DataService} from "../../../../service/data/data.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass']
})
export class LoginPageComponent implements OnInit {
  forms: FormGroup
  error:boolean = false
  dataBase: any;

  submit(){
    this.dataBase.filter((user:any) => {
       if(this.forms.value["userEmail"] === user.auth.userEmail && this.forms.value["userPassword"] === user.auth.userPassword){
         this.data.database = user
         return this.router.navigate(["home"])
       }else{
         return this.error = true
       }
    })
  }

  constructor(private router: Router, private data: DataService) {

    this.forms = new FormGroup({
      'userEmail': new FormControl(
        "",
        [Validators.required, Validators.email]),

      'userPassword': new FormControl(
        "",
        [Validators.required, Validators.minLength(4)]
      )
    })
  }

  ngOnInit(){

  }

  ngDoCheck(){
    this.dataBase = this.data.getData()
  }
}
