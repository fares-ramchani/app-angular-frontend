import { TestBed } from '@angular/core/testing';

import { RegestrationDomaineService } from './regestration-domaine.service';

describe('RegestrationDomaineService', () => {
  let service: RegestrationDomaineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegestrationDomaineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
