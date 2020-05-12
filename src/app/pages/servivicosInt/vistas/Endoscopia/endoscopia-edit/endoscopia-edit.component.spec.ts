import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndoscopiaEditComponent } from './endoscopia-edit.component';

describe('EndoscopiaEditComponent', () => {
  let component: EndoscopiaEditComponent;
  let fixture: ComponentFixture<EndoscopiaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndoscopiaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndoscopiaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
