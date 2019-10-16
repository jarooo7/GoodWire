import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './components/app/app.component';
import { SharedModule } from '../shared/shared.module';
import { MapComponent } from '../map/component/map/map.component';
import { AngularYandexMapsModule } from 'angular8-yandex-maps';
import { CoreRoutingModule } from './core-routing.module';




@NgModule({
  declarations: [
    AppComponent, MapComponent
  ],
  imports: [
    AngularYandexMapsModule.forRoot('43731ef9-5a6d-4bc5-91d0-baefba8c1982'),
    SharedModule,
    CoreRoutingModule
  ],
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }


  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule
    };
  }

}
