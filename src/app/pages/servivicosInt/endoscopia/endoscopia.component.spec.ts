import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndoscopiaComponent } from './endoscopia.component';

describe('EndoscopiaComponent', () => {
  let component: EndoscopiaComponent;
  let fixture: ComponentFixture<EndoscopiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndoscopiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndoscopiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
