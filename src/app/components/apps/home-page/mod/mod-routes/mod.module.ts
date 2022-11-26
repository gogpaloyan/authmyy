import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ModComponent} from "../mod.component";
import {ModRoutesModule} from "./mod-routes.module";



@NgModule({
  declarations: [ModComponent],
  imports: [
    CommonModule,
    ModRoutesModule
  ]
})
export class ModModule { }
