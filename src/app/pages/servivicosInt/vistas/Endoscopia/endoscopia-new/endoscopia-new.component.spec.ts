import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndoscopiaNewComponent } from './endoscopia-new.component';

describe('EndoscopiaNewComponent', () => {
  let component: EndoscopiaNewComponent;
  let fixture: ComponentFixture<EndoscopiaNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndoscopiaNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndoscopiaNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
