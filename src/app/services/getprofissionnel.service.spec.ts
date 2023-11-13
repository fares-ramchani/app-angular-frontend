import { TestBed } from '@angular/core/testing';

import { GetprofissionnelService } from './getprofissionnel.service';

describe('GetprofissionnelService', () => {
  let service: GetprofissionnelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetprofissionnelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
