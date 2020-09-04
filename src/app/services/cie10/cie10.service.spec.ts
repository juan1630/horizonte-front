import { TestBed } from '@angular/core/testing';

import { Cie10Service } from './cie10.service';

describe('Cie10Service', () => {
  let service: Cie10Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Cie10Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
