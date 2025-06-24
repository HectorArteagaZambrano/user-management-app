import { Routes } from '@angular/router';

import { checkSelectedUserGuard, checkSelectedUserMatchGuard } from '@home/guards';

export const homeRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'detail',
                canMatch: [checkSelectedUserMatchGuard],
                canActivate: [checkSelectedUserGuard],
                loadComponent: () => import('@home/components/home-detail/home-detail.component').then((c) => c.HomeDetailComponent)
            },
            {
                path: '',
                loadComponent: () => import('@home/home.component').then((c) => c.HomeComponent)
            },
            {
                path: '**',
                redirectTo: ''
            }
        ]
    }
];