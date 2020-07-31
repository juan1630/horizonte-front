import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnfermeriaDashboardComponent } from './enfermeria-dashboard.component';

describe('EnfermeriaDashboardComponent', () => {
  let component: EnfermeriaDashboardComponent;
  let fixture: ComponentFixture<EnfermeriaDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnfermeriaDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnfermeriaDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
