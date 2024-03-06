import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import environments from './environments';
import { provideHttpClient } from '@angular/common/http';

export const SERVER_API_URL=environments.SERVER_ADDRESS;

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),provideHttpClient()]
};

