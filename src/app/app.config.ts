import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { routes } from './app.routes';

import {
  handleAuthTokenInterceptor,
  handleEnvironmentInterceptor,
  handleErrorInterceptor,
  handleSpinnerInterceptor
} from '@shared/interceptors';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(
      withInterceptors([
        handleAuthTokenInterceptor,
        handleEnvironmentInterceptor,
        handleSpinnerInterceptor,
        handleErrorInterceptor])
    )]
};