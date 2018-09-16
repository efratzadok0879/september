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
  UploadImageComponent,
  AuthenticationService,

} from './imports';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    AccountMenuComponent,
    LoginComponent,
    RegisterComponent,
    UploadImageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
