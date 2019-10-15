import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './components/app/app.component';
import { SharedModule } from '../shared/shared.module';
import { MapComponent } from '../map/component/map/map.component';
import { CoreRoutingModule } from './core-routing.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';



@NgModule({
  declarations: [
    AppComponent, MapComponent, NavBarComponent
  ],
  imports: [
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
