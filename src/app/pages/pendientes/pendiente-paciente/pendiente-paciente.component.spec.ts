import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendientePacienteComponent } from './pendiente-paciente.component';

describe('PendientePacienteComponent', () => {
  let component: PendientePacienteComponent;
  let fixture: ComponentFixture<PendientePacienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendientePacienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendientePacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
