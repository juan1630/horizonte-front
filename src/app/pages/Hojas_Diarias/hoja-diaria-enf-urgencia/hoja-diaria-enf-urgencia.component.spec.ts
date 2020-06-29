import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HojaDiariaEnfUrgenciaComponent } from './hoja-diaria-enf-urgencia.component';

describe('HojaDiariaEnfUrgenciaComponent', () => {
  let component: HojaDiariaEnfUrgenciaComponent;
  let fixture: ComponentFixture<HojaDiariaEnfUrgenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HojaDiariaEnfUrgenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HojaDiariaEnfUrgenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
