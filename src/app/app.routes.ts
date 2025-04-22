import { Routes } from '@angular/router';
import { DesktopComponent } from './desktop/desktop/desktop.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'desktop',
        pathMatch:'full'
    },
    {
        path:'desktop',
        component:DesktopComponent
    },
];
