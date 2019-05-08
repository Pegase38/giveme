import { NgModule } from '@angular/core';

import { AnnoncesRoutingModule } from './annonces-routing.module';
import { SharedModule } from '../shared/shared.module';

import { OffresComponent } from './containers/offres/offres.component';
import { OffreComponent } from './components/offre/offre.component';
import { AddAnnonceComponent } from './containers/add-annonce/add-annonce.component';

@NgModule({
  declarations: [OffresComponent, OffreComponent, AddAnnonceComponent],
  imports: [SharedModule, AnnoncesRoutingModule],
})
export class AnnoncesModule {}
