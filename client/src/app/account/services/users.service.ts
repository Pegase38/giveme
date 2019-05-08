import { ConfigService } from 'src/app/core/config/config.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { switchMap, map } from 'rxjs/operators';

import { User } from 'src/app/shared/models/auth/user';
import { UserResponse } from 'src/app/shared/models/auth/user-response';
import { SessionService } from 'src/app/core/auth/services/session.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(
    private http: HttpClient,
    private session: SessionService,
    private config: ConfigService
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

  private getResourceBaseUrl() {
    return `${this.config.getApiBaseUrl()}users`;
  }
}
