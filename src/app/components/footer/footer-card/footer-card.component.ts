import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer-card.component.html',
  styleUrl: './footer-card.component.css'
})
export class FooterCardComponent {
  @Input() cardTitle: string = ''
  @Input() cardItems: string[] = []
}
