import { Routes } from '@angular/router';

export const dashboardRoutes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('@home/home.routes').then((r) => r.homeRoutes),
    },
    {
        path: 'friends',
        loadChildren: () => import('@friends/friends.routes').then((r) => r.friendsRoutes),
    },
    {
        path: 'cats',
        loadChildren: () => import('@cats/cats.routes').then((r) => r.catsRoutes),
    },
    {
        path: 'messages',
        loadChildren: () => import('@messages/messages.routes').then((r) => r.messagesRoutes),
    },
    {
        path: 'notifications',
        loadChildren: () => import('@notifications/notifications.routes').then((r) => r.notificationsRoutes),
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
