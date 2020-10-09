import { TestBed } from '@angular/core/testing';

import { NextVideoService } from './next-video.service';

describe('NextVideoService', () => {
  let service: NextVideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NextVideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
