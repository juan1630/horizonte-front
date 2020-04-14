import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalServiciosIntComponent } from './modal-servicios-int.component';

describe('ModalServiciosIntComponent', () => {
  let component: ModalServiciosIntComponent;
  let fixture: ComponentFixture<ModalServiciosIntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalServiciosIntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalServiciosIntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
