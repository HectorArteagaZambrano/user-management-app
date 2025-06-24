import { Routes } from '@angular/router';

import { LayoutComponent } from '@core/layout/layout.component';
import { authIsAuthenticatedGuardFn, redirectIfAuthenticatedGuardFn } from '@core/guards';

export const routes: Routes = [
    {
        path: 'auth',
        canMatch: [redirectIfAuthenticatedGuardFn],
        loadChildren: () => import('./features/auth/auth.routes').then((m) => m.authRoutes)
    },
    {
        path: 'dashboard',
        component: LayoutComponent,
        canMatch: [authIsAuthenticatedGuardFn],
        loadChildren: () => import('./features/dashboard/dashboard.routes').then((m) => m.dashboardRoutes)
    },
    {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'auth'
    }
];