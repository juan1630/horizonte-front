import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembresiaPaqueteComponent } from './membresia-paquete.component';

describe('MembresiaPaqueteComponent', () => {
  let component: MembresiaPaqueteComponent;
  let fixture: ComponentFixture<MembresiaPaqueteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembresiaPaqueteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembresiaPaqueteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
