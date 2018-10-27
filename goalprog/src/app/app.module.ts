import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadercomponentComponent } from './headercomponent/headercomponent.component';
import { FootercomponentComponent } from './footercomponent/footercomponent.component';
import { BlueColorDirective } from './blue-color.directive';
import { BodyComponentComponent } from './body-component/body-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadercomponentComponent,
    FootercomponentComponent,
    BlueColorDirective,
    BodyComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
