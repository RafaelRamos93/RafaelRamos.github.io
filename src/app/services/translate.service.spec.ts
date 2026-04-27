import { TestBed } from '@angular/core/testing';

import { Translate } from './translate.service';

describe('Translate', () => {
  let service: Translate;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Translate);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
