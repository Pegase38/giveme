import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Annonce } from 'src/app/shared/models/annonce';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.scss'],
})
export class OffreComponent implements OnInit {
  @Input() offre: Annonce;
  @Output() viewDetails: EventEmitter<number> = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  onClickView(offreId: number) {
    this.viewDetails.emit(offreId);
  }
}
