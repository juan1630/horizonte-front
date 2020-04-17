import { TestBed } from '@angular/core/testing';

import { MaternidadService } from './maternidad.service';

describe('MaternidadService', () => {
  let service: MaternidadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaternidadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
