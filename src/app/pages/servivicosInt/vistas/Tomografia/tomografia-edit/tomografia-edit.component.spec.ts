import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TomografiaEditComponent } from './tomografia-edit.component';

describe('TomografiaEditComponent', () => {
  let component: TomografiaEditComponent;
  let fixture: ComponentFixture<TomografiaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TomografiaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TomografiaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
