import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Home } from './pages/home/home';
import { AddGame } from './pages/add-game/add-game';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'register', component: Register},
  { path: 'home', component: Home },
  { path: 'add-game', component: AddGame },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];