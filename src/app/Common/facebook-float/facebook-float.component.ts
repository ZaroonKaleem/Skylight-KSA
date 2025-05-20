import { Component } from '@angular/core';

@Component({
  selector: 'app-facebook-float',
  standalone: true,
  imports: [],
  templateUrl: './facebook-float.component.html',
  styleUrl: './facebook-float.component.css'
})
export class FacebookFloatComponent {
 isOpen = false;

  toggleMenu(event: Event) {
  event.preventDefault();
  this.isOpen = !this.isOpen;
}
}
