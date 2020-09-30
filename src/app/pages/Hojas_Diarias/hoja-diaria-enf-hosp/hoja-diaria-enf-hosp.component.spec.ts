import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HojaDiariaEnfHospComponent } from './hoja-diaria-enf-hosp.component';

describe('HojaDiariaEnfHospComponent', () => {
  let component: HojaDiariaEnfHospComponent;
  let fixture: ComponentFixture<HojaDiariaEnfHospComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HojaDiariaEnfHospComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HojaDiariaEnfHospComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
