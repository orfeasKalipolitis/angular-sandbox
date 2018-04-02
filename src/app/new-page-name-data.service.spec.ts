import { TestBed, inject } from '@angular/core/testing';

import { NewPageNameDataService } from './new-page-name-data.service';

describe('NewPageNameDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewPageNameDataService]
    });
  });

  it('should be created', inject([NewPageNameDataService], (service: NewPageNameDataService) => {
    expect(service).toBeTruthy();
  }));
});
