import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

@HostListener('window:scroll', [])
onWindowScroll() {
  const header = document.getElementById('mainHeader');
  if (window.scrollY > 20) {
    header?.classList.add('scrolled');
    header?.style.setProperty('transform', 'translateX(-50%) scale(1.05)');
  } else {
    header?.classList.remove('scrolled');
    header?.style.setProperty('transform', 'translateX(-50%) scale(1)');
  }
}

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    // Close menu when resizing to larger screens
    if (window.innerWidth >= 1024) {
      this.closeMenu();
    }
  }
}