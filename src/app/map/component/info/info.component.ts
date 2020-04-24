import { Component,Inject, OnInit, } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { MarcerModel } from 'src/app/shared/marcer.model';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit  {
  tlo:string;
  text:string;
  emot:string;
  time: number;
  days: number;

  constructor(private _bottomSheetRef: MatBottomSheetRef<InfoComponent>,@Inject(MAT_BOTTOM_SHEET_DATA) public data: any) {}
  ngOnInit(): void {
    const current = new Date();
    const create = new Date(this.data.marker.created_at);
    this.days=(Math.trunc((current.getTime()-create.getTime()) / (1000 * 3600*24)));
    this.time=(Math.trunc((current.getTime()-create.getTime()) / (1000 * 3600)))-(this.days*24);
    if(this.data.marker.pm25<=13){
      this.tlo='../../../../assets/img/tlo1.png';
      this.text="Idealna jakość powietrza";
      this.emot="sentiment_very_satisfied";
    }
    else if(this.data.marker.pm25<=35){
      this.tlo='../../../../assets/img/tlo1.png';
      this.text="Bardzo dobre powietrze";
      this.emot="mood";
    }
    else if(this.data.marker.pm25<=55){
      this.tlo='../../../../assets/img/tlo2.png';
      this.text="Dobre powietrze";
      this.emot="sentiment_satisfied";
    }
    else if(this.data.marker.pm25<=75){
      this.tlo='../../../../assets/img/tlo2.png';
      this.text="Mogło by być lepjej";
      this.emot="sentiment_dissatisfied";
    }
    else if(this.data.marker.pm255<=110){
      this.tlo='../../../../assets/img/tlo3.png'; 
      this.text="Zła jakość powietrza";
      this.emot="mood_bad";
    }
    else {
      this.tlo='../../../../assets/img/tlo3.png'; 
      this.text="Bardzo złe powietrze";
      this.emot="sentiment_very_dissatisfied";
    }
  }

}
