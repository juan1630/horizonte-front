import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaMedGralComponent } from './consulta-med-gral.component';

describe('ConsultaMedGralComponent', () => {
  let component: ConsultaMedGralComponent;
  let fixture: ComponentFixture<ConsultaMedGralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaMedGralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaMedGralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
