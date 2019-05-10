import { NgModule } from '@angular/core';

import { AnnoncesRoutingModule } from './annonces-routing.module';
import { SharedModule } from '../shared/shared.module';

import { OffresComponent } from './containers/offres/offres.component';
import { OffreComponent } from './components/offre/offre.component';
import { AddAnnoncesComponent } from './containers/add-annonces/add-annonces.component';
import { DetailsAnnoncesComponent } from './containers/details-annonces/details-annonces.component';

@NgModule({
  declarations: [
    OffresComponent,
    OffreComponent,
    AddAnnoncesComponent,
    DetailsAnnoncesComponent,
    DetailsAnnoncesComponent,
  ],
  imports: [SharedModule, AnnoncesRoutingModule],
})
export class AnnoncesModule {}
