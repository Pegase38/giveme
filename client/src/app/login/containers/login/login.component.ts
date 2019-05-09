import { LoggerService } from './../../../core/logger/services/logger.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
  invalidCredentials = false;

  constructor(
    private auth: AuthService,
    private router: Router,
    private config: ConfigService,
    private logger: LoggerService
  ) {}

  ngOnInit() {
    this.createForm();
  }

  onLogin() {
    if (this.loginForm.valid) {
      this.auth
        .signIn(new Credential(this.loginForm.value))
        .pipe(takeUntil(this.destroy$))
        .subscribe(
          () => {
            this.logger.info('Login success!');
            this.router.navigate(this.config.getPostLoginDefaultRoute());
          },
          err => {
            this.invalidCredentials = true;
            this.logger.error(JSON.stringify(err));
          }
        );
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  private createForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }
}
