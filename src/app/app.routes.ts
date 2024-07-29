import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

export const routes: Routes = [
    {
        path: "home",
        component: ToolbarComponent
    },
    {
        path: "login",
        component: LoginComponent
    }
];
