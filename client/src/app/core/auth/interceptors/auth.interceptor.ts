import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable, config } from 'rxjs';
import { tap } from 'rxjs/operators';

import { AuthService } from '../services/auth.service';
import { LoggerService } from '../../logger/services/logger.service';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';
import { ConfigService } from '../../config/config.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private auth: AuthService,
    private session: SessionService,
    private logger: LoggerService,
    private router: Router,
    private config: ConfigService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authToken = this.auth.getAuthorizationToken();
    this.logger.info('authToken:' + authToken);
    const authReq = req.clone({
      headers: req.headers.set('Authorization', authToken),
    });

    return next.handle(authReq).pipe(
      tap(
        () => {},
        () => {
          this.session.markTokenExpired();
          this.router.navigate(this.config.getLoginRoute());
        }
      )
    );
  }
}
