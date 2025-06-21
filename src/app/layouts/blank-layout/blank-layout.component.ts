import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingLinksComponent } from '../../Pages/landing-links/landing-links.component';

@Component({
  selector: 'app-blank-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    LandingLinksComponent
  ],
  templateUrl: './blank-layout.component.html',
  styleUrl: './blank-layout.component.css'
})
export class BlankLayoutComponent {

}
