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
  MatExpansionModule,
  MatSnackBarModule} from '@angular/material';
  import {MatTableModule} from '@angular/material/table';
  import {MatPaginatorModule} from '@angular/material/paginator';
  import {MatSelectModule} from '@angular/material/select';

  import {MatDialogModule} from '@angular/material/dialog';
  import { ChartsModule } from 'ng2-charts';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
import {MatTabsModule} from '@angular/material/tabs';



const material = [
  MatPaginatorModule,
  MatTableModule,
  MatSidenavModule,
  MatTabsModule,
  MatButtonModule,
  MatListModule,
  MatButtonToggleModule,
  MatIconModule,
  MatSliderModule,
  MatInputModule,
  MatDialogModule,
  MatBottomSheetModule,
  MatBadgeModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatExpansionModule,
  MatNativeDateModule ,
  MatGridListModule,
  MatSelectModule,
  MatSnackBarModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ChartsModule,
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
