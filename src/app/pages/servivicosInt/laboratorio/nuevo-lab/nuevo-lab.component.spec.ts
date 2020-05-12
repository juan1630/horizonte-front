import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoLabComponent } from './nuevo-lab.component';

describe('NuevoLabComponent', () => {
  let component: NuevoLabComponent;
  let fixture: ComponentFixture<NuevoLabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoLabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
