import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratoNeonatalComponent } from './contrato-neonatal.component';

describe('ContratoNeonatalComponent', () => {
  let component: ContratoNeonatalComponent;
  let fixture: ComponentFixture<ContratoNeonatalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContratoNeonatalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratoNeonatalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
