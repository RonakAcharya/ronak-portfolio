import { Routes } from '@angular/router';
import { DesktopComponent } from './desktop/desktop/desktop.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'',
        pathMatch:'full',
        component:DesktopComponent
    },
    {
        path:'',
        component:DesktopComponent
    },
];
