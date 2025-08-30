import { Component } from '@angular/core';
import { AboutCardComponent } from "./about-card/about-card.component";
import { ContactButtonComponent } from "../contact-button/contact-button.component";

@Component({
  selector: 'app-about',
  imports: [AboutCardComponent, ContactButtonComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
