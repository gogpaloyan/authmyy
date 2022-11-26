import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute, RouterModule, Routes} from "@angular/router";
import {ProComponent} from "../pro.component";


const routes: Routes = [
  {path:"", component:ProComponent},

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProRoutesModule { }
