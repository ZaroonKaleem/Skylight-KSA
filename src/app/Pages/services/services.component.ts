// services.component.ts
import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  @ViewChild('carouselTrack') carouselTrack!: ElementRef<HTMLDivElement>;
  currentSet = 0;
  servicesPerView = 3;
  showGallery = false;
  
  services = [
    {
      title: 'Aluminum Composite Panel (ACP) Cladding',
      description: 'Durable and aesthetically pleasing ACP solutions for modern facades',
      image: '/s1.jpg'
    },
    {
      title: 'Glass Cladding & Installation',
      description: 'Tempered and plain glass solutions for stunning architectural features',
      image: '/s2.jpg'
    },
    {
      title: 'Architectural Designing & Assistance',
      description: 'Innovative designs tailored to your vision',
      image: '/s3.jpg'
    },
    {
      title: 'Electro-mechanical Assistance',
      description: 'Comprehensive technical drawings and support',
      image: '/s2.jpg'
    },
    {
      title: 'Complete Building Development',
      description: 'End-to-end construction solutions',
      image: '/s1.jpg'
    },
    {
      title: 'Retail Turn Key Projects',
      description: 'Complete retail space solutions',
      image: '/s2.jpg'
    },
    {
      title: 'Corporate Offices - Civil & Interior Works',
      description: 'Professional office space construction and design',
      image: '/s3.jpg'
    },
    {
      title: 'Fire Safety and Prevention',
      description: 'Comprehensive fire protection systems',
      image: '/s2.jpg'
    },
    {
      title: 'Electrical Work',
      description: 'Including wiring and panels installation',
      image: '/s1.jpg'
    },
    {
      title: 'High Velocity Air Conditioning (HVAC)',
      description: 'Advanced climate control solutions',
      image: '/s2.jpg'
    },
    {
      title: 'Air Conditioners Installation',
      description: 'Professional AC installation services',
      image: '/s2.jpg'
    },
    {
      title: 'Plumbing',
      description: 'Complete plumbing solutions',
      image: '/s3.jpg'
    },
    {
      title: 'Carpentry',
      description: 'Custom woodworking and finishing',
      image: '/s1.jpg'
    }

  ];
  allGalleryImages = [
 { src: '/s1.jpg', alt: 'ACP Installation', title: 'Commercial ACP Facade' },
 { src: '/s2.jpg', alt: 'Glass Installation', title: 'Office Glass Partitions' },
 { src: '/s3.jpg', alt: 'Office Construction', title: 'Corporate Office Build' },
//  { src: 'assets/gallery/retail-project.jpg', alt: 'Retail Project', title: 'Retail Space Completion' },
 // Add all other gallery images here
 // Make sure to include images from all services plus additional project photos
];

  get totalSets(): number {
    return Math.ceil(this.services.length / this.servicesPerView);
  }

  getVisibleServices() {
    const start = this.currentSet * this.servicesPerView;
    return this.services.slice(start, start + this.servicesPerView);
  }

  getTotalSets(): number[] {
    return Array(this.totalSets).fill(0).map((x, i) => i);
  }

  prevSet() {
    this.currentSet = Math.max(0, this.currentSet - 1);
    this.updateCarousel();
  }

  nextSet() {
    this.currentSet = Math.min(this.totalSets - 1, this.currentSet + 1);
    this.updateCarousel();
  }

  goToSet(index: number) {
    this.currentSet = index;
    this.updateCarousel();
  }

  updateCarousel() {
    if (this.carouselTrack) {
      this.carouselTrack.nativeElement.style.transform = `translateX(-${this.currentSet * 100}%)`;
    }
  }

  openGallery() {
    this.showGallery = true;
    document.body.style.overflow = 'hidden';
  }

  closeGallery() {
    this.showGallery = false;
    document.body.style.overflow = '';
  }
}