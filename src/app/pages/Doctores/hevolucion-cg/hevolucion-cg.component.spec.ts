import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HEvolucionCGComponent } from './hevolucion-cg.component';

describe('HEvolucionCGComponent', () => {
  let component: HEvolucionCGComponent;
  let fixture: ComponentFixture<HEvolucionCGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HEvolucionCGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HEvolucionCGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
