import {BootMixin} from '@loopback/boot';
import {ApplicationConfig} from '@loopback/core';
import {
  RestExplorerBindings,
  RestExplorerComponent,
} from '@loopback/rest-explorer';
import {RepositoryMixin} from '@loopback/repository';
import {RestApplication} from '@loopback/rest';
import {ServiceMixin} from '@loopback/service-proxy';
import * as path from 'path';
import {MySequence} from './sequence';
import {
  AuthenticationComponent,
  AuthenticationBindings,
} from '@loopback/authentication';

import {JWTAuthenticationBindings, PasswordHasherBindings} from './keys';
import {JWTStrategy} from './authentication-strategies/JWT.strategy';
import {AuthenticateActionProvider} from './providers/auth-strategy.provider';
import {
  JWT_SECRET,
  JWTAuthenticationService,
} from './services/JWT.authentication.service';
import {BcryptHasher} from './services/hash.password.bcryptjs';
import {StrategyResolverProvider} from './providers/strategy.resolver.provider';

export class GivemeApplication extends BootMixin(
  ServiceMixin(RepositoryMixin(RestApplication)),
) {
  constructor(options: ApplicationConfig = {}) {
    super(options);

    // Set up the custom sequence
    this.sequence(MySequence);

    // Bind authentication component related elements
    this.component(AuthenticationComponent);
    this.bind(AuthenticationBindings.AUTH_ACTION).toProvider(
      AuthenticateActionProvider,
    );
    this.bind(AuthenticationBindings.STRATEGY).toProvider(
      StrategyResolverProvider,
    );

    // Bind JWT authentication strategy related elements
    this.bind(JWTAuthenticationBindings.STRATEGY).toClass(JWTStrategy);
    this.bind(JWTAuthenticationBindings.SECRET).to(JWT_SECRET);
    this.bind(JWTAuthenticationBindings.SERVICE).toClass(
      JWTAuthenticationService,
    );

    // Bind bcrypt hash services
    this.bind(PasswordHasherBindings.ROUNDS).to(10);
    this.bind(PasswordHasherBindings.PASSWORD_HASHER).toClass(BcryptHasher);

    // Set up default home page
    this.static('/', path.join(__dirname, '../public'));
    this.static('/app/*', path.join(__dirname, '../public'));

    // Customize @loopback/rest-explorer configuration here
    this.bind(RestExplorerBindings.CONFIG).to({
      path: '/explorer',
    });
    this.component(RestExplorerComponent);

    this.projectRoot = __dirname;
    // Customize @loopback/boot Booter Conventions here
    this.bootOptions = {
      controllers: {
        // Customize ControllerBooter Conventions here
        dirs: ['controllers'],
        extensions: ['.controller.js'],
        nested: true,
      },
    };
  }
}
