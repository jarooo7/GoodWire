import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {

  logo ='../../../../assets/img/logo4.png'
  classLogo='mini';
  icon='settings'
  classOptions='hide';
  show=false;
  h1=0;
  h2=0;
  constructor() { }

  ngOnInit() {
  }

  formatLabel(value: number) {
  
    return value;
  }

  showBar(){
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

}
