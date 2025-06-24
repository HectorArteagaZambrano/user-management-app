import { Routes } from '@angular/router';

export const notificationsRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                loadComponent: () => import('@notifications/notifications.component').then((c) => c.NotificationsComponent)
            },
            {
                path: '**',
                redirectTo: ''
            }
        ]
    }
];