import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {  PosicionModel } from 'src/app/shared/search.model';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit {
  @Output() position = new EventEmitter();
  @Output() zoomIn = new EventEmitter();
  @Output() zoomOut= new EventEmitter();
  currentposition: PosicionModel;

  constructor() { }

  ngOnInit() {
  }

  public myPosition(): void {
    this.position.emit();
  } 
  public zoomInLocal(): void {
    this.zoomIn.emit();
  }
  public zoomOutLocal(): void {
    this.zoomOut.emit();
  }
}
