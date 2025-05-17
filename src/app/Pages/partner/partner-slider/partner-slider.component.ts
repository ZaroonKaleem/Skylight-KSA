import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-partner-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './partner-slider.component.html',
  styleUrl: './partner-slider.component.css'
})
export class PartnerSliderComponent {
 @ViewChild('sliderTrack') sliderTrack!: ElementRef<HTMLDivElement>;
  currentSlide = 0;
  slides = [0, 1, 2, 3]; // Array representing each slide
  slideInterval: any;

  ngAfterViewInit() {
    this.updateSliderPosition();
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  startAutoSlide() {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000); // Change slide every 5 seconds
  }

  stopAutoSlide() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  updateSliderPosition() {
    this.sliderTrack.nativeElement.style.transform = `translateX(-${this.currentSlide * 100}%)`;
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.updateSliderPosition();
    this.resetAutoSlide();
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    this.updateSliderPosition();
    this.resetAutoSlide();
  }


  goToSlide(index: number) {
    this.currentSlide = index;
    this.updateSliderPosition();
    this.resetAutoSlide();
  }

  resetAutoSlide() {
    this.stopAutoSlide();
    this.startAutoSlide();
  }
}
