import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatedComponent } from './templated.component';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule } from '@angular/forms';
import { CustomAgeValidator } from './custom-age.validator';
const routes: Routes = [
  {
    path: 'templated',
    component: TemplatedComponent
  }
]
@NgModule({
  declarations: [
    TemplatedComponent,
    CustomAgeValidator
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class TemplatedModule { }
