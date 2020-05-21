import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratoMaternidadComponent } from './contrato-maternidad.component';

describe('ContratoMaternidadComponent', () => {
  let component: ContratoMaternidadComponent;
  let fixture: ComponentFixture<ContratoMaternidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContratoMaternidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratoMaternidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
