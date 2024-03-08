import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTafqitComponent } from './ngx-tafqit.component';

describe('NgxTafqitComponent', () => {
  let component: NgxTafqitComponent;
  let fixture: ComponentFixture<NgxTafqitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxTafqitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxTafqitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
