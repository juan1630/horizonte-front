import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HEvolucionCEComponent } from './hevolucion-ce.component';

describe('HEvolucionCEComponent', () => {
  let component: HEvolucionCEComponent;
  let fixture: ComponentFixture<HEvolucionCEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HEvolucionCEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HEvolucionCEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
