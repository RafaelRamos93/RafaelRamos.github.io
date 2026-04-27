import { TestBed } from '@angular/core/testing';

import { IconResolver } from './icon-resolver.service';

describe('IconResolver', () => {
  let service: IconResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IconResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
