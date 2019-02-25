import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplatedModule } from './features/templated/templated.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FourOhFourComponent } from './components/four-oh-four/four-oh-four.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FourOhFourComponent
  ],
  imports: [
    BrowserModule,
    TemplatedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
