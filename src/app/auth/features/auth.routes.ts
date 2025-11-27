import { Routes } from "@angular/router";

export default [
    {
        path: 'inicio',
        loadComponent: () => import('./sign-in/sign-in.component')
    },
    {
        path: 'salida',
        loadComponent: () => import('./sign-up/sign-up.component')
    },
] as Routes;

