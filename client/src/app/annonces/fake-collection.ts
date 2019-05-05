import { Annonce } from '../shared/models/annonce';
import { AnnonceCategory } from '../shared/enum/annonce-category.enum';
import { AnnonceState } from '../shared/enum/annonce-state.enum';
import { AnnonceType } from '../shared/enum/annonce-type.enum';

export const Collection: Annonce[] = [
  new Annonce({
    id: 1,
    title: 'Collection de livre sur l\'Ardèche',
    category: AnnonceCategory.BOOK,
    state: AnnonceState.OPEN,
    type: AnnonceType.OFFRE,
    adress: '2 cours de lardeche',
    city: 'Aubenas',
    owner: 'unardechois',
  }),
  new Annonce({
    id: 2,
    title: 'Autre objet',
    category: AnnonceCategory.OTHER,
    state: AnnonceState.OPEN,
    type: AnnonceType.OFFRE,
    adress: '2 cours de lardeche',
    city: 'Aubenas',
    owner: 'unardechois',
  }),
  new Annonce({
    id: 3,
    title: 'Une demande de libre super bien',
    category: AnnonceCategory.BOOK,
    state: AnnonceState.OPEN,
    type: AnnonceType.DEMANDE,
    adress: '2 cours de lardeche',
    city: 'Aubenas',
    owner: 'unardechois',
  }),
  new Annonce({
    id: 4,
    title: 'Une offre de livre finie !',
    category: AnnonceCategory.BOOK,
    state: AnnonceState.CLOSE,
    type: AnnonceType.OFFRE,
    adress: '2 cours de lardeche',
    city: 'Aubenas',
    owner: 'unardechois',
  }),
  new Annonce({
    id: 5,
    title: 'Une offre de livre finie2 !',
    category: AnnonceCategory.BOOK,
    state: AnnonceState.CLOSE,
    type: AnnonceType.OFFRE,
    adress: '2 cours de lardeche',
    city: 'Aubenas',
    owner: 'unardechois',
  }),
];
