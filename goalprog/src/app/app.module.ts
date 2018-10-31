import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { HeadercomponentComponent } from './headercomponent/headercomponent.component';
//import { FootercomponentComponent } from './footercomponent/footercomponent.component';
import { BlueColorDirective } from './blue-color.directive';
import { BodyComponentComponent } from './body-component/body-component.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { 
  path: 'dashboard',
  component: DashboardComponent
  },

  {
    path: 'studentregistration',
    component: BodyComponentComponent
  },

  {
    path: '',
    component: HomeComponent
  }
  

];

@NgModule({
  declarations: [
    AppComponent,
    //HeadercomponentComponent,
    //FootercomponentComponent,
    HomeComponent,
    BlueColorDirective,
    BodyComponentComponent,
    DashboardComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
