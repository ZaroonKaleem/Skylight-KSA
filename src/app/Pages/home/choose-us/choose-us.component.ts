import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-choose-us',
  standalone: true,
  imports: [],
  templateUrl: './choose-us.component.html',
  styleUrl: './choose-us.component.css'
})
export class ChooseUsComponent implements AfterViewInit {
  images = [
    { src: '/blue.jpg', alt: 'Our Expertise' },
    { src: '/blue2.jpg', alt: 'Our Projects' },
    // { src: '/assets/images/image3.jpg', alt: 'Our Team' }
  ];
  currentIndex = 0;
  slideInterval: any;
  intervalTime = 2000; // 3 seconds

  // Progress bars properties
  @ViewChild('progressBars') progressBars!: ElementRef;
  glassProgress = 0;
  smartProgress = 0;
  civilProgress = 0;
  glassPercent = 0;
  smartPercent = 0;
  civilPercent = 0;
  animationStarted = false;

  ngOnInit() {
    this.startSlider();
  }

  // ngAfterViewInit() {
  //   this.setupIntersectionObserver();
  // }

  ngOnDestroy() {
    this.pauseSlider();
  }

  // Slider methods
  startSlider() {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, this.intervalTime);
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
    this.resetSliderTimer();
  }

  pauseSlider() {
    clearInterval(this.slideInterval);
  }

  resumeSlider() {
    this.resetSliderTimer();
  }

  resetSliderTimer() {
    this.pauseSlider();
    this.startSlider();
  }

  // Progress bars methods
  setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.animationStarted) {
          this.animateProgressBars();
          this.animationStarted = true;
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    observer.observe(this.progressBars.nativeElement);
  }

  animateProgressBars() {
    const duration = 2000; // 2 seconds
    const startTime = performance.now();
    const targets = {
      glass: 85,
      smart: 70,
      civil: 60
    };

    const animate = (timestamp: number) => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Update glass work
      this.glassProgress = progress * targets.glass;
      this.glassPercent = Math.floor(this.glassProgress);

      // Update smart lock
      this.smartProgress = progress * targets.smart;
      this.smartPercent = Math.floor(this.smartProgress);

      // Update civil work
      this.civilProgress = progress * targets.civil;
      this.civilPercent = Math.floor(this.civilProgress);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }

  ngAfterViewInit() {
    this.setupProgressAnimation();
  }

  setupProgressAnimation() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateProgress('glassProgress', 'glassPercent', 55);
          this.animateProgress('smartProgress', 'smartPercent', 33);
          this.animateProgress('civilProgress', 'civilPercent', 42);
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