import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HIngresoHospitalComponent } from './h-ingreso-hospital.component';

describe('HIngresoHospitalComponent', () => {
  let component: HIngresoHospitalComponent;
  let fixture: ComponentFixture<HIngresoHospitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HIngresoHospitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HIngresoHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
