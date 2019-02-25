import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FourOhFourComponent } from './components/four-oh-four/four-oh-four.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: '**',
    component: FourOhFourComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
