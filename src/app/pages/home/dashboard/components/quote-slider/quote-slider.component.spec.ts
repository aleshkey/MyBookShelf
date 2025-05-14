import {ComponentFixture, TestBed} from '@angular/core/testing';

import {QuoteSliderComponent} from './quote-slider.component';

describe('QuoteSliderComponent', () => {
    let component: QuoteSliderComponent;
    let fixture: ComponentFixture<QuoteSliderComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [QuoteSliderComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(QuoteSliderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
