import { TestBed } from '@angular/core/testing';

import { NgxPwaLaunchModeInterceptorService } from './ngx-pwa-launch-mode-interceptor.service';

describe('NgxPwaLaunchModeInterceptorService', () => {
  let service: NgxPwaLaunchModeInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxPwaLaunchModeInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
