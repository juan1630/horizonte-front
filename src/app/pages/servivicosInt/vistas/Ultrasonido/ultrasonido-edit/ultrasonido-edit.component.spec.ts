import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UltrasonidoEditComponent } from './ultrasonido-edit.component';

describe('UltrasonidoEditComponent', () => {
  let component: UltrasonidoEditComponent;
  let fixture: ComponentFixture<UltrasonidoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UltrasonidoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UltrasonidoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
