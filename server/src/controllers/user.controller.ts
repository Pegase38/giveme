import {inject} from '@loopback/context';
import {post, requestBody, get, param, patch} from '@loopback/rest';
import {Setter} from '@loopback/core';
import {repository} from '@loopback/repository';
import {
  UserProfile,
  AuthenticationBindings,
  authenticate,
} from '@loopback/authentication';

import _ = require('lodash');

import {User} from '../models';
import {UserRepository, Credentials} from '../repositories';
import {JWTAuthenticationBindings, PasswordHasherBindings} from '../keys';
import {PasswordHasher} from '../services/hash.password.bcryptjs';
import {
  JWTAuthenticationService,
  validateCredentials,
} from '../services/JWT.authentication.service';
import {
  CredentialsRequestBody,
  UserProfileSchema,
} from './specs/user-controller.specs';

export class UserController {
  constructor(
    @repository(UserRepository) public userRepository: UserRepository,
    @inject.setter(AuthenticationBindings.CURRENT_USER)
    public setCurrentUser: Setter<UserProfile>,
    @inject(PasswordHasherBindings.PASSWORD_HASHER)
    public passwordHahser: PasswordHasher,
    @inject(JWTAuthenticationBindings.SERVICE)
    public jwtAuthenticationService: JWTAuthenticationService,
  ) {}

  @post('/users')
  async create(@requestBody() user: User): Promise<User> {
    validateCredentials(_.pick(user, ['email', 'password']));
    user.password = await this.passwordHahser.hashPassword(user.password);

    // Save & Return Result
    const savedUser = await this.userRepository.create(user);
    delete savedUser.password;
    return savedUser;
  }

  @get('/users/me', {
    responses: {
      '200': {
        description: 'The current user profile',
        content: {
          'application/json': {
            schema: UserProfileSchema,
          },
        },
      },
    },
  })
  @authenticate('jwt')
  async printCurrentUser(
    @inject('authentication.currentUser') currentUser: UserProfile,
  ): Promise<User> {
    return this.userRepository.findById((currentUser.id as unknown) as number);
  }

  @post('/users/login', {
    responses: {
      '200': {
        description: 'Token',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                token: {
                  type: 'string',
                },
              },
            },
          },
        },
      },
    },
  })
  async login(
    @requestBody(CredentialsRequestBody) credentials: Credentials,
  ): Promise<{token: string}> {
    validateCredentials(credentials);
    const token = await this.jwtAuthenticationService.getAccessTokenForUser(
      credentials,
    );
    return {token};
  }

  @patch('/users/{id}', {
    responses: {
      '204': {
        description: 'User PATCH success',
      },
    },
  })
  @authenticate('jwt')
  async updateById(
    @inject('authentication.currentUser') currentUser: UserProfile,
    @param.path.number('id') id: number,
    @requestBody() user: User,
  ): Promise<void> {
    if (((currentUser.id as unknown) as number) !== id)
      throw Error("Can't modify others users");
    if (user.password !== undefined && currentUser.email !== undefined) {
      validateCredentials({email: currentUser.email, password: user.password});
      user.password = await this.passwordHahser.hashPassword(user.password);
    }
    await this.userRepository.updateById(id, user);
  }
}
