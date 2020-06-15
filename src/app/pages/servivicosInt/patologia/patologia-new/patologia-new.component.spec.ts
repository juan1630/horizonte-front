import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatologiaNewComponent } from './patologia-new.component';

describe('PatologiaNewComponent', () => {
  let component: PatologiaNewComponent;
  let fixture: ComponentFixture<PatologiaNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatologiaNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatologiaNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
