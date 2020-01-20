import 'hammerjs';
import * as firebase from 'firebase/app';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import 'firebase/analytics';

import 'firebase/auth';
import 'firebase/firestore';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

firebase.initializeApp(environment.firebaseConfig);

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
