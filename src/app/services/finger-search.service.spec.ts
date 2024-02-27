import { TestBed } from '@angular/core/testing';

import { FingerSearchService } from './finger-search.service';

describe('FingerSearchService', () => {
  let service: FingerSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FingerSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
