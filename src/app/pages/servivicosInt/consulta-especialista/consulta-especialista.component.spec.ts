import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaEspecialistaComponent } from './consulta-especialista.component';

describe('ConsultaEspecialistaComponent', () => {
  let component: ConsultaEspecialistaComponent;
  let fixture: ComponentFixture<ConsultaEspecialistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaEspecialistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaEspecialistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
