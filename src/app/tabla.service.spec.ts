import { TestBed, inject } from '@angular/core/testing';

import { TableService } from './tabla.service';

describe('TableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TableService]
    });
  });

  it('should be created', inject([TableService], (service: TableService) => {
    expect(service).toBeTruthy();
  }));
});