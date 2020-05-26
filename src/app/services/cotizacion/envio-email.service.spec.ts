import { TestBed } from '@angular/core/testing';

import { EnvioEmailService } from './envio-email.service';

describe('EnvioEmailService', () => {
  let service: EnvioEmailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnvioEmailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
