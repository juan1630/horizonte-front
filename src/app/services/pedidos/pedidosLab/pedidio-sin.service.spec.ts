import { TestBed } from '@angular/core/testing';

import { PedidioSinService } from './pedidio-sin.service';

describe('PedidioSinService', () => {
  let service: PedidioSinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PedidioSinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
