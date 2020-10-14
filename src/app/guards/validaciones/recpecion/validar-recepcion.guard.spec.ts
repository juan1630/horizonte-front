import { TestBed } from '@angular/core/testing';

import { ValidarRecepcionGuard } from './validar-recepcion.guard';

describe('ValidarRecepcionGuard', () => {
  let guard: ValidarRecepcionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ValidarRecepcionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
