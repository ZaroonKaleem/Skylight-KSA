import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit {
  carouselImages = [
    '/s1.jpg',
    '/s2.jpg',
    '/s3.jpg',
    '/s1.jpg'
  ];
  currentImageIndex = 0;

  ngOnInit() {
    this.startCarousel();
  }

  startCarousel() {
    setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.carouselImages.length;
    }, 3000); // Change image every 3 seconds
  }
  }