import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { UserInterfaceModule } from './user-interface/user-interface.module';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './core/auth/interceptors/auth.interceptor';
import { LoggerInterceptor } from './core/logger/interceptors/logger.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    UserInterfaceModule,
    LoginModule,
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/app/' },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggerInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
