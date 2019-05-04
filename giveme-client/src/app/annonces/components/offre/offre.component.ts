import { Component, OnInit, Input } from '@angular/core';
import { Annonce } from 'src/app/shared/models/annonce';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.scss']
})
export class OffreComponent implements OnInit {
  @Input() offre: Annonce;
  constructor() {}

  ngOnInit() {}
}
