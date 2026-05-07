import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { logging } from './interceptors/logging';
import { retryInterceptor } from './interceptors/retry';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors,withFetch } from '@angular/common/http';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes), provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch(),withInterceptors([logging, retryInterceptor]))
  ]
};
