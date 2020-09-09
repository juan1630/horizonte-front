import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmaciaDashComponent } from './farmacia-dash.component';

describe('FarmaciaDashComponent', () => {
  let component: FarmaciaDashComponent;
  let fixture: ComponentFixture<FarmaciaDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmaciaDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmaciaDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
