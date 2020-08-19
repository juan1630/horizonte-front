import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarMedciametosComponent } from './agregar-medciametos.component';

describe('AgregarMedciametosComponent', () => {
  let component: AgregarMedciametosComponent;
  let fixture: ComponentFixture<AgregarMedciametosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarMedciametosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarMedciametosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
