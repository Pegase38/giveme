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
  ) {
    this.createForm();
  }

  ngOnInit() {}

  onLogin() {
    this.auth
      .signIn(new Credential(this.loginForm.value))
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        () => {
          this.logger.info('Login success!');
          this.router.navigate(this.config.getPostLoginDefaultRoute());
        },
        err => {
          /*this.messageService.add({ severity: 'error', summary: 'Login error' }*/
          this.invalidCredentials = true;
          this.logger.error(JSON.stringify(err));
        }
      );
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  private createForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }
}
