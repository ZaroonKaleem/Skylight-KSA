import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { register } from 'swiper/element/bundle';
import { PartnerHeroComponent } from './partner-hero/partner-hero.component';
import { PartnerVideoComponent } from './partner-video/partner-video.component';
import { PartnerSliderComponent } from './partner-slider/partner-slider.component';
import { PartnerFormComponent } from './partner-form/partner-form.component';
import { PartnerInfoComponent } from './partner-info/partner-info.component';

@Component({
  selector: 'app-partner',
  standalone: true,
  imports: [
    CommonModule,
    PartnerHeroComponent,
    PartnerVideoComponent,
    PartnerSliderComponent,
    PartnerFormComponent,
    PartnerInfoComponent

  ],
  templateUrl: './partner.component.html',
  styleUrl: './partner.component.css'
})
export class PartnerComponent implements AfterViewInit {
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;
  private swiper!: Swiper;
  private observer!: IntersectionObserver;


  isPlaying = false;

  // ngAfterViewInit() {
  //   this.attemptAutoplay();
  // }

  attemptAutoplay() {
    const promise = this.videoPlayer.nativeElement.play();
    
    if (promise !== undefined) {
      promise.then(() => {
        this.isPlaying = true;
      }).catch(error => {
        // Autoplay was prevented, show fallback UI
        this.isPlaying = false;
      });
    }
  }

  playVideo() {
    this.videoPlayer.nativeElement.play()
      .then(() => {
        this.isPlaying = true;
      })
      .catch(error => {
        console.error('Video play failed:', error);
      });
  }


  setupVideoObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.videoPlayer.nativeElement.play();
        } else {
          this.videoPlayer.nativeElement.pause();
        }
      });
    }, { threshold: 0.5 });

    observer.observe(this.videoPlayer.nativeElement);
  }

  handleVideoIntersection(event: IntersectionObserverEntry) {
    if (event.isIntersecting) {
      this.videoPlayer.nativeElement.play();
    } else {
      this.videoPlayer.nativeElement.pause();
    }
  }

   ngAfterViewInit() {
        this.attemptAutoplay();

    // Initialize Swiper
    register();
    this.swiper = new Swiper('.swiper-container', {
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    // Set up intersection observer for video
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.videoPlayer.nativeElement.play().catch(e => console.log('Autoplay prevented:', e));
        } else {
          this.videoPlayer.nativeElement.pause();
        }
      });
    }, { threshold: 0.5 });

    this.observer.observe(this.videoPlayer.nativeElement);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}