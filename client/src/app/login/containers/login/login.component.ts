import { LoggerService } from './../../../core/logger/services/logger.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

import { AuthService } from 'src/app/core/auth/services/auth.service';
import { ConfigService } from 'src/app/core/config/config.service';
import { Credential } from 'src/app/shared/models/auth/credential';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();
  loginForm: FormGroup;
  constructor(
    private auth: AuthService,
    private router: Router,
    private config: ConfigService,
    private logger: LoggerService
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  ngOnInit() {}

  onLogin() {
    this.auth
      .signIn(new Credential(this.loginForm.value))
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        () => {
          this.logger.info('Login sucess!');
          this.router.navigate(this.config.getPostLoginDefaultRoute());
        },
        err =>
          /*this.messageService.add({ severity: 'error', summary: 'Login error' }*/
          this.logger.error(err)
      );
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
