import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { MapService } from 'src/app/shared/map.service';
import { RangeModel } from 'src/app/shared/marcer.model';
import { DeprecatedI18NPipesModule } from '@angular/common';

@Component({
  selector: 'app-his',
  templateUrl: './his.component.html',
  styleUrls: ['./his.component.scss']
})
export class HisComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<HisComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private survey: MapService) {}
    k1=0.5;
    d1:Date;

    pm1=[];
    pm25=[];
    pm10=[];
    time=[];
    temp=[];
    hu=[];
    press=[];
    hs=[];
    co=[];   
    nox=[];
    voc=[];
    nh3=[];
    
 
    lineChartData: ChartDataSets[] = [
      { data: this.pm1, label: 'PM1.0' },
      { data: this.pm25, label: 'PM2.5' },
      { data: this.pm10, label: 'PM10.0' },
    ];
    lineChartData2: ChartDataSets[] = [
      { data: this.hu, label: 'Wilgotność' },
    ];
    lineChartData3: ChartDataSets[] = [
      { data: this.temp, label: 'Temperatura' },
    ];
    lineChartData4: ChartDataSets[] = [
      { data: this.press, label: 'Ciśnienie' },
    ];
    lineChartData5: ChartDataSets[] = [
      { data: this.hs, label: 'H2S' },

    ];
    lineChartData6: ChartDataSets[] = [
 
      { data: this.co, label: 'CO2' },
    ];
    lineChartData7: ChartDataSets[] = [
 
      { data: this.nh3, label: 'NH3' },
    ];
  
    lineChartData8: ChartDataSets[] = [
 
      { data: this.voc, label: 'VOC' },
    ];
  
    lineChartData9: ChartDataSets[] = [
 
      { data: this.nox, label: 'NOx' },
    ];
  
  
    lineChartLabels: Label[] = this.time;
  
    lineChartOptions = {
      responsive: true,
    };
  
    lineChartColors: Color[] = [
      {
        borderColor: 'yellow',
        backgroundColor: 'rgba(255,255,0,0.28)',
      },
      {
        borderColor: 'red',
        backgroundColor: 'rgba(255,0,0,0.28)',
      },
      {
        borderColor: 'blue',
        backgroundColor: 'rgba(0,0,255,0.28)',
      },
    ];
    lineChartColors2: Color[] = [
     
      {
        borderColor: 'red',
        backgroundColor: 'rgba(255,0,0,0.28)',
      },
    ];
    
  
    lineChartLegend = true;
    lineChartPlugins = [];
    lineChartType = 'line';

  ngOnInit() {
    this.d1=new Date(this.data.dt);
    this.load();
  }

  load(){
    
    this.pm1=[];
    this.pm25=[];
    this.pm10=[];
    this.time=[];
    this.temp=[];
    this.hu=[];
    this.press=[];
    this.hs=[];
    this.co=[];
    this.nox=[];
    this.voc=[];
    this.nh3=[];
    const c= this.convert();
    console.log(c.start,c.end,this.data.lat,this.data.lng,this.k1);
    this.survey.loc(c.start,c.end,this.data.lat,this.data.lng,this.k1).subscribe(date=>{
      date.forEach(e=>{
        this.pm1.push(e.pm1);
        this.pm25.push(e.pm25);
        this.pm10.push(e.pm10);
        this.time.push(e.created_at);
        this.press.push(e.pressure);
        this.temp.push(e.temperature);
        this.hu.push(e.humidity);
        this.hs.push(e.HS);
        this.co.push(e.CO);
        this.nox.push(e.NO);
        this.voc.push(e.VO);
        this.nh3.push(e.NH);
      });
    });

    this.lineChartData = [
      { data: this.pm1, label: 'PM1.0' },
      { data: this.pm25, label: 'PM2.5' },
      { data: this.pm10, label: 'PM10.0' },
    ];
    this.lineChartData2 = [
      { data: this.hu, label: 'Wilgotność' },
    ];
    this.lineChartData3 = [
      { data: this.temp, label: 'Temperatura' },
    ];
    this.lineChartData4 = [
      { data: this.press, label: 'Ciśnienie' },
    ];
    this.lineChartData5 = [
      { data: this.hs, label: 'H2S' },

    ];
    this.lineChartData6 = [
 
      { data: this.co, label: 'CO2' },
    ];
    this.lineChartData7 = [
 
      { data: this.nh3, label: 'NH3' },
    ];
    this.lineChartData8 = [
 
      { data: this.voc, label: 'VOC' },
    ];
    this.lineChartData9 = [
 
      { data: this.nox, label: 'NOx' },
    ];
    this.lineChartLabels = this.time;
    console.log(this.pm1);
    
  }
  convert(){
    const start:string=this.d1.getFullYear().toString()+'-'+(this.d1.getMonth()+1).toString()+'-'+this.d1.getDate().toString()+' 00:00:00';
    const end:string=this.d1.getFullYear().toString()+'-'+(this.d1.getMonth()+1).toString()+'-'+this.d1.getDate().toString()+' 23:59:59';
    console.log({start:start,end:end});
    
    return {start:start,end:end};
  }

}
