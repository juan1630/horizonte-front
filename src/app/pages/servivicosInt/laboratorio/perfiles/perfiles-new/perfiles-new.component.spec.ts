import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilesNewComponent } from './perfiles-new.component';

describe('PerfilesNewComponent', () => {
  let component: PerfilesNewComponent;
  let fixture: ComponentFixture<PerfilesNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilesNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilesNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
