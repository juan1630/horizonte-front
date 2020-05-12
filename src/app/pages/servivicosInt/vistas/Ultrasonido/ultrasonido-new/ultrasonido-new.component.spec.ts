import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UltrasonidoNewComponent } from './ultrasonido-new.component';

describe('UltrasonidoNewComponent', () => {
  let component: UltrasonidoNewComponent;
  let fixture: ComponentFixture<UltrasonidoNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UltrasonidoNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UltrasonidoNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
