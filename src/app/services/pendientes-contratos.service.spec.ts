import { TestBed } from '@angular/core/testing';

import { PendientesContratosService } from './pendientes-contratos.service';

describe('PendientesContratosService', () => {
  let service: PendientesContratosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PendientesContratosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
