import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map, tap, switchMap, finalize, first } from 'rxjs/operators';

import { SessionService } from './session.service';
import { ConfigService } from '../../config/config.service';
import { Credential } from 'src/app/shared/models/auth/credential';
import { SessionState } from 'src/app/shared/models/auth/session-state';
import { AuthResponse } from 'src/app/shared/models/auth/auth-response';
import { UserResponse } from 'src/app/shared/models/auth/user-response';
import { User } from 'src/app/shared/models/auth/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  tokenKey = 'Bearer';
  authorizationToken: string;

  constructor(
    private http: HttpClient,
    private session: SessionService,
    private config: ConfigService
  ) {
    this.session.getToken().subscribe(token => {
      this.authorizationToken = token;
    });
  }

  signIn(credential: Credential) {
    return this.http
      .post<AuthResponse>(`${this.getResourceBaseUrl()}/login`, credential)
      .pipe(
        tap(authResponse =>
          this.session.updateState(
            new SessionState({
              token: authResponse.token,
            })
          )
        ),
        switchMap(() =>
          this.http.get<UserResponse>(`${this.getResourceBaseUrl()}/me`)
        ),
        map(userResponse => this.session.updateUser(new User(userResponse))),
        map(() => undefined)
      );
  }

  /*signOut() {
    this.session.state$
      .pipe(
        first(),
        map(state => state.tokenId),
        switchMap(tokenId =>
          this.http.delete(
            `${this.getResourceBaseUrl()}/${encodeURIComponent(tokenId)}`
          )
        ),
        finalize(() => this.session.updateState(new SessionState()))
      )
      .subscribe();
  }*/

  getAuthorizationToken(): string {
    return `${this.tokenKey} ${encodeURIComponent(this.authorizationToken)}`;
  }

  private getResourceBaseUrl() {
    return `${this.config.getApiBaseUrl()}users`;
  }
}
