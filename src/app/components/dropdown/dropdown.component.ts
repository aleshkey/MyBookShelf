import {Component, input, OnInit, inject, ElementRef, HostListener} from '@angular/core';
import {FormsModule} from '@angular/forms';

interface DropdownOption {
    label: string;
    value: string;
    onSelect: (value: string) => void;
}

interface DropdownConfig {
    imgSrc: string;
    title: string;
    options: DropdownOption[];
}


@Component({
    selector: 'app-dropdown',
    imports: [
        FormsModule
    ],
    templateUrl: './dropdown.component.html',
    styleUrl: './dropdown.component.css'
})
export class DropdownComponent implements OnInit {

    config = input<DropdownConfig>();

    selected: string | undefined;

    isOpen = false;

    private elementRef = inject(ElementRef);

    ngOnInit(): void {
        console.log('Dropdown config:', this.config());
    }

    toggleDropdown(): void {
        this.isOpen = !this.isOpen;
    }

    selectOption(option: DropdownOption): void {
        this.selected = option.value;
        option.onSelect(option.value);
        this.isOpen = false;
    }

    getDisplayedValue(): string {
        if (this.selected !== undefined) {
            const selectedOption = this.config()?.options.find(opt => opt.value === this.selected);
            if (selectedOption) {
                return selectedOption.label;
            }
        }
        return this.config()?.title || 'Выберите опцию'; // Fallback текст
    }

    @HostListener('document:click', ['$event'])
    onClickOutside(event: Event) {
        if (!this.elementRef.nativeElement.contains(event.target)) {
            this.isOpen = false;
        }
    }
}