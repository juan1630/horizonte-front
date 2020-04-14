import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiscalesComponent } from './fiscales.component';

describe('FiscalesComponent', () => {
  let component: FiscalesComponent;
  let fixture: ComponentFixture<FiscalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiscalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiscalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
