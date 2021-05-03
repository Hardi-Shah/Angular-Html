import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { InnerpageComponent } from './pages/innerpage/innerpage.component';
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
  },
  {
    path:'innerpage',
    component:InnerpageComponent,
    data: {
      title: 'InnerPage | Theme'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
