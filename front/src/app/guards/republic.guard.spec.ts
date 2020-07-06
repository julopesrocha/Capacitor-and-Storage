import { TestBed, async, inject } from '@angular/core/testing';

import { RepublicGuard } from './republic.guard';

describe('RepublicGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RepublicGuard]
    });
  });

  it('should ...', inject([RepublicGuard], (guard: RepublicGuard) => {
    expect(guard).toBeTruthy();
  }));
});
