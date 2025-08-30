import { Component } from '@angular/core';
import { ContactButtonComponent } from "../contact-button/contact-button.component";

@Component({
  selector: 'app-banner',
  imports: [ContactButtonComponent],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {

}
