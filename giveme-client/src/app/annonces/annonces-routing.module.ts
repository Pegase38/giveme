import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OffresComponent } from './containers/offres/offres.component';

const routes: Routes = [
  // /annonces
  {
    path: '',
    redirectTo: 'offres'
  },
  {
    path: 'offres',
    component: OffresComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnnoncesRoutingModule {}
