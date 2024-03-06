import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { Ak23CardComponent } from './components/ak23-card/ak23-card.component';
import { FingerSearchComponent } from './components/finger-search/finger-search.component';
import { IdentitySearchComponent } from './components/identity-search/identity-search.component';
import { ReportsComponent } from './components/reports/reports.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { LayoutComponent } from './components/layout/layout.component';

export const routes: Routes = [
    {
        path: '', redirectTo: 'login', pathMatch: 'full'
    },
    {

        path: '',
        component: LoginComponent
    },
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            }
        ]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '**',
        component: LoginComponent
    }

];
