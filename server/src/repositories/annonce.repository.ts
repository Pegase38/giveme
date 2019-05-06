import {DefaultCrudRepository} from '@loopback/repository';
import {Annonce} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class AnnonceRepository extends DefaultCrudRepository<
  Annonce,
  typeof Annonce.prototype.id
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Annonce, dataSource);
  }
}
