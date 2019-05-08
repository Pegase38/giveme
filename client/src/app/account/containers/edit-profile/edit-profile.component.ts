import { UsersService } from './../../services/users.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

import { User } from 'src/app/shared/models/auth/user';
import { SessionService } from 'src/app/core/auth/services/session.service';
import { takeUntil, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();
  user: User;
  editProfileForm: FormGroup;

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
        this.editProfileForm = new FormGroup({
          id: new FormControl(user.id),
          email: new FormControl(user.email),
          username: new FormControl(user.username),
        });
        this.user = user;
      });
  }

  onEditProfile() {
    this.userService.updateUser(this.editProfileForm.value).subscribe(() => {
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
