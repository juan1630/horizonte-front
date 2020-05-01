import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagosMaternidadComponent } from './pagos-maternidad.component';

describe('PagosMaternidadComponent', () => {
  let component: PagosMaternidadComponent;
  let fixture: ComponentFixture<PagosMaternidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagosMaternidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagosMaternidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
