import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NgxTafqitService } from '../../../ngx-tafqit/projects/ngx-tafqit/src/public-api';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
