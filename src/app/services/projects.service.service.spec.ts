import { TestBed } from '@angular/core/testing';

import { Projects.ServiceService } from './projects.service.service';

describe('Projects.ServiceService', () => {
  let service: Projects.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Projects.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
