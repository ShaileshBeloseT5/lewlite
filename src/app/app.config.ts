import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import environments from './environments';

export const SERVER_API_URL=environments.SERVER_ADDRESS;

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
