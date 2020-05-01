import { TestBed } from '@angular/core/testing';

import { PwaLaunchModeInterceptor } from './pwa-launch-mode.interceptor';

describe('PwaLaunchModeInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      PwaLaunchModeInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: PwaLaunchModeInterceptor = TestBed.inject(PwaLaunchModeInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
