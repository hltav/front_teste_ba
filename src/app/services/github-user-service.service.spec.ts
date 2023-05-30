import { TestBed } from '@angular/core/testing';

import { GithubUserServiceService } from './github-user-service.service';

describe('GithubUserServiceService', () => {
  let service: GithubUserServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubUserServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
