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

}
