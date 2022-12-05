import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from "./components/login-page/login-global/login-page/login-page.component";
import {LoginGlobalComponent} from "./components/login-page/login-global/login-global.component";
import {RegisterPageComponent} from "./components/login-page/login-global/register-page/register-page.component";
import {HomePageComponent} from "./components/apps/home-page/home-page.component";
import {AppsComponent} from "./components/apps/home-page/apps/apps.component";
import {ProfileAppsComponent} from "./components/apps/home-page/profile-apps/profile-apps.component";
import {BasketComponent} from "./components/apps/home-page/basket/basket.component";

const routes: Routes = [
  {path: "", component: LoginGlobalComponent, children:[
      {path: "", redirectTo:"login", pathMatch: "full"},
      {path: "login", component: LoginPageComponent},
      {path: "register", component: RegisterPageComponent}
    ]},
  {path: "home", component: HomePageComponent, children:[
      {path: "", redirectTo: "apps", pathMatch: "full"},
      {path: "apps", component: AppsComponent},
      {path: "profile", component: ProfileAppsComponent},
      {path:"gg/:name/:id", loadChildren: () => import("./components/apps/home-page/pro/procom/procom.module")
          .then(m => m.ProcomModule)},
      {path: "pro", loadChildren: () => import("./components/apps/home-page/pro/pro-routes/pro.module")
          .then(m => m.ProModule)},
      {path: "basket", component: BasketComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
