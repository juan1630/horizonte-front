import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HojaDiariaHospitalizacionComponent } from './hoja-diaria-hospitalizacion.component';

describe('HojaDiariaHospitalizacionComponent', () => {
  let component: HojaDiariaHospitalizacionComponent;
  let fixture: ComponentFixture<HojaDiariaHospitalizacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HojaDiariaHospitalizacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HojaDiariaHospitalizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
