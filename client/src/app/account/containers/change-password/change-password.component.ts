import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { takeUntil } from 'rxjs/operators';
import { SessionService } from 'src/app/core/auth/services/session.service';
import { User } from 'src/app/shared/models/auth/user';

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
    private session: SessionService,
    private router: Router,
    private userService: UsersService
  ) {}

  ngOnInit() {
    this.session
      .getUser()
      .pipe(takeUntil(this.destroy$))
      .subscribe(user => {
        this.changePasswordForm = new FormGroup({
          id: new FormControl(user.id),
          newPassword: new FormControl(),
          confirmedPassword: new FormControl(),
        });
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
