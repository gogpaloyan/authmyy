import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ModComponent} from "../mod.component";


const routes: Routes = [
  {path: "", component: ModComponent}
]

@NgModule({
  declarations: [],
  imports: [[RouterModule.forChild(routes)]],
  exports: [RouterModule]
})
export class ModRoutesModule { }
