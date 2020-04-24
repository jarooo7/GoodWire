import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';
import { HttpClient } from '@angular/common/http';
import { SearchModel, PosicionModel } from 'src/app/shared/search.model';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ListComponent } from '../list/list.component';
import { MapService } from 'src/app/shared/map.service';
import { MarcerModel } from 'src/app/shared/marcer.model';
import { InfoComponent } from '../info/info.component';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {
  tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  });
  text: string;
  lat: number;
  lng: number;
  zoom: number;
  marcer: MarcerModel[]=[];


  search: SearchModel[] = [];



  constructor(private http: HttpClient, private _bottomSheet: MatBottomSheet,private survey: MapService) { }
  private map;

  ngAfterViewInit(): void {
    this.tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

     this.map = L.map('map', {
      center: [52.224894, 19.217089],
      zoom: 7
    });
    this.lat = 52.224894;
    this.lng = 19.217089;
    this.zoom = 7;
    this.tiles.addTo(this.map);
    this.loadMarker();
    
  }

  loadMarker(){
 this.survey.getAll().subscribe(date=>{
   date.forEach(e=>{
     let slat;
    let slng;

     if(e.location.includes('E')){
       slng=1;
     }
     else if(e.location.includes('W')){
       slng=-1;
     }else{return;}
     if(e.location.includes('N')){
       slat=1;
     }
     else if(e.location.includes('S')){
       slat=-1;
     }else{return;}
    
     const lat=parseFloat(e.location.substr(0,e.location.indexOf('N')));
    const lng=parseFloat(e.location.substr(e.location.indexOf('N')+1).substr(0,e.location.indexOf('.')+6));
    const xlat=(((lat/100-Math.trunc(lat/100))/60)*100)+Math.trunc(lat/100)*slat;
    const xlng=(((lng/100-Math.trunc(lng/100))/60)*100)+Math.trunc(lng/100)*slng;
    const m:MarcerModel={
      pm1: e.pm1, 
      pm10: e.pm10,
       pm25: e.pm25,
       created_at: e.created_at,
       pressure: e.pressure, 
       temperature: e.temperature,
       humidity: e.humidity,
       HS: e.HS,
       CO: e.CO,
       device_id: e.device_id,
       lat: xlat,
      lng: xlng
      }
    this.marcer.push(m);
      let color;
      if(e.pm25<=13){
        color='#18FF33';
      }
      else if(e.pm25<=35){
        color='#67FF4D';
      }
      else if(e.pm25<=55){
        color='yellow';
      }
      else if(e.pm25<=75){
       color='#FFB91F';
      }
      else if(e.pm25<=110){
        color='#FF3D17';
      }
      else {
        color='#C11131';
      }
    L.circleMarker([xlat, xlng],{
      radius: 10,
      color: color
    }).on('click',()=>{this.openBaner(m)}).addTo(this.map);
   });
   console.log(this.marcer);
   console.log(date);
 });

  }

  openBaner(marcer: MarcerModel){
    this._bottomSheet.open(InfoComponent, {
      data: { marker: marcer }
    });
  }

  searchCity(): void {
    if (this.text == null || this.text == undefined) {
      return;
    }

    this.search = [];
    this.http.get<any>('https://geocode.search.hereapi.com/v1/geocode?q=' + this.text + '&apiKey=ntYFTfinNKdLttvqAGcHVimHEkVDOWwPAJLqOJmpHSE&appId=8E0vnnobN855GkUXmJA2')
      .subscribe(data => {
        data.items.forEach(e => {
          this.search.push({ address: e.address, position: e.position })
        });;

        if (this.search.length > 1) {
          const sheet = this._bottomSheet.open(ListComponent, {
            data: { search: this.search }
          });
          sheet.afterDismissed().subscribe(r => {
            this.lat = r.position.lat;
            this.lng = r.position.lng;
            this.zoom = 13;
      this.map.setView([this.lat, this.lng], this.zoom);
          });
          

        }
       
        else{
        this.lat = this.search[0].position.lat;
        this.lng = this.search[0].position.lng;
        this.zoom = 13;
      this.map.setView([this.lat, this.lng], this.zoom);
      }
        

      });

  }
  position(): void {
    navigator.geolocation.getCurrentPosition(position2 => {
      this.lat = position2.coords.latitude;
      this.lng = position2.coords.longitude;
      this.zoom = 13;
      this.map.setView([this.lat, this.lng], this.zoom);
    });

  }


  zoomIn() {
    if (this.zoom == 15) {
      return
    }
  
    this.zoom++;
    this.tiles.addTo(this.map);
    this.map.setView([this.lat, this.lng], this.zoom);
  }
  zoomOut() {
    if (this.zoom == 0) {
      return
    }
   
    this.zoom--;
    this.tiles.addTo(this.map);
    this.map.setView([this.lat, this.lng], this.zoom);

  
  }


}