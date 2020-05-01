import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbulanciaNewComponent } from './ambulancia-new.component';

describe('AmbulanciaNewComponent', () => {
  let component: AmbulanciaNewComponent;
  let fixture: ComponentFixture<AmbulanciaNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmbulanciaNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbulanciaNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
