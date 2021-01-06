import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DateModel } from './marcer.model';

@Injectable({
  providedIn: 'root' 
})
export class MapService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<DateModel[]>('http://goodwire.cba.pl/api/survey');
  }

  twoH(){
    return this.http.get<DateModel[]>('http://goodwire.cba.pl/api/surveybetweenh');
  }

  betweenh(start:string, end:string){
    return this.http.get<DateModel[]>('http://goodwire.cba.pl/api/surveybetweenh/'+start+'/'+end);
  }
  loc(start:string, end:string,lat:number,lng:number,km:number){
    return this.http.get<DateModel[]>('http://goodwire.cba.pl/api/loc/'+start+'/'+end+'/'+lat+'/'+lng+'/'+km);
  }

}
