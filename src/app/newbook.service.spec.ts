import { TestBed } from '@angular/core/testing';

import { NewbookService } from './newbook.service';

describe('NewbookService', () => {
  let service: NewbookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewbookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
