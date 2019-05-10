import { Component, OnInit } from '@angular/core';
import { AnnonceService } from '../../services/annonce.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { Annonce } from 'src/app/shared/models/annonce';

@Component({
  selector: 'app-details-annonces',
  templateUrl: './details-annonces.component.html',
  styleUrls: ['./details-annonces.component.scss'],
})
export class DetailsAnnoncesComponent implements OnInit {
  annonce$: Observable<Annonce>;
  constructor(
    private annonceService: AnnonceService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.annonce$ = this.activatedRoute.params.pipe(
      map(params => params.id),
      switchMap(id => this.annonceService.getAnnonce(id))
    );
  }
}
