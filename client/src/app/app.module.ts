import { LoginModule } from './login/login.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserInterfaceModule } from './user-interface/user-interface.module';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    UserInterfaceModule,
    LoginModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/app/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
