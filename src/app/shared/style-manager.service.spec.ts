import { TestBed } from '@angular/core/testing';

import { StyleManagerService } from './style-manager.service';

describe('StyleManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StyleManagerService = TestBed.get(StyleManagerService);
    expect(service).toBeTruthy();
  });
});
