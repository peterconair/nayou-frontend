import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './component/content/content.component';
import { DashbaordComponent } from './component/dashbaord/dashbaord.component';
import { MonitorComponent } from './component/monitor/monitor.component';
import { UsersComponent } from './pages/users/users.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
//import { UserlistComponent } from './component/users/userlist/userlist.component';

import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'content', component: ContentComponent },
  { path: 'dashboard', component: DashbaordComponent },
  { path: 'monitor', component: MonitorComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);