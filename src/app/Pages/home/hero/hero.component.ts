import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Slide {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  ctaText: string;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})

export class HeroComponent implements OnInit {
slides: Slide[] = [
  {
    id: 1,
    imageUrl: '/GlassServices.jpg',
    title: 'Glass & Aluminum Solutions',
    description: 'Premium quality glass and aluminum installations for modern architecture and construction projects.',
    ctaText: 'View Our Projects'
  },
  {
    id: 2,
    imageUrl: '/ItSolutions.jpg',
    title: 'IT Solutions',
    description: 'Comprehensive technology services to drive your business forward in the digital age.',
    ctaText: 'Explore Services'
  },
  {
    id: 3,
    imageUrl: '/CivilWork.jpg',
    title: 'Civil Work',
    description: 'Expert civil engineering and construction services for infrastructure and development projects.',
    ctaText: 'Get a Quote'
  }
];

  currentSlideIndex = 0;
  interval: any;

  ngOnInit(): void {
    this.startAutoPlay();
  }

  startAutoPlay(): void {
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 2000);
  }

  stopAutoPlay(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  nextSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
  }

  prevSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number): void {
    this.currentSlideIndex = index;
    this.stopAutoPlay();
    this.startAutoPlay();
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }
}
// export class HeroComponent {
//   heroSlider() {
//     return {
//       currentSlide: 0,
//       autoplay: true,
//       interval: null,  // Correct type declaration
//       slides: [
//         {
//           title: "Objavte nové obzory",
//           description: "Cestovateľské zážitky, ktoré vám zmenia život",
//           buttonText: "Rezervovať",
//           buttonUrl: "#",
//           image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
//         },
//         // ... other slides
//       ],
//       init() {
//         this.startAutoplay();
//       },
//       next() {
//         this.currentSlide = (this.currentSlide + 1) % this.slides.length;
//       },
//       prev() {
//         this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
//       },
//       goTo(index: number) {
//         this.currentSlide = index;
//       },
//       startAutoplay() {
//         this.clearAutoplay();
//         this.interval = setInterval(() => {
//           if (this.autoplay) {
//             this.next();
//           }
//         }, 5000);
//       },
//       clearAutoplay() {  // Add this method to properly clean up
//         if (this.interval) {
//           clearInterval(this.interval);
//           this.interval = null;
//         }
//       },
//       replaceBrokenImage(event: any) {
//         const fallbacks = [
//           'https://picsum.photos/id/1018/1920/1080',
//           'https://picsum.photos/id/1015/1920/1080',
//           'https://picsum.photos/id/1019/1920/1080'
//         ];
//         event.target.src = fallbacks[this.currentSlide % fallbacks.length];
//       }
//     }
//   }
// }