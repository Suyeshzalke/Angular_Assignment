import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './User/login/login.component';
import { RegisterComponent } from './User/register/register.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ActivateGuard } from './activate.guard';
import { DashboardGuard } from './dashboard.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component:  HomeComponent},
  { path: 'login', component:  LoginComponent},
  { path: 'register', component:  RegisterComponent},
  { path: 'dashboard', component:  DashboardComponent,canActivate:[ActivateGuard]},


 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
