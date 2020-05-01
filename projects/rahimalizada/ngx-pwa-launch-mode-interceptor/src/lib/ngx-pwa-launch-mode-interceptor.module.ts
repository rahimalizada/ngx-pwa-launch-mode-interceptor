import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PwaLaunchModeInterceptor } from './pwa-launch-mode.interceptor';

@NgModule({
  declarations: [],
  imports: [HttpClientModule],
  exports: [],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: PwaLaunchModeInterceptor,
      multi: true,
    },
  ],
})
export class NgxPwaLaunchModeInterceptorModule {}
