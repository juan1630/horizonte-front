import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarMaquinasComponent } from './agregar-maquinas.component';

describe('AgregarMaquinasComponent', () => {
  let component: AgregarMaquinasComponent;
  let fixture: ComponentFixture<AgregarMaquinasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarMaquinasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarMaquinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
