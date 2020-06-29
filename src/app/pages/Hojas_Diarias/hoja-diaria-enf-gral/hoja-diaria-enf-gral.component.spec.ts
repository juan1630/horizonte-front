import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HojaDiariaEnfGralComponent } from './hoja-diaria-enf-gral.component';

describe('HojaDiariaEnfGralComponent', () => {
  let component: HojaDiariaEnfGralComponent;
  let fixture: ComponentFixture<HojaDiariaEnfGralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HojaDiariaEnfGralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HojaDiariaEnfGralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
