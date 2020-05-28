import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosLaboratorioComponent } from './pedidos-laboratorio.component';

describe('PedidosLaboratorioComponent', () => {
  let component: PedidosLaboratorioComponent;
  let fixture: ComponentFixture<PedidosLaboratorioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidosLaboratorioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosLaboratorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
