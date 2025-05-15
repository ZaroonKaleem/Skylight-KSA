import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-numbers',
  standalone: true,
  imports: [],
  templateUrl: './numbers.component.html',
  styleUrl: './numbers.component.css'
})
export class NumbersComponent implements AfterViewInit {
  ngAfterViewInit() {
    this.setupCounterAnimation();
  }

 setupCounterAnimation() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateCounter('projectsCount', 61);
          this.animateCounter('yearsCount', 10);
          this.animateCounter('clientsCount', 51);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    const counterSection = document.getElementById('counter1')?.parentElement;
    if (counterSection) {
      observer.observe(counterSection);
    }
  }

  animateCounter(elementId: string, target: number) {
    let current = 0;
    const element = document.getElementById(elementId);
    const increment = target / 30; // Adjust speed here

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
        if (element) element.textContent = Math.round(current) + '+';
      }
      if (element) element.textContent = Math.round(current).toString();
    }, 25);
  }
}
