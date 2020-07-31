import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JefaturaEnfermeriaComponent } from './jefatura-enfermeria.component';

describe('JefaturaEnfermeriaComponent', () => {
  let component: JefaturaEnfermeriaComponent;
  let fixture: ComponentFixture<JefaturaEnfermeriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JefaturaEnfermeriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JefaturaEnfermeriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
