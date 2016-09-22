import { NgModule }      from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { DashboardComponent }   from './dashboard.component';
@NgModule({
  imports:      [ BrowserModule,Router, RouterOutlet ],
  declarations: [ AppComponent,DashboardComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
