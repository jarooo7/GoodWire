import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule,
  MatButtonToggleModule,
  MatIconModule, MatBadgeModule,
  MatProgressSpinnerModule,
  MatToolbarModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';




const material = [
  MatSidenavModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatToolbarModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    material
  ],
  exports: [
    CommonModule,
    material
  ]
})
export class SharedModule { }
