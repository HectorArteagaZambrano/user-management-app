import { Routes } from '@angular/router';

import { LayoutComponent } from '@core/layout/layout.component';
import { authIsAuthenticatedGuardFn, redirectIfAuthenticatedGuardFn } from '@core/guards';

export const routes: Routes = [
    {
        path: 'auth',
        canMatch: [redirectIfAuthenticatedGuardFn],
        loadChildren: () => import('@auth/auth.routes').then((r) => r.authRoutes)
    },
    {
        path: 'dashboard',
        component: LayoutComponent,
        canMatch: [authIsAuthenticatedGuardFn],
        loadChildren: () => import('@dashboard/dashboard.routes').then((r) => r.dashboardRoutes)
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