import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PediatricoComponent } from './pediatrico.component';

describe('PediatricoComponent', () => {
  let component: PediatricoComponent;
  let fixture: ComponentFixture<PediatricoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PediatricoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PediatricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
