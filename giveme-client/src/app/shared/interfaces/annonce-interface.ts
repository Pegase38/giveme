import { AnnonceCategory } from '../enum/annonce-category.enum';
import { AnnonceState } from '../enum/annonce-state.enum';
import { AnnonceType } from '../enum/annonce-type.enum';

export interface AnnonceInterface {
  id: number;
  title: string;
  photos: string[];
  category: AnnonceCategory;
  state: AnnonceState;
  type: AnnonceType;
  adress: string;
  city: string;
  owner: string;
  creationDate: string;
}
