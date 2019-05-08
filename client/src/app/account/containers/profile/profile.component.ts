import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { SessionService } from 'src/app/core/auth/services/session.service';
import { User } from 'src/app/shared/models/auth/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user$: Observable<User>;
  constructor(private session: SessionService) {}

  ngOnInit() {
    this.user$ = this.session.getUser();
  }
}
