import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HojaDiariaComponent } from './hoja-diaria.component';

describe('HojaDiariaComponent', () => {
  let component: HojaDiariaComponent;
  let fixture: ComponentFixture<HojaDiariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HojaDiariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HojaDiariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
