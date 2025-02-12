import { Routes } from '@angular/router';

export const routes: Routes = [

    {path: '', redirectTo: '/home/en', pathMatch: 'full'},
    {
        path: 'home/en', loadComponent: () => import('./common/components/home/home.component')
        .then((c) => c.HomeComponent)
    },
    {
        path: 'home/es', loadComponent: () => import('./common/components/home-es/home-es.component')
        .then((c) => c.HomeEsComponent)
    },
    {
        path: 'proyectos/en', loadComponent: () => import('./common/components/proyectos/proyectos.component')
        .then((c) => c.ProyectosComponent)
    },
    {
        path: 'proyectos/es', loadComponent: () => import('./common/components/proyectos-es/proyectos-es.component')
        .then((c) => c.ProyectosEsComponent)
    }
];


