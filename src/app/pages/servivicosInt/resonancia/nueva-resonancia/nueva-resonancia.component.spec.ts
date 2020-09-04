import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaResonanciaComponent } from './nueva-resonancia.component';

describe('NuevaResonanciaComponent', () => {
  let component: NuevaResonanciaComponent;
  let fixture: ComponentFixture<NuevaResonanciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevaResonanciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaResonanciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
