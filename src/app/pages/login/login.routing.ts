import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';

const route: Routes = [

  { path: 'login', component: LoginComponent, pathMatch: 'full' },

];

export const loginRouting = RouterModule.forChild(route);