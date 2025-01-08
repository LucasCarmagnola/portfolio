import { Routes } from '@angular/router';

export const routes: Routes = [

    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {
        path: 'home', loadComponent: () => import('./common/components/home/home.component')
        .then((c) => c.HomeComponent)
    },
    {
        path: 'clinic', loadComponent: () => import('./common/components/clinica/clinica.component')
        .then((c) => c.ClinicaComponent)
    }
];


