import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaCotizacionComponent } from './tarjeta-cotizacion.component';

describe('TarjetaCotizacionComponent', () => {
  let component: TarjetaCotizacionComponent;
  let fixture: ComponentFixture<TarjetaCotizacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaCotizacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaCotizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
