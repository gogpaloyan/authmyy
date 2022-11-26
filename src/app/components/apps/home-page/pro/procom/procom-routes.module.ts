import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule, Routes, ROUTES} from "@angular/router";
import {ProcomComponent} from "./procom.component";


const router: Routes = [
  {path: "", component: ProcomComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(router)
  ]
})
export class ProcomRoutesModule { }
