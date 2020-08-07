import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaqYMedicamentosPaqueteComponent } from './maq-ymedicamentos-paquete.component';

describe('MaqYMedicamentosPaqueteComponent', () => {
  let component: MaqYMedicamentosPaqueteComponent;
  let fixture: ComponentFixture<MaqYMedicamentosPaqueteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaqYMedicamentosPaqueteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaqYMedicamentosPaqueteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
