import { TestBed } from '@angular/core/testing';

import { WineAppInterceptorService } from './wine-app-interceptor.service';

describe('WineAppInterceptorService', () => {
  let service: WineAppInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WineAppInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
