import { Routes } from '@angular/router';

export const catsRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                loadComponent: () => import('@cats/cats.component').then((c) => c.CatsComponent)
            },
            {
                path: '**',
                redirectTo: ''
            }
        ]
    }
];