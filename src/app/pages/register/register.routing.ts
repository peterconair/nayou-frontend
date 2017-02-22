import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
const route: Routes = [

    { path: 'register', component: RegisterComponent, pathMatch: 'full' },

];

export const registerRouting: ModuleWithProviders = RouterModule.forChild(route);