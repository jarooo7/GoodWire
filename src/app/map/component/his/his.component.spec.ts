/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HisComponent } from './his.component';

describe('HisComponent', () => {
  let component: HisComponent;
  let fixture: ComponentFixture<HisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
