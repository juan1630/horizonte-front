import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TomografiaNuevoComponent } from './tomografia-nuevo.component';

describe('TomografiaNuevoComponent', () => {
  let component: TomografiaNuevoComponent;
  let fixture: ComponentFixture<TomografiaNuevoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TomografiaNuevoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TomografiaNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
