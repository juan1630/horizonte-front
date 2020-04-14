import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TomografiaComponent } from './tomografia.component';

describe('TomografiaComponent', () => {
  let component: TomografiaComponent;
  let fixture: ComponentFixture<TomografiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TomografiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TomografiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
