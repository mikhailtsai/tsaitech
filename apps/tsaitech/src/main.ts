import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/components';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
