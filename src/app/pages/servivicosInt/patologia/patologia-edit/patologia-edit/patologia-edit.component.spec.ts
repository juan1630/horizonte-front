import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatologiaEditComponent } from './patologia-edit.component';

describe('PatologiaEditComponent', () => {
  let component: PatologiaEditComponent;
  let fixture: ComponentFixture<PatologiaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatologiaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatologiaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
