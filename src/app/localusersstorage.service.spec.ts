import { TestBed } from '@angular/core/testing';

import { LocalusersstorageService } from './localusersstorage.service';

describe('LocalusersstorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocalusersstorageService = TestBed.get(LocalusersstorageService);
    expect(service).toBeTruthy();
  });
});
