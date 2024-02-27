import { TestBed } from '@angular/core/testing';

import { Ak23CardService } from './ak23-card.service';

describe('Ak23CardService', () => {
  let service: Ak23CardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ak23CardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
