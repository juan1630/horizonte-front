import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbulanciaEditComponent } from './ambulancia-edit.component';

describe('AmbulanciaEditComponent', () => {
  let component: AmbulanciaEditComponent;
  let fixture: ComponentFixture<AmbulanciaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmbulanciaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbulanciaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
