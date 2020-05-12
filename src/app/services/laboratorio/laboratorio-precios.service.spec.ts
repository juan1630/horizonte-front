import { TestBed } from '@angular/core/testing';

import { LaboratorioPreciosService } from './laboratorio-precios.service';

describe('LaboratorioPreciosService', () => {
  let service: LaboratorioPreciosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaboratorioPreciosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
