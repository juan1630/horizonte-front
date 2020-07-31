import { TestBed } from '@angular/core/testing';

import { IdentificacionConsultaService } from './identificacion-consulta.service';

describe('IdentificacionConsultaService', () => {
  let service: IdentificacionConsultaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdentificacionConsultaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
