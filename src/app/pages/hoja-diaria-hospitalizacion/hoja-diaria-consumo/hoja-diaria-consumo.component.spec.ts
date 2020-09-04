import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HojaDiariaConsumoComponent } from './hoja-diaria-consumo.component';

describe('HojaDiariaConsumoComponent', () => {
  let component: HojaDiariaConsumoComponent;
  let fixture: ComponentFixture<HojaDiariaConsumoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HojaDiariaConsumoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HojaDiariaConsumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
