import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HojaFramComponent } from './hoja-fram.component';

describe('HojaFramComponent', () => {
  let component: HojaFramComponent;
  let fixture: ComponentFixture<HojaFramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HojaFramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HojaFramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
