import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UltrasonidoComponent } from './ultrasonido.component';

describe('UltrasonidoComponent', () => {
  let component: UltrasonidoComponent;
  let fixture: ComponentFixture<UltrasonidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UltrasonidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UltrasonidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
