import { Component, OnInit, ViewChild } from '@angular/core';
import { MapService } from 'src/app/shared/map.service';
import { DateModel, DeviceModel, CodeModel } from 'src/app/shared/marcer.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.scss']
})
export class AdminpanelComponent implements OnInit {
  date: number;

  constructor( private router: Router,private survey: MapService,private _snackBar: MatSnackBar,public http: HttpClient) { }
  d1:Date= new Date;
  pomiary:DateModel[];
  pin:string;
  urzadzenia:DeviceModel[];
  code:CodeModel[];
   displayedColumns: string[] = [
    'id',
    'pm1',
    'pm25',
    'pm10',
    'created_at',
    'location',
    'device_id',
    'temperature',
    'pressure',
    'humidity',
    'H2S',
    'NH3',
    'NOx',
    'VOC',
    'CO2'
   ];
   displayedColumns2: string[] = [
    'key','tel','created_at','state'
   ];
   displayedColumns3: string[] = [
    'id','created_at','base_key'
   ];
   option1= [
    {value: 'active', viewValue: 'Aktywny'},
    {value: 'inactive', viewValue: 'Dezaktywowany'},
    {value: 'damaged', viewValue: 'Uszkodzony'}
  ];
  dataSource = new MatTableDataSource<DateModel>(this.pomiary);
  dataSource2 = new MatTableDataSource<DeviceModel>(this.urzadzenia);
  dataSource3 = new MatTableDataSource<CodeModel>(this.code);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatPaginator, {static: true}) paginator2: MatPaginator;
  @ViewChild(MatPaginator, {static: true}) paginator3: MatPaginator;
  ngOnInit() {
    if(localStorage.getItem('token')){
      this.date=0;
      const t= new Date();
      this.date=+localStorage.getItem('date');
      if(t.getTime()-this.date>1800000){
        localStorage.removeItem('token');
        localStorage.removeItem('date');
        this.router.navigate(['map']);
      }
      
    }
    else{
      this.router.navigate(['map']);
    }
    this.dataSource.paginator = this.paginator;
    this.dataSource2.paginator = this.paginator2;
    this.dataSource3.paginator = this.paginator3;
  }
  load(){
    const c= this.convert();
    this.survey.betweenh(c.start,c.end).subscribe(date=>{this.pomiary=date;
    console.log(this.pomiary);
    this.dataSource = new MatTableDataSource<DateModel>(this.pomiary);
    this.dataSource.paginator = this.paginator;
    })
  }
  convert(){
    const start:string=this.d1.getFullYear().toString()+'-'+(this.d1.getMonth()+1).toString()+'-'+this.d1.getDate().toString()+' 00:00:00';
    const end:string=this.d1.getFullYear().toString()+'-'+(this.d1.getMonth()+1).toString()+'-'+this.d1.getDate().toString()+' 23:59:59';
    console.log({start:start,end:end});
    
    return {start:start,end:end};
  }

  del(id){
    this.http.delete('http://goodwire.cba.pl/api/survey/'+id).subscribe(()=>{this.load();}
    ,()=>{this.load();});
    this.alert("Usunięto "+ id);
  }
  delK(id){
    this.http.delete('http://goodwire.cba.pl/api/key/'+id).subscribe(()=>{this.loadCode();}
    ,()=>{this.loadCode();});
   
  this.alert("Usunięto klucza");
  }
  loadDevice(){
    this.http.get<DeviceModel[]>('http://goodwire.cba.pl/api/device').subscribe(e=>{this.urzadzenia=e;
    this.dataSource2 = new MatTableDataSource<DeviceModel>(this.urzadzenia);
    this.dataSource2.paginator = this.paginator2;
  
  } );
  }

  loadCode(){
    
    this.http.get<CodeModel[]>('http://goodwire.cba.pl/api/key').subscribe(e=>{this.code=e;
    this.dataSource3 = new MatTableDataSource<CodeModel>(this.code);
    this.dataSource3.paginator = this.paginator3;
  
  } );
  }
  alert(e) {
    this._snackBar.open(e,'', {
      duration: 6000,
      verticalPosition: 'bottom',
	      horizontalPosition: 'start',
    });
  }
  error(e) {
    this._snackBar.open(e,'', {
      duration: 6000,
      verticalPosition: 'bottom',
	      horizontalPosition: 'start',
      panelClass: ['alert-waring'],
    });
  }
  
  

  addKey(){
    let valid=true;
    if(this.pin.length==17){
      valid=false;
    }
    for(let i=0;i<this.pin.length;i++){
      if((i+1)%5==0){
        if(this.pin[i]!='-'){
          valid=false;
        }
      } else{
        if(!(this.pin[i]>='A'&&this.pin[i]<='Z')){
          valid=false;
        }
      }
    }
    if(valid){
    this.http.post<any>('http://goodwire.cba.pl/api/key',{base_key:this.pin}).subscribe(e=>{
      this.loadCode();
    this.dataSource3 = new MatTableDataSource<CodeModel>(this.code);
    this.dataSource3.paginator = this.paginator3;
    this.alert("Dodano nowy klucz bazowy")
  
  } );
  }
else{
  this.error('Zły format!!');
}
}

  zmien(element:DeviceModel){
    console.log(element);
    this.http.put<DeviceModel>('http://goodwire.cba.pl/api/device/'+element.key,{state:element.state}).subscribe(e=>{console.log(e);
  },e=>{console.log(e);
  })
  }
  color(e){
    if(e==this.option1[0].value){
      return '#A2FFC1'
    } else if(e==this.option1[1].value){
      return '#FFED9F'
    } else{
      return '#FF8B8B'
    }
  }
  logout(){
    localStorage.removeItem('date');
    localStorage.removeItem('token');
   this.http.get<any>('http://goodwire.cba.pl/api/logout').subscribe(e=>{
     
    });
    this.router.navigate(['map']);
  }
  logo(){
    this.router.navigate(['map']);
  }
}