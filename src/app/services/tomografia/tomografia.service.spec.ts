import { TestBed } from '@angular/core/testing';

import { TomografiaService } from './tomografia.service';

describe('TomografiaService', () => {
  let service: TomografiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TomografiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
