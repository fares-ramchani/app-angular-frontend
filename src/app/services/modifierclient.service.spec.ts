import { TestBed } from '@angular/core/testing';

import { ModifierclientService } from './modifierclient.service';

describe('ModifierclientService', () => {
  let service: ModifierclientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModifierclientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
