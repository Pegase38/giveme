import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { SessionService } from 'src/app/core/auth/services/session.service';
import { ConfigService } from 'src/app/core/config/config.service';

@Component({
  selector: 'app-user-interface',
  templateUrl: './user-interface.component.html',
  styleUrls: ['./user-interface.component.scss'],
})
export class UserInterfaceComponent implements OnInit, OnDestroy {
  isSignedIn$: Observable<boolean>;

  constructor(
    private session: SessionService,
    private router: Router,
    private config: ConfigService
  ) {}

  ngOnInit() {
    this.isSignedIn$ = this.session.isSignedIn();
  }

  onLogout() {
    this.session.markTokenExpired();
    this.router.navigate(this.config.getPostLogoutDefaultRoute());
  }

  ngOnDestroy(): void {}
}
