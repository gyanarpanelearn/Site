import { TestBed } from '@angular/core/testing';

import { IdeService } from './ide.service';

describe('IdeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IdeService = TestBed.get(IdeService);
    expect(service).toBeTruthy();
  });
});
