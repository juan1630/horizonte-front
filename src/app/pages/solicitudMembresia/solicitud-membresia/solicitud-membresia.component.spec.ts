import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudMembresiaComponent } from './solicitud-membresia.component';

describe('SolicitudMembresiaComponent', () => {
  let component: SolicitudMembresiaComponent;
  let fixture: ComponentFixture<SolicitudMembresiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudMembresiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudMembresiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
