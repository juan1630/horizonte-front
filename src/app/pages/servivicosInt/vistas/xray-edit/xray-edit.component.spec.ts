import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XrayEditComponent } from './xray-edit.component';

describe('XrayEditComponent', () => {
  let component: XrayEditComponent;
  let fixture: ComponentFixture<XrayEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XrayEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XrayEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
