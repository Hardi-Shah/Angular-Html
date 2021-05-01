import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent,
    data: {
      title: 'Login | Theme'
    }
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    data: {
      title: 'Dashboard | Theme'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
