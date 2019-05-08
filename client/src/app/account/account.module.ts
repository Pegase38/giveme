import { NgModule } from '@angular/core';

import { AccountRoutingModule } from './account-routing.module';
import { SharedModule } from '../shared/shared.module';

import { RegisterComponent } from './containers/register/register.component';
import { ProfileComponent } from './containers/profile/profile.component';
import { EditProfileComponent } from './containers/edit-profile/edit-profile.component';
import { ChangePasswordComponent } from './containers/change-password/change-password.component';

@NgModule({
  declarations: [
    RegisterComponent,
    ProfileComponent,
    EditProfileComponent,
    ChangePasswordComponent,
  ],
  imports: [SharedModule, AccountRoutingModule],
})
export class AccountModule {}
