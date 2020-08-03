import { TestBed } from '@angular/core/testing';

import { JefaturaEnfermeriaService } from './jefatura-enfermeria.service';

describe('JefaturaEnfermeriaService', () => {
  let service: JefaturaEnfermeriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JefaturaEnfermeriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
