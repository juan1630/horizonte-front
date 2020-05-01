import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtrosEditComponent } from './otros-edit.component';

describe('OtrosEditComponent', () => {
  let component: OtrosEditComponent;
  let fixture: ComponentFixture<OtrosEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtrosEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtrosEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
