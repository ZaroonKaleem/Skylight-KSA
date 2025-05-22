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
      imageUrl: 'https://source.unsplash.com/random/1920x1080/?nature,1',
      title: 'Discover Amazing Nature',
      description: 'Explore the beauty of untouched landscapes and breathtaking views.',
      ctaText: 'Explore Now'
    },
    {
      id: 2,
      imageUrl: 'https://source.unsplash.com/random/1920x1080/?mountain,1',
      title: 'Mountain Adventures',
      description: 'Conquer the highest peaks and experience the thrill of climbing.',
      ctaText: 'Start Climbing'
    },
    {
      id: 3,
      imageUrl: 'https://source.unsplash.com/random/1920x1080/?ocean,1',
      title: 'Ocean Wonders',
      description: 'Dive into the deep blue and discover marine life like never before.',
      ctaText: 'Learn More'
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
    }, 5000);
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