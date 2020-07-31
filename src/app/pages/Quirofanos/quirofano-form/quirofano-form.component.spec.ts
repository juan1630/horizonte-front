import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuirofanoFormComponent } from './quirofano-form.component';

describe('QuirofanoFormComponent', () => {
  let component: QuirofanoFormComponent;
  let fixture: ComponentFixture<QuirofanoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuirofanoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuirofanoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
