import { TestBed } from '@angular/core/testing';

import { ServiceRegestrerprofissionnelService } from './service-regestrerprofissionnel.service';

describe('ServiceRegestrerprofissionnelService', () => {
  let service: ServiceRegestrerprofissionnelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceRegestrerprofissionnelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
