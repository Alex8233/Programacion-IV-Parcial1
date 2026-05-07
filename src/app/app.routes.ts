import { Routes } from '@angular/router';
import {Login} from './components/login/login';
import { Home } from './components/home/home';
import { Registros } from './components/registros/registros';
import { QuienSoy } from './components/quien-soy/quien-soy';
export const routes: Routes = [
    {path:'', redirectTo: 'home', pathMatch: 'full'},
    {path:'login',component:Login},
    {path:'registros',component:Registros},
    {path:'quien-soy',component:QuienSoy},
     {path: 'home', component: Home},
     {path:'**',redirectTo:'home'}
];
