import { TestBed } from '@angular/core/testing';

import { CompontesComService } from './compontes-com.service';

describe('CompontesComService', () => {
  let service: CompontesComService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompontesComService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
