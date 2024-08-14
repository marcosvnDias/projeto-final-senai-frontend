import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomeComponent } from './home/home.component';
import { ListDocenteComponent } from './list-docente/list-docente.component';
import { NotasAlunoComponent } from './notas-aluno/notas-aluno.component';

export const routes: Routes = [
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "listagem-docente",
        component: ListDocenteComponent
    },
    {
        path: "notas-aluno",
        component: NotasAlunoComponent
    }
];
