import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from '../map/component/map/map.component';
import { LoginComponent } from '../login/login/login.component';
import { AdminpanelComponent } from '../login/adminpanel/adminpanel.component';


const routes: Routes = [
  { path: 'map', component: MapComponent },
  { path: '', component: MapComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminpanelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
