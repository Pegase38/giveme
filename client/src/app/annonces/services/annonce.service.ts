import { Injectable } from '@angular/core';
import { Collection } from '../fake-collection';
import { Annonce } from 'src/app/shared/models/annonce';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {
  private collection: Annonce[] = Collection;
  constructor() {}

  getAnnonces() {
    return this.collection;
  }

  add(annonce: Annonce) {
    if (annonce) {
      this.collection.push(new Annonce(annonce));
    }
  }

  edit(annonce: Annonce) {
    console.log('edit prestation');
    console.log(annonce);
  }
}
