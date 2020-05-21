import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratoMLaboralComponent } from './contrato-m-laboral.component';

describe('ContratoMLaboralComponent', () => {
  let component: ContratoMLaboralComponent;
  let fixture: ComponentFixture<ContratoMLaboralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContratoMLaboralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratoMLaboralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
