import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObtenermedicamentosComponent } from './obtenermedicamentos.component';

describe('ObtenermedicamentosComponent', () => {
  let component: ObtenermedicamentosComponent;
  let fixture: ComponentFixture<ObtenermedicamentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObtenermedicamentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObtenermedicamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
