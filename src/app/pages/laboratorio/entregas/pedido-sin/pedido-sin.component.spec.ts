import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoSinComponent } from './pedido-sin.component';

describe('PedidoSinComponent', () => {
  let component: PedidoSinComponent;
  let fixture: ComponentFixture<PedidoSinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidoSinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoSinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
