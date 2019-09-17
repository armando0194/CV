import { TestBed } from '@angular/core/testing';

import { StarProjectsService } from './star-projects.service';

describe('StarProjectsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StarProjectsService = TestBed.get(StarProjectsService);
    expect(service).toBeTruthy();
  });
});
