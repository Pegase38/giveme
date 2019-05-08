import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { UsersService } from '../../services/users.service';
import { ConfigService } from './../../../core/config/config.service';
import { LoggerService } from 'src/app/core/logger/services/logger.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  signupForm: FormGroup;
  constructor(
    private userService: UsersService,
    private config: ConfigService,
    private logger: LoggerService,
    private router: Router
  ) {
    this.signupForm = new FormGroup({
      email: new FormControl(),
      username: new FormControl(),
      password: new FormControl(),
      confirmedPassword: new FormControl(),
    });
  }

  ngOnInit() {}

  onSignup() {
    this.userService.addUser(this.signupForm.value).subscribe(
      () => {
        this.logger.info('Register and login success!');
        this.router.navigate(this.config.getPostLoginDefaultRoute());
      },
      err =>
        /*this.messageService.add({ severity: 'error', summary: 'Login error' }*/
        this.logger.error(err)
    );
  }
}
