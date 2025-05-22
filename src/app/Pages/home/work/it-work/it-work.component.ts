import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-it-work',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './it-work.component.html',
  styleUrl: './it-work.component.css'
})
export class ItWorkComponent {
services = [
    {
      title: 'Mobile App Development',
      image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      description: 'Cross-platform and native mobile apps with cutting-edge technologies for iOS and Android platforms.',
    },
    {
      title: 'Web Development',
      image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      description: 'Modern web applications with React, Angular, or Vue.js with responsive design and optimal performance.',
    },
    {
      title: 'Windows App Development',
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      description: 'Powerful desktop applications using WPF, WinForms, or UWP for Windows platforms.',
    },
    {
      title: 'SEO Services',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      description: 'Optimize your search engine presence and increase organic traffic to your website.',
    },
    {
      title: 'Digital Marketing',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      description: 'Grow your brand with multi-platform campaigns across social media, email, and search engines.',
    },
    {
      title: 'IT Consultancy',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      description: 'Expert advice for strategic IT decisions and technology roadmap planning.',
    },
    {
      title: 'Server Management',
      image: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      description: 'Reliable server deployment, configuration, and upkeep for optimal performance.',
    },
    {
      title: 'Firewall Installation',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      description: 'Secure your network from threats with enterprise-grade firewall solutions.',
    },
    {
      title: 'Network Management',
      image: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      description: 'Monitoring and maintaining your IT infrastructure for maximum uptime and efficiency.',
    },
  ];

  currentSlide = 0;

  get groupedServices() {
    const chunkSize = 3;
    const chunks = [];
    for (let i = 0; i < this.services.length; i += chunkSize) {
      chunks.push(this.services.slice(i, i + chunkSize));
    }
    return chunks;
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.groupedServices.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.groupedServices.length) % this.groupedServices.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }
}