import { TestBed } from '@angular/core/testing';

import { AuthenticationtestService } from './authenticationtest.service';

describe('AuthenticationtestService', () => {
  let service: AuthenticationtestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticationtestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
