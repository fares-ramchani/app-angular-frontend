import { TestBed } from '@angular/core/testing';

import { ModifierprofissionnelService } from './modifierprofissionnel.service';

describe('ModifierprofissionnelService', () => {
  let service: ModifierprofissionnelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModifierprofissionnelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
