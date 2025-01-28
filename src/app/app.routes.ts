import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { AdminPanelComponent } from './pages/admin-panel/admin-panel.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
        title: "Log in"
    },
    {
        path: 'signup',
        component: SignupComponent,
        title: 'Sign up'
    },
    {
        path: 'home',
        component: HomeComponent,
        title: 'Spotify'
    },
    {
        path: 'admin',
        component: AdminPanelComponent,
        title: 'Admin Panel'
    },
    
];

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{ }