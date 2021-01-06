import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { RangeModel } from 'src/app/shared/marcer.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { flatten } from '@angular/compiler';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {

  @Output() twoHEmitter = new EventEmitter();
 
  @Output() rangeEmitter: EventEmitter<RangeModel> = new EventEmitter();

  logo ='../../../../assets/img/logo4.png'
  classLogo='mini';
  icon='settings'
  classOptions='hide';
  key:string;
  pin:string;
  sim:string;
  show=false;
  h1=0;
  h2=23;
  flaga=false;
  d1:Date=new Date();
  d2:Date=new Date();
  constructor(private _snackBar: MatSnackBar,private router: Router,public http:HttpClient) { }

  ngOnInit() {
    this.flaga=localStorage.getItem("token")!=null
  }

  public twoH(): void {
    this.twoHEmitter.emit();
  } 
  public day(): void {
    if(this.d1==null||this.d2==null){
      this.alert('Wprowadź datę');
      return;
    }
    const r={
      hStart:0,
      hEnd:23,
      dStart:new Date,
      dEnd:new Date
    }
    this.rangeEmitter.emit(r);
  } 

  alert(e) {
    this._snackBar.open(e,'', {
      duration: 6000,
      verticalPosition: 'bottom',
	      horizontalPosition: 'start',
      panelClass: ['alert-waring'],
    });
  }

  public range(): void {
    if(this.d1==null||this.d2==null){
      this.alert('Wprowadź datę');
      return;
    }
    const r={
      hStart:this.h1,
      hEnd:this.h2,
      dStart:this.d1,
      dEnd:this.d2
    }
    this.rangeEmitter.emit(r);
  } 

 
  showBar(){
    this.flaga=localStorage.getItem('token')!=null
    if(this.show==false){
      this.classOptions='show';
      this.classLogo='max';
      this.show = true;
      this.icon='clear';
    }
    else{
      this.icon='settings';
      this.classOptions='hide';
      this.classLogo='mini';
      this.show = false;
    }
  }
  goAdmin(){
    this.router.navigate(['admin']);
  }
  add(){
    if(this.key==null||this.key==''){
      this.alert('Wprowadź klucz');
      return;
    }
    this.http.post<any>("http://goodwire.cba.pl/api/device",{key: this.key, pin: this.pin, tel: this.sim})
  .subscribe(e=>{
    this.key='';
    this.pin='';
    this.sim='';
  
  },error=>{ this.alert('Błądny kod');}
  );
  }

}
