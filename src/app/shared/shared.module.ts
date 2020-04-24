import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule,
  MatButtonToggleModule,
  MatIconModule, MatBadgeModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatBottomSheetModule,
  MatListModule,
  MatSliderModule,
  MatGridListModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatExpansionModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';



const material = [
  MatSidenavModule,
  MatButtonModule,
  MatListModule,
  MatButtonToggleModule,
  MatIconModule,
  MatSliderModule,
  MatInputModule,
  MatBottomSheetModule,
  MatBadgeModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatExpansionModule,
  MatNativeDateModule ,
  MatGridListModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    
    HttpClientModule,
    material
  ],
  exports: [
    HttpClientModule,
    CommonModule,
    material
  ]
})
export class SharedModule { }
