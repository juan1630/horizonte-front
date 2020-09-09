import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultasGralComponent } from './consultas-gral.component';

describe('ConsultasGralComponent', () => {
  let component: ConsultasGralComponent;
  let fixture: ComponentFixture<ConsultasGralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultasGralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultasGralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
