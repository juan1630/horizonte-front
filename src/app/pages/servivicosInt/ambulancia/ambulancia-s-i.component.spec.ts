import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbulanciaSIComponent } from './ambulancia-s-i.component';

describe('AmbulanciaSIComponent', () => {
  let component: AmbulanciaSIComponent;
  let fixture: ComponentFixture<AmbulanciaSIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmbulanciaSIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbulanciaSIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
