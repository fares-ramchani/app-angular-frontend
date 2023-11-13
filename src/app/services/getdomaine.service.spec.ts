import { TestBed } from '@angular/core/testing';

import { GetdomaineService } from './getdomaine.service';

describe('GetdomaineService', () => {
  let service: GetdomaineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetdomaineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
