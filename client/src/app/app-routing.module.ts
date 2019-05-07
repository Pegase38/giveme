import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IsUserSignedInGuardGuard } from './core/auth/guards/is-user-signed-in-guard.guard';

const routes: Routes = [
  {
    path: 'annonces',
    canActivate: [IsUserSignedInGuardGuard],
    loadChildren: './annonces/annonces.module#AnnoncesModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
