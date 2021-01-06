import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './components/app/app.component';
import { SharedModule } from '../shared/shared.module';
import { MapComponent } from '../map/component/map/map.component';
import { CoreRoutingModule } from './core-routing.module';
import { HereMapsModule } from 'ng2-heremaps';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { FormsModule } from '@angular/forms';
import { BarComponent } from '../map/component/bar/bar.component';
import { ControlComponent } from '../map/component/control/control.component';
import { ListComponent } from '../map/component/list/list.component';
import { InfoComponent } from '../map/component/info/info.component';
import { HisComponent } from '../map/component/his/his.component';
import { ChartsModule } from 'ng2-charts';
import { LoginComponent } from '../login/login/login.component';
import { AdminpanelComponent } from '../login/adminpanel/adminpanel.component';




@NgModule({
  declarations: [
    AppComponent, MapComponent,BarComponent,ControlComponent,
    ListComponent,InfoComponent,HisComponent,LoginComponent,
    AdminpanelComponent
  ],
  imports: [
    SharedModule,
    CoreRoutingModule,
    FormsModule,
    ChartsModule,
    LeafletModule.forRoot(),
    HereMapsModule.forRoot({
      apiKey: 'ntYFTfinNKdLttvqAGcHVimHEkVDOWwPAJLqOJmpHSE',
      appId: '8E0vnnobN855GkUXmJA2',
      apiVersion: '3.0',
      libraries: ['core', 'service']
    }),
  ],
  entryComponents:[ListComponent,InfoComponent,HisComponent]
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
