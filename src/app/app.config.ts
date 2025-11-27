import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'centrocomercial-1b300',
        appId: '1:1069518352276:web:885a00c6707d051b2c2981',
        storageBucket: 'centrocomercial-1b300.firebasestorage.app',
        apiKey: 'AIzaSyC7IqVNC219dPDl29o98a6qfQ331vrDU6I',
        authDomain: 'centrocomercial-1b300.firebaseapp.com',
        messagingSenderId: '1069518352276',
        measurementId: 'G-7VJB9E33VL'
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
};
