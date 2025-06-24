import { Routes } from '@angular/router';

export const messagesRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                loadComponent: () => import('@messages/messages.component').then((c) => c.MessagesComponent)
            },
            {
                path: '**',
                redirectTo: ''
            }
        ]
    }
];