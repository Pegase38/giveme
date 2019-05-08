import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OffresComponent } from './containers/offres/offres.component';
import { AddAnnonceComponent } from './containers/add-annonce/add-annonce.component';
import { IsUserSignedInGuardGuard } from '../core/auth/guards/is-user-signed-in-guard.guard';

const routes: Routes = [
  // /annonces
  {
    path: '',
    redirectTo: 'offres',
  },
  {
    path: 'offres',
    component: OffresComponent,
  },
  {
    path: 'add-annonce',
    canActivate: [IsUserSignedInGuardGuard],
    component: AddAnnonceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnnoncesRoutingModule {}
