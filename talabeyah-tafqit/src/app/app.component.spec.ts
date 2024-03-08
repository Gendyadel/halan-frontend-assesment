import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxTafqitModule, NgxTafqitService } from 'ngx-tafqit';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ], imports: [
        BrowserModule,
        FormsModule,
        NgxTafqitModule,
      ],
      providers: [
        //{ provide: NgxTafqitService, useClass: NgxTafqitServiceMock },
        NgxTafqitService,
      ]
    }).compileComponents().then(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      // app.inputNumber = 1;
      fixture.detectChanges();
    });
  })

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // check if we have output
  it('should display value', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const inputNumber = fixture.componentInstance.inputNumber;
    const representation = fixture.debugElement.nativeElement.querySelector('p')?.innerText.replace('Output:', '').trim()
    if (inputNumber) {
      expect(representation.includes('فقط')).toBeTrue();
    }
  });

  //check if this output matches the result from the service
  it('should match tafqit', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const inputNumber = fixture.componentInstance.inputNumber;
    const representation = fixture.debugElement.nativeElement.querySelector('p')?.innerText.replace('Output:', '').trim()
    const tafqitService: NgxTafqitService = new NgxTafqitService();
    if (inputNumber) {
      const expectedRepresentation = tafqitService.tafqit(inputNumber).trim();
      expect(representation).toMatch(expectedRepresentation)
    }
  });
});
