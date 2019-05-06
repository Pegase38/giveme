import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Annonce} from '../models';
import {AnnonceRepository} from '../repositories';

export class AnnonceController {
  constructor(
    @repository(AnnonceRepository)
    public annonceRepository : AnnonceRepository,
  ) {}

  @post('/annonces', {
    responses: {
      '200': {
        description: 'Annonce model instance',
        content: {'application/json': {schema: {'x-ts-type': Annonce}}},
      },
    },
  })
  async create(@requestBody() annonce: Annonce): Promise<Annonce> {
    return await this.annonceRepository.create(annonce);
  }

  @get('/annonces/count', {
    responses: {
      '200': {
        description: 'Annonce model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Annonce)) where?: Where,
  ): Promise<Count> {
    return await this.annonceRepository.count(where);
  }

  @get('/annonces', {
    responses: {
      '200': {
        description: 'Array of Annonce model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Annonce}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Annonce)) filter?: Filter,
  ): Promise<Annonce[]> {
    return await this.annonceRepository.find(filter);
  }

  @patch('/annonces', {
    responses: {
      '200': {
        description: 'Annonce PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() annonce: Annonce,
    @param.query.object('where', getWhereSchemaFor(Annonce)) where?: Where,
  ): Promise<Count> {
    return await this.annonceRepository.updateAll(annonce, where);
  }

  @get('/annonces/{id}', {
    responses: {
      '200': {
        description: 'Annonce model instance',
        content: {'application/json': {schema: {'x-ts-type': Annonce}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Annonce> {
    return await this.annonceRepository.findById(id);
  }

  @patch('/annonces/{id}', {
    responses: {
      '204': {
        description: 'Annonce PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() annonce: Annonce,
  ): Promise<void> {
    await this.annonceRepository.updateById(id, annonce);
  }

  @put('/annonces/{id}', {
    responses: {
      '204': {
        description: 'Annonce PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() annonce: Annonce,
  ): Promise<void> {
    await this.annonceRepository.replaceById(id, annonce);
  }

  @del('/annonces/{id}', {
    responses: {
      '204': {
        description: 'Annonce DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.annonceRepository.deleteById(id);
  }
}
