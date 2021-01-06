import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {MAT_BOTTOM_SHEET_DATA} from '@angular/material/bottom-sheet';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  constructor(private _bottomSheetRef: MatBottomSheetRef<ListComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any) {}

  openLink(item): void {   
    this._bottomSheetRef.dismiss(item); 
  }
}
