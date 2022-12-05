import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppState} from "./store/state/todo.state";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {CalendarModule} from "primeng/calendar";
import {NgxsModule} from "@ngxs/store";

import {DataService} from "./service/data/data.service";
import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-global/login-page/login-page.component';
import { RegisterPageComponent } from './components/login-page/login-global/register-page/register-page.component';
import { HomePageComponent } from './components/apps/home-page/home-page.component';
import { NavigationPageLoginComponent } from './components/login-page/navigation-page-login/navigation-page-login.component';
import { LoginGlobalComponent } from './components/login-page/login-global/login-global.component';
import { AppsComponent } from './components/apps/home-page/apps/apps.component';
import { ProComponent } from './components/apps/home-page/pro/pro.component';
import { NavComponent } from './components/apps/home-page/nav/nav.component';
import { ProcomComponent } from './components/apps/home-page/pro/procom/procom.component';
import { ProminiComponent } from './components/apps/home-page/pro/promini/promini.component';
import { ProfileAppsComponent } from './components/apps/home-page/profile-apps/profile-apps.component';
import {ProService} from "./service/pro/pro.service";
import { BasketComponent } from './components/apps/home-page/basket/basket.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    HomePageComponent,
    NavigationPageLoginComponent,
    LoginGlobalComponent,
    AppsComponent,
    ProComponent,
    NavComponent,
    ProcomComponent,
    ProminiComponent,
    ProfileAppsComponent,
    BasketComponent,
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule,
        CalendarModule,
        NgxsModule.forRoot([AppState])
    ],
  providers: [DataService, ProService],
  bootstrap: [AppComponent]
})
export class AppModule { }
