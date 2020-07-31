import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltoRiesgoComponent } from './alto-riesgo.component';

describe('AltoRiesgoComponent', () => {
  let component: AltoRiesgoComponent;
  let fixture: ComponentFixture<AltoRiesgoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltoRiesgoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltoRiesgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
