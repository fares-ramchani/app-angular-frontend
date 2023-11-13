import { TestBed } from '@angular/core/testing';

import { ServiceRegestrerService } from './service-regestrer.service';

describe('ServiceRegestrerService', () => {
  let service: ServiceRegestrerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceRegestrerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
