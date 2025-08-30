import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-contact-button',
	imports: [],
	templateUrl: './contact-button.component.html',
	styleUrl: './contact-button.component.css',
})
export class ContactButtonComponent {
	@Input() btnVariant: 'banner' | 'about' = 'banner';
	@Input() btnText: string = '';
}
