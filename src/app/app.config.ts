import { APP_INITIALIZER, ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { IconResolver } from './services/icon-resolver.service';

function initializeIconRegistry(iconResolver: IconResolver): () => Promise<void> {
  return () => iconResolver.loadRegistry();
}

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeIconRegistry,
      deps: [IconResolver],
      multi: true
    },
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes)
  ]
};
