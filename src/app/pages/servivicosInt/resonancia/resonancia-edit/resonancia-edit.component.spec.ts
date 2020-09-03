import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResonanciaEditComponent } from './resonancia-edit.component';

describe('ResonanciaEditComponent', () => {
  let component: ResonanciaEditComponent;
  let fixture: ComponentFixture<ResonanciaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResonanciaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResonanciaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
