import { AnnonceService } from './../../services/annonce.service';
import { Component, OnInit } from '@angular/core';
import { Annonce } from 'src/app/shared/models/annonce';

@Component({
  selector: 'app-offres',
  templateUrl: './offres.component.html',
  styleUrls: ['./offres.component.scss']
})
export class OffresComponent implements OnInit {
  offres: Annonce[] = [];
  constructor(private annonceService: AnnonceService) {
    this.offres = annonceService.getAnnonces();
  }

  ngOnInit() {}
}
