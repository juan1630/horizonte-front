import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosIntComponent } from './servicios-int.component';

describe('ServiciosIntComponent', () => {
  let component: ServiciosIntComponent;
  let fixture: ComponentFixture<ServiciosIntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiciosIntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosIntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
