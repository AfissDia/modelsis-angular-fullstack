import { TestBed } from '@angular/core/testing';

import { TypeProductsService } from './type-products.service';

describe('TypeProductsService', () => {
  let service: TypeProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
