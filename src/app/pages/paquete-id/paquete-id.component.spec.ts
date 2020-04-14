import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaqueteIdComponent } from './paquete-id.component';

describe('PaqueteIdComponent', () => {
  let component: PaqueteIdComponent;
  let fixture: ComponentFixture<PaqueteIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaqueteIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaqueteIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
