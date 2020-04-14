import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaqueteMaternidadComponent } from './paquete-maternidad.component';

describe('PaqueteMaternidadComponent', () => {
  let component: PaqueteMaternidadComponent;
  let fixture: ComponentFixture<PaqueteMaternidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaqueteMaternidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaqueteMaternidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
