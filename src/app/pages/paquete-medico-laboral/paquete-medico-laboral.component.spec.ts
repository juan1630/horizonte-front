import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaqueteMedicoLaboralComponent } from './paquete-medico-laboral.component';

describe('PaqueteMedicoLaboralComponent', () => {
  let component: PaqueteMedicoLaboralComponent;
  let fixture: ComponentFixture<PaqueteMedicoLaboralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaqueteMedicoLaboralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaqueteMedicoLaboralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
