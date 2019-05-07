import {Entity, model, property} from '@loopback/repository';

@model()
export class Annonce extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

  @property({
    type: 'string',
    required: true,
    default: 'Other',
  })
  category: string;

  @property({
    type: 'string',
    required: true,
    default: 'Open',
  })
  state: string;

  @property({
    type: 'number',
    required: true,
    default: 1,
  })
  type: number;

  @property({
    type: 'string',
  })
  adress?: string;

  @property({
    type: 'string',
  })
  city?: string;

  @property({
    type: 'date',
  })
  createdDate?: string;

  constructor(data?: Partial<Annonce>) {
    super(data);
  }
}
