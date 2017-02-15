/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SateliteViewComponent } from './satelite-view.component';

describe('SateliteViewComponent', () => {
  let component: SateliteViewComponent;
  let fixture: ComponentFixture<SateliteViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SateliteViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SateliteViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
