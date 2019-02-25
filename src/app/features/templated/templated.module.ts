import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatedComponent } from './templated.component';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';

const routes: Routes = [
  {
    path: 'templated',
    component: TemplatedComponent
  }
]
@NgModule({
  declarations: [TemplatedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TemplatedModule { }
