import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
 @ViewChild('backgroundVideo', { static: false }) backgroundVideo!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit(): void {
    this.playBackgroundVideo();
  }

  @HostListener('window:visibilitychange')
  handleVisibilityChange(): void {
    if (document.visibilityState === 'visible') {
      this.playBackgroundVideo();
    }
  }

  playBackgroundVideo(): void {
    if (this.backgroundVideo && this.backgroundVideo.nativeElement) {
      const videoElement = this.backgroundVideo.nativeElement;
      videoElement.muted = true; // Ensure the video is muted

      const tryPlay = () => {
        videoElement.play().catch(error => {
          console.error('Error attempting to play video:', error);
          setTimeout(tryPlay, 1000); // Retry after a brief delay
        });
      };

      tryPlay();
    }
  }
}
