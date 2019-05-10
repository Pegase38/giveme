import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IsUserSignedInGuardGuard } from '../core/auth/guards/is-user-signed-in-guard.guard';
import { OffresComponent } from './containers/offres/offres.component';
import { AddAnnoncesComponent } from './containers/add-annonces/add-annonces.component';
import { DetailsAnnoncesComponent } from './containers/details-annonces/details-annonces.component';

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
    path: 'details/:id',
    component: DetailsAnnoncesComponent,
  },
  {
    path: 'add-annonce',
    canActivate: [IsUserSignedInGuardGuard],
    component: AddAnnoncesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnnoncesRoutingModule {}
