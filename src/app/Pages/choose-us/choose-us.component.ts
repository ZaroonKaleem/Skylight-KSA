import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-choose-us',
  standalone: true,
  imports: [],
  templateUrl: './choose-us.component.html',
  styleUrl: './choose-us.component.css'
})
export class ChooseUsComponent implements AfterViewInit {
  ngAfterViewInit() {
    this.setupProgressAnimation();
  }

  setupProgressAnimation() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateProgress('glassProgress', 'glassPercent', 87);
          this.animateProgress('smartProgress', 'smartPercent', 91);
          this.animateProgress('civilProgress', 'civilPercent', 94);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    const progressBars = document.getElementById('progressBars');
    if (progressBars) {
      observer.observe(progressBars);
    }
  }

  animateProgress(progressId: string, percentId: string, target: number) {
    let current = 0;
    const progressBar = document.getElementById(progressId);
    const percentElement = document.getElementById(percentId);
    const increment = target / 50; // Adjust speed here

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      if (progressBar) progressBar.style.width = current + '%';
      if (percentElement) percentElement.textContent = Math.round(current) + '%';
    }, 10);
  }
}