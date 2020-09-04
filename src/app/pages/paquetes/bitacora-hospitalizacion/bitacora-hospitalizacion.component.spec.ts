import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitacoraHospitalizacionComponent } from './bitacora-hospitalizacion.component';

describe('BitacoraHospitalizacionComponent', () => {
  let component: BitacoraHospitalizacionComponent;
  let fixture: ComponentFixture<BitacoraHospitalizacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitacoraHospitalizacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitacoraHospitalizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
