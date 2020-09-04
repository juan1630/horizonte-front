import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaqueteQuirofanoComponent } from './paquete-quirofano.component';

describe('PaqueteQuirofanoComponent', () => {
  let component: PaqueteQuirofanoComponent;
  let fixture: ComponentFixture<PaqueteQuirofanoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaqueteQuirofanoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaqueteQuirofanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
