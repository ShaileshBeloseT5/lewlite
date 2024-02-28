import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';


export const routes: Routes = [

{
    path:'', redirectTo:'login',pathMatch:'full'
},
{

    path:'',
    component:LoginComponent
},
{
    path:'',
    component:LayoutComponent,
    children:[
        {
            path:'dashboard',
            component:DashboardComponent
        }
    ]
}

];
