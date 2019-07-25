import { TestBed } from '@angular/core/testing';

import { MovieAndTimeslotService } from './movie-and-timeslot.service';

describe('MovieAndTimeslotService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovieAndTimeslotService = TestBed.get(MovieAndTimeslotService);
    expect(service).toBeTruthy();
  });
});
