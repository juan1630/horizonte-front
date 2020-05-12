import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreciosMembresiaComponent } from './precios-membresia.component';

describe('PreciosMembresiaComponent', () => {
  let component: PreciosMembresiaComponent;
  let fixture: ComponentFixture<PreciosMembresiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreciosMembresiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreciosMembresiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
