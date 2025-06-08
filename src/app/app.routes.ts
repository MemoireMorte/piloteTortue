import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { MouvementsComponent } from './components/mouvements/mouvements';
import { ActionsComponent } from './components/actions/actions';
import { RoutinesComponent } from './components/routines/routines';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'mouvements',
        component: MouvementsComponent
    },
    {
        path: 'actions',
        component: ActionsComponent
    },
    {
        path: 'routines',
        component: RoutinesComponent
    }
];
