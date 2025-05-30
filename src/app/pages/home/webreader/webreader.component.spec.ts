import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebreaderComponent } from './webreader.component';

describe('WebreaderComponent', () => {
  let component: WebreaderComponent;
  let fixture: ComponentFixture<WebreaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebreaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebreaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
