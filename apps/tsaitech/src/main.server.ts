import { bootstrapApplication } from '@angular/platform-browser';
import { config } from './app/app.config.server';

import { AppComponent } from './app/components';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
