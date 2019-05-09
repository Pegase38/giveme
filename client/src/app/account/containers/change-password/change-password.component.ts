import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { UsersService } from '../../services/users.service';
import { SessionService } from '../../../core/auth/services/session.service';
import { User } from 'src/app/shared/models/auth/user';
import { MatchValidator } from 'src/app/shared/validators/match.validator';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();
  user: User;
  changePasswordForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private session: SessionService,
    private router: Router,
    private userService: UsersService
  ) {}

  ngOnInit() {
    this.session
      .getUser()
      .pipe(takeUntil(this.destroy$))
      .subscribe(user => {
        this.changePasswordForm = this.fb.group(
          {
            id: user.id,
            newPassword: ['', [Validators.required, Validators.minLength(8)]],
            confirmedPassword: ['', [Validators.required]],
          },
          {
            validator: MatchValidator('newPassword', 'confirmedPassword'),
          }
        );
        this.user = user;
      });
  }

  onChangePassword() {
    this.userService
      .updateUserPassword(this.changePasswordForm.value)
      .subscribe(() => {
        this.router.navigate(['account']);
      });
  }

  onCancel() {
    this.router.navigate(['account']);
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
