import { TestBed } from '@angular/core/testing';

import { BusquedaGeneralService } from './busqueda-general.service';

describe('BusquedaGeneralService', () => {
  let service: BusquedaGeneralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusquedaGeneralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
