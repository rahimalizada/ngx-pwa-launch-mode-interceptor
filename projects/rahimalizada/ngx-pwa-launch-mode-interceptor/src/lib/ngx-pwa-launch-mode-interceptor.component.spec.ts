import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxPwaLaunchModeInterceptorComponent } from './ngx-pwa-launch-mode-interceptor.component';

describe('NgxPwaLaunchModeInterceptorComponent', () => {
  let component: NgxPwaLaunchModeInterceptorComponent;
  let fixture: ComponentFixture<NgxPwaLaunchModeInterceptorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxPwaLaunchModeInterceptorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxPwaLaunchModeInterceptorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
