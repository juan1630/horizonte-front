import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TomografiaNewComponent } from './tomografia-new.component';

describe('TomografiaNewComponent', () => {
  let component: TomografiaNewComponent;
  let fixture: ComponentFixture<TomografiaNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TomografiaNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TomografiaNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
