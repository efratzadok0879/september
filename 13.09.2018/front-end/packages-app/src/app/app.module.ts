import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import{
  AppComponent,
  AccountComponent,
  AccountMenuComponent,
  LoginComponent,
  RegisterComponent,
  AuthenticationService,
  routing

} from './imports';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    AccountMenuComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
