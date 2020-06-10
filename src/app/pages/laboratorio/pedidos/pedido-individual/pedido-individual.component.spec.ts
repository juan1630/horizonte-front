import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoIndividualComponent } from './pedido-individual.component';

describe('PedidoIndividualComponent', () => {
  let component: PedidoIndividualComponent;
  let fixture: ComponentFixture<PedidoIndividualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidoIndividualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
