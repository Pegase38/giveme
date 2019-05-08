import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IsUserUnknownGuard } from '../core/auth/guards/is-user-unknown.guard';
import { IsUserSignedInGuardGuard } from '../core/auth/guards/is-user-signed-in-guard.guard';
import { ProfileComponent } from './containers/profile/profile.component';
import { RegisterComponent } from './containers/register/register.component';
import { EditProfileComponent } from './containers/edit-profile/edit-profile.component';
import { ChangePasswordComponent } from './containers/change-password/change-password.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'profile',
    pathMatch: 'full',
  },
  {
    path: 'register',
    canActivate: [IsUserUnknownGuard],
    component: RegisterComponent,
  },
  {
    path: 'profile',
    canActivate: [IsUserSignedInGuardGuard],
    component: ProfileComponent,
  },
  {
    path: 'edit-profile',
    canActivate: [IsUserSignedInGuardGuard],
    component: EditProfileComponent,
  },
  {
    path: 'change-password',
    canActivate: [IsUserSignedInGuardGuard],
    component: ChangePasswordComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
