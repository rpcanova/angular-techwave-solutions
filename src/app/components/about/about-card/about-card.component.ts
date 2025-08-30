import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about-card',
  imports: [],
  templateUrl: './about-card.component.html',
  styleUrl: './about-card.component.css'
})
export class AboutCardComponent {
	@Input() cardTitle: string = ''
  @Input() cardDescription: string = ''
  @Input() cardIcon: string = ''
}