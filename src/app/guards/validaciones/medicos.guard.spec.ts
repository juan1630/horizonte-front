import { TestBed } from '@angular/core/testing';

import { MedicosGuard } from './medicos.guard';

describe('MedicosGuard', () => {
  let guard: MedicosGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MedicosGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
