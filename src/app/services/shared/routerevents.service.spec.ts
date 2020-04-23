import { TestBed } from '@angular/core/testing';

import { RoutereventsService } from './routerevents.service';

describe('RoutereventsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoutereventsService = TestBed.get(RoutereventsService);
    expect(service).toBeTruthy();
  });
});
