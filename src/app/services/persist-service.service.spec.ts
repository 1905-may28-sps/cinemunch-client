import { TestBed } from '@angular/core/testing';

import { PersistServiceService } from './persist-service.service';

describe('PersistServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersistServiceService = TestBed.get(PersistServiceService);
    expect(service).toBeTruthy();
  });
});
