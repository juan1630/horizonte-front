import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratoVidaPlenaComponent } from './contrato-vida-plena.component';

describe('ContratoVidaPlenaComponent', () => {
  let component: ContratoVidaPlenaComponent;
  let fixture: ComponentFixture<ContratoVidaPlenaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContratoVidaPlenaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratoVidaPlenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
