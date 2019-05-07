import { NgModule } from '@angular/core';

import { AnnoncesRoutingModule } from './annonces-routing.module';
import { SharedModule } from '../shared/shared.module';

import { OffresComponent } from './containers/offres/offres.component';
import { OffreComponent } from './components/offre/offre.component';

@NgModule({
  declarations: [OffresComponent, OffreComponent],
  imports: [SharedModule, AnnoncesRoutingModule],
  exports: [OffresComponent],
})
export class AnnoncesModule {}
