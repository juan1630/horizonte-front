import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtrosSIComponent } from './otros-s-i.component';

describe('OtrosSIComponent', () => {
  let component: OtrosSIComponent;
  let fixture: ComponentFixture<OtrosSIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtrosSIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtrosSIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
