import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XraySIComponent } from './xray-s-i.component';

describe('XraySIComponent', () => {
  let component: XraySIComponent;
  let fixture: ComponentFixture<XraySIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XraySIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XraySIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
