
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AnnonceService } from './../../services/annonce.service';
import { Annonce } from 'src/app/shared/models/annonce';

@Component({
  selector: 'app-offres',
  templateUrl: './offres.component.html',
  styleUrls: ['./offres.component.scss']
})
export class OffresComponent implements OnInit {
  offres$: Observable<Annonce[]>;
  constructor(private annonceService: AnnonceService) {
    this.offres$ = this.annonceService.getAnnonces();
  }

  ngOnInit() {}
}
