import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabuladorAltoriesgoComponent } from './tabulador-altoriesgo.component';

describe('TabuladorAltoriesgoComponent', () => {
  let component: TabuladorAltoriesgoComponent;
  let fixture: ComponentFixture<TabuladorAltoriesgoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabuladorAltoriesgoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabuladorAltoriesgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
