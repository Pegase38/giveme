import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

import { UsersService } from '../../services/users.service';
import { LoggerService } from 'src/app/core/logger/services/logger.service';
import { MatchValidator } from 'src/app/shared/validators/match.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  signupForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private userService: UsersService,
    private logger: LoggerService
  ) {}

  ngOnInit() {
    this.createForm();
  }

  onSignup() {
    if (this.signupForm.valid) {
      this.userService
        .register(this.signupForm.value)
        .subscribe(() => {}, err => this.logger.error(JSON.stringify(err)));
    }
  }

  // TOOD : verify unicity for email/username & matched passwords
  private createForm() {
    this.signupForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        username: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmedPassword: ['', [Validators.required]],
      },
      {
        validator: MatchValidator('password', 'confirmedPassword'),
      }
    );
  }
}
