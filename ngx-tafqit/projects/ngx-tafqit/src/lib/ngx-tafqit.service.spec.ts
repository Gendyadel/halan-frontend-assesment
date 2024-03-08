import { TestBed } from '@angular/core/testing';

import { NgxTafqitService } from './ngx-tafqit.service';

describe('NgxTafqitService', () => {
  let service: NgxTafqitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxTafqitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return فقط مائة جنيه مصري لا غير for input 100', () => {
    expect(service.tafqit(100)).toBe('فقط مائة جنيه مصري لا غير');
  });

  it('should return فقط ثلاثمائة وعشرة آلاف وخمسة جنيهات مصرية لا غير for input 310005', () => {
    expect(service.tafqit(310005)).toBe('فقط ثلاثمائة وعشرة آلاف وخمسة جنيهات مصرية لا غير');
  });

  it('should return  مليونان ومائتان وتسعة آلاف for input 2209000', () => {
    expect(service.tafqit(2209000)).toBe('فقط مليونان ومائتان وتسعة آلاف جنيه مصري لا غير');
  });
});
