import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleBookIframeComponent } from './google-book-iframe.component';

describe('GoogleBookIframeComponent', () => {
  let component: GoogleBookIframeComponent;
  let fixture: ComponentFixture<GoogleBookIframeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoogleBookIframeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoogleBookIframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
