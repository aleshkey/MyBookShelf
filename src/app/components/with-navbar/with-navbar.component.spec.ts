import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WithNavbarComponent} from './with-navbar.component';

describe('WithNavbarComponent', () => {
    let component: WithNavbarComponent;
    let fixture: ComponentFixture<WithNavbarComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [WithNavbarComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(WithNavbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
