import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XrayNewComponent } from './xray-new.component';

describe('XrayNewComponent', () => {
  let component: XrayNewComponent;
  let fixture: ComponentFixture<XrayNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XrayNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XrayNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
