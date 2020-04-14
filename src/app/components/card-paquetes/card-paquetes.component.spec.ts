import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPaquetesComponent } from './card-paquetes.component';

describe('CardPaquetesComponent', () => {
  let component: CardPaquetesComponent;
  let fixture: ComponentFixture<CardPaquetesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPaquetesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPaquetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
