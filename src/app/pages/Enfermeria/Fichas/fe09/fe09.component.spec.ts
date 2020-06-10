import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FE09Component } from './fe09.component';

describe('FE09Component', () => {
  let component: FE09Component;
  let fixture: ComponentFixture<FE09Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FE09Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FE09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
