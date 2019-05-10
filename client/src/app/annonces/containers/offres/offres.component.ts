import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AnnonceService } from './../../services/annonce.service';
import { Annonce } from 'src/app/shared/models/annonce';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offres',
  templateUrl: './offres.component.html',
  styleUrls: ['./offres.component.scss'],
})
export class OffresComponent implements OnInit {
  offres$: Observable<Annonce[]>;
  constructor(private annonceService: AnnonceService, private router: Router) {
    this.offres$ = this.annonceService.getAnnonces();
  }

  ngOnInit() {}

  onViewDetails($event) {
    console.log($event);
    this.router.navigate(['annonces', 'details', $event]);
  }
}
