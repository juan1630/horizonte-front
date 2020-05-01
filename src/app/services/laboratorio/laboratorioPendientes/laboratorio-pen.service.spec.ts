import { TestBed } from '@angular/core/testing';

import { LaboratorioPenService } from './laboratorio-pen.service';

describe('LaboratorioPenService', () => {
  let service: LaboratorioPenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaboratorioPenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
