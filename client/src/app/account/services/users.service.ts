import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { switchMap, map, tap } from 'rxjs/operators';

import { AuthService } from './../../core/auth/services/auth.service';
import { ConfigService } from 'src/app/core/config/config.service';
import { LoggerService } from 'src/app/core/logger/services/logger.service';
import { SessionService } from 'src/app/core/auth/services/session.service';

import { User } from 'src/app/shared/models/auth/user';
import { UserResponse } from 'src/app/shared/models/auth/user-response';
import { Credential } from 'src/app/shared/models/auth/credential';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(
    private http: HttpClient,
    private session: SessionService,
    private auth: AuthService,
    private config: ConfigService,
    private logger: LoggerService,
    private router: Router
  ) {}

  /**
   * Update a user and update the session
   */
  updateUser(user: User) {
    if (user) {
      return this.http
        .patch(`${this.getResourceBaseUrl()}/${user.id}`, user)
        .pipe(
          switchMap(() =>
            this.http.get<UserResponse>(`${this.getResourceBaseUrl()}/me`)
          ),
          map(userResponse => this.session.updateUser(new User(userResponse)))
        );
    }
  }

  /**
   * Récupère les informations courantes de l'utilisateur
   * puis patch le password.
   * @param info les informations de modification de password (id:userid)
   */
  updateUserPassword(info: {
    id: number;
    newPassword: string;
    confirmedPassword: string;
  }) {
    if (info.newPassword !== info.confirmedPassword) {
      throw new Error('Passwords missmatched');
    }
    return this.http.get<UserResponse>(`${this.getResourceBaseUrl()}/me`).pipe(
      map(user => {
        const newUser = new User(user);
        newUser.password = info.newPassword;
        return newUser;
      }),
      switchMap(user =>
        this.http.patch(`${this.getResourceBaseUrl()}/${user.id}`, user)
      )
    );
  }

  /**
   * créer l'utilisateur puis s'authentifie.
   * L'utilisateur est ensuite redirigé sur la page post login.
   */
  register(user: User) {
    if (user.password !== user.confirmedPassword) {
      throw new Error('Passwords missmatched');
    }
    delete user.confirmedPassword;
    return this.http.post(this.getResourceBaseUrl(), user).pipe(
      switchMap(() =>
        this.auth.signIn(
          new Credential({ email: user.email, password: user.password })
        )
      ),
      tap(() => this.logger.info('Register and login success!')),
      map(() => this.router.navigate(this.config.getPostLoginDefaultRoute()))
    );
  }

  private getResourceBaseUrl() {
    return `${this.config.getApiBaseUrl()}users`;
  }
}
