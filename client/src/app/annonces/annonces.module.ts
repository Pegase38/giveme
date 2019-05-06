import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnnoncesRoutingModule } from './annonces-routing.module';
import { OffresComponent } from './containers/offres/offres.component';
import { OffreComponent } from './components/offre/offre.component';

@NgModule({
  declarations: [OffresComponent, OffreComponent],
  imports: [
    CommonModule,
    AnnoncesRoutingModule
  ],
  exports: [OffresComponent]
})
export class AnnoncesModule { }
