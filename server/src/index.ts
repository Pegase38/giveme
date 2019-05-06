import {GivemeApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {GivemeApplication};

export async function main(options: ApplicationConfig = {}) {
  const app = new GivemeApplication(options);
  await app.boot();
  await app.start();
  await app.static('/public' , './public');
  //this will serve the public folder of loopback on the root/public
  //public is where angular app is
  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
