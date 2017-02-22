import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/shared/header/header.component';
import { FooterComponent } from './component/shared/footer/footer.component';
import { SideMenubarComponent } from './component/shared/side-menubar/side-menubar.component';
import { ContentComponent } from './component/content/content.component';
import { DashbaordComponent } from './component/dashbaord/dashbaord.component';
import { MonitorComponent } from './component/monitor/monitor.component';
import { SideMenubarBottomComponent } from './component/shared/side-menubar/side-menubar-bottom/side-menubar-bottom.component';
import { NavbarToolbarRightComponent } from './component/shared/header/navbar-toolbar-right/navbar-toolbar-right.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarHeaderComponent } from './component/shared/header/navbar-header/navbar-header.component';
import { NavbarContainerComponent } from './component/shared/header/navbar-container/navbar-container.component';

import { LoginModule } from './pages/login/login.module';
import { RegisterModule } from './pages/register/register.module';
import { UsersModule } from "./pages/users/users.module";

import {usersRouting} from "./pages/users/users.routing"
import {registerRouting} from "./pages/register/register.routing"
import {loginRouting} from "./pages/login/login.routing"

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideMenubarComponent,
    ContentComponent,
    DashbaordComponent,
    MonitorComponent,
    SideMenubarBottomComponent,
    NavbarToolbarRightComponent,
    NotFoundComponent,
    NavbarHeaderComponent,
    NavbarContainerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    
    UsersModule,
    LoginModule,
    RegisterModule,

    usersRouting,
    loginRouting,
    registerRouting,
    routing
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
