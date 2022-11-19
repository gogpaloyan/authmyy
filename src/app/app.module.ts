import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-global/login-page/login-page.component';
import { RegisterPageComponent } from './components/login-page/login-global/register-page/register-page.component';
import { HomePageComponent } from './components/apps/home-page/home-page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NavigationPageLoginComponent } from './components/login-page/navigation-page-login/navigation-page-login.component';
import { LoginGlobalComponent } from './components/login-page/login-global/login-global.component';
import {HttpClientModule} from "@angular/common/http";
import {DataService} from "./service/data/data.service";
import {CalendarModule} from "primeng/calendar";
import { AppsComponent } from './components/apps/home-page/apps/apps.component';
import { ModComponent } from './components/apps/home-page/mod/mod.component';
import { ProComponent } from './components/apps/home-page/pro/pro.component';
import { NavComponent } from './components/apps/home-page/nav/nav.component';
import { ProcomComponent } from './components/apps/home-page/pro/procom/procom.component';
import { ProminiComponent } from './components/apps/home-page/pro/promini/promini.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    HomePageComponent,
    NavigationPageLoginComponent,
    LoginGlobalComponent,
    AppsComponent,
    ModComponent,
    ProComponent,
    NavComponent,
    ProcomComponent,
    ProminiComponent,
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule,
        CalendarModule



    ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
