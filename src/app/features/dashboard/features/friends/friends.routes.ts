import { Routes } from '@angular/router';

export const friendsRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                loadComponent: () => import('@friends/friends.component').then((c) => c.FriendsComponent)
            },
            {
                path: '**',
                redirectTo: ''
            }
        ]
    }
];