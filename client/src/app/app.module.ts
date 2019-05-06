
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { UserInterfaceModule } from './user-interface/user-interface.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    UserInterfaceModule,
    LoginModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/app/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
