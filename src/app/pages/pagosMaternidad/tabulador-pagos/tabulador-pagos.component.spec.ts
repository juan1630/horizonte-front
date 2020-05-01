import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabuladorPagosComponent } from './tabulador-pagos.component';

describe('TabuladorPagosComponent', () => {
  let component: TabuladorPagosComponent;
  let fixture: ComponentFixture<TabuladorPagosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabuladorPagosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabuladorPagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
