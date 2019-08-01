import { TestBed } from '@angular/core/testing';

import { MemberkeyService } from './memberkey.service';

describe('MemberkeyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MemberkeyService = TestBed.get(MemberkeyService);
    expect(service).toBeTruthy();
  });
});
