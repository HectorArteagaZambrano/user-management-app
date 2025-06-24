import { Routes } from '@angular/router';

export const authRoutes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('@auth/features/login/login.component').then((c) => c.LoginComponent)
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'login'
    }
];