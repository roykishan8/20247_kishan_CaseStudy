import { TestBed } from '@angular/core/testing';

import { AuthGuardTestService } from './auth-guard-test.service';

describe('AuthGuardTestService', () => {
  let service: AuthGuardTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGuardTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
