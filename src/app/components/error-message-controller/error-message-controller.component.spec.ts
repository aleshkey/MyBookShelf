import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorMessageControllerComponent } from './error-message-controller.component';

describe('ErrorMessageControllerComponent', () => {
  let component: ErrorMessageControllerComponent;
  let fixture: ComponentFixture<ErrorMessageControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorMessageControllerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorMessageControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
