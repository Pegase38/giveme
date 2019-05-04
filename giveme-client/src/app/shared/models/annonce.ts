import { AnnonceInterface } from '../interfaces/annonce-interface';
import { AnnonceCategory } from '../enum/annonce-category.enum';
import { AnnonceState } from '../enum/annonce-state.enum';
import { AnnonceType } from '../enum/annonce-type.enum';

export class Annonce implements AnnonceInterface {
  id: number;
  title: string;
  photos: string[];
  category: AnnonceCategory = AnnonceCategory.OTHER;
  state: AnnonceState = AnnonceState.OPEN;
  type: AnnonceType = AnnonceType.OFFRE;
  adress: string;
  city: string;
  owner: string;
  creationDate: string = new Date().toISOString();

  constructor(fields?: Partial<Annonce> & Pick<Annonce, 'id'>) {
    if (fields) {
      Object.assign(this, fields);
    }
  }
}
