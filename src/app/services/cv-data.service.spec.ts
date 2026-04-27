import { TestBed } from '@angular/core/testing';

import { CvData } from './cv-data.service';

describe('CvData', () => {
  let service: CvData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CvData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
