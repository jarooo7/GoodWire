import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './core/components/app/app.component';
import { CoreModule } from './core/core.module';
import { RouterModule } from '@angular/router';
import { MapComponent } from './map/component/map/map.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  imports: [
    BrowserModule,
    CoreModule.forRoot(),
    RouterModule,
    ChartsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
