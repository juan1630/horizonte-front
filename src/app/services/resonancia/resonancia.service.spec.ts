import { TestBed } from '@angular/core/testing';

import { ResonanciaService } from './resonancia.service';

describe('ResonanciaService', () => {
  let service: ResonanciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResonanciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
