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
// services = [
//     {
//       title: 'Mobile App Development',
//       image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
//       description: 'Cross-platform and native mobile apps with cutting-edge technologies for iOS and Android platforms.',
//     },
//     {
//       title: 'Web Development',
//       image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
//       description: 'Modern web applications with React, Angular, or Vue.js with responsive design and optimal performance.',
//     },
//     {
//       title: 'Windows App Development',
//       image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
//       description: 'Powerful desktop applications using WPF, WinForms, or UWP for Windows platforms.',
//     },
//     {
//       title: 'SEO Services',
//       image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
//       description: 'Optimize your search engine presence and increase organic traffic to your website.',
//     },
//     {
//       title: 'Digital Marketing',
//       image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
//       description: 'Grow your brand with multi-platform campaigns across social media, email, and search engines.',
//     },
//     {
//       title: 'IT Consultancy',
//       image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
//       description: 'Expert advice for strategic IT decisions and technology roadmap planning.',
//     },
//     {
//       title: 'Server Management',
//       image: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
//       description: 'Reliable server deployment, configuration, and upkeep for optimal performance.',
//     },
//     {
//       title: 'Firewall Installation',
//       image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
//       description: 'Secure your network from threats with enterprise-grade firewall solutions.',
//     },
//     {
//       title: 'Network Management',
//       image: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
//       description: 'Monitoring and maintaining your IT infrastructure for maximum uptime and efficiency.',
//     },
//   ];

  services = [
    {
      title: 'Mobile App Development',
      image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      description: 'Cross-platform and native mobile apps with cutting-edge technologies for iOS and Android platforms.',
      details: 'We specialize in creating high-performance mobile applications using Flutter, React Native, and native technologies (Swift/Kotlin). Our apps are optimized for performance, security, and user experience. We follow agile development methodologies to deliver robust solutions that scale with your business needs. From concept to deployment, we handle everything including UI/UX design, API integration, testing, and App Store submission.'
    },
    {
      title: 'Web Development',
      image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      description: 'Modern web applications with React, Angular, or Vue.js with responsive design and optimal performance.',
      details: 'Our web development services include single-page applications, progressive web apps, and traditional web applications. We focus on responsive design, accessibility, and SEO-friendly architectures. We use modern frameworks like Next.js, Nuxt.js, and Gatsby for optimal performance. Our full-stack solutions include backend development with Node.js, Django, or .NET Core, and database design with PostgreSQL, MongoDB, or Firebase.'
    },
    {
      title: 'Windows App Development',
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      description: 'Powerful desktop applications using WPF, WinForms, or UWP for Windows platforms.',
      details: 'We develop enterprise-grade Windows applications with rich user interfaces and seamless integration with Windows APIs. Our solutions include WPF applications with MVVM architecture, WinForms for legacy systems, and modern UWP apps. We specialize in applications that require hardware integration, local database management, or complex business logic. Our desktop apps are optimized for performance and include automatic update mechanisms.'
    },
    {
      title: 'SEO Services',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      description: 'Optimize your search engine presence and increase organic traffic to your website.',
      details: 'Our comprehensive SEO services include technical SEO audits, on-page optimization, content strategy, and link building. We use advanced tools like SEMrush and Ahrefs to analyze your competition and identify high-value keywords. Our white-hat techniques focus on long-term growth, including schema markup implementation, site speed optimization, and mobile-first indexing. We provide monthly reports with actionable insights and measurable results.'
    },
    {
      title: 'Digital Marketing',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      description: 'Grow your brand with multi-platform campaigns across social media, email, and search engines.',
      details: 'Our digital marketing strategies combine paid advertising (Google Ads, Facebook Ads), content marketing, and social media management. We create data-driven campaigns with precise audience targeting and conversion tracking. Services include marketing automation setup, email campaign design, influencer marketing, and analytics dashboard implementation. We focus on ROI-driven strategies with A/B testing and continuous optimization.'
    },
    {
      title: 'IT Consultancy',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      description: 'Expert advice for strategic IT decisions and technology roadmap planning.',
      details: 'Our IT consultants help businesses align technology with business goals. Services include cloud migration strategy, software selection, IT infrastructure assessment, and digital transformation planning. We provide vendor-neutral recommendations for hardware, software, and services. Our deliverables include detailed technology roadmaps, cost-benefit analyses, and implementation plans. We specialize in helping SMBs scale their IT infrastructure efficiently.'
    },
    {
      title: 'Server Management',
      image: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      description: 'Reliable server deployment, configuration, and upkeep for optimal performance.',
      details: 'We offer comprehensive server management services including Linux/Windows server administration, cloud server setup (AWS, Azure, GCP), and container orchestration (Docker, Kubernetes). Our 24/7 monitoring includes security patches, performance tuning, and automated backups. We handle load balancing, failover configurations, and disaster recovery planning. Services include regular health reports, security audits, and compliance management for HIPAA, GDPR, etc.'
    },
    {
      title: 'Firewall Installation',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      description: 'Secure your network from threats with enterprise-grade firewall solutions.',
      details: 'We deploy and configure next-generation firewalls (Palo Alto, Fortinet, Cisco) with advanced threat protection. Our services include network vulnerability assessment, firewall rule optimization, and intrusion prevention system setup. We implement zero-trust architectures with VPN configurations and multi-factor authentication. Ongoing management includes log analysis, threat intelligence updates, and regular security policy reviews. We specialize in compliance-ready configurations for PCI DSS and other standards.'
    },
    {
      title: 'Network Management',
      image: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      description: 'Monitoring and maintaining your IT infrastructure for maximum uptime and efficiency.',
      details: 'Our network management services include LAN/WAN configuration, wireless network optimization, and SD-WAN implementation. We use enterprise tools like PRTG, SolarWinds, or Nagios for real-time monitoring. Services include network documentation, bandwidth management, QoS configuration, and VoIP optimization. We provide proactive maintenance with SLA-backed response times. For larger networks, we implement automated provisioning and configuration management tools.'
    }
  ];

  currentSlide = 0;
  selectedService: any = null;
  showModal = false;

  // get groupedServices() {
  //   const chunkSize = 3;
  //   const chunks = [];
  //   for (let i = 0; i < this.services.length; i += chunkSize) {
  //     chunks.push(this.services.slice(i, i + chunkSize));
  //   }
  //   return chunks;
  // }

  // nextSlide() {
  //   this.currentSlide = (this.currentSlide + 1) % this.groupedServices.length;
  // }

  // prevSlide() {
  //   this.currentSlide = (this.currentSlide - 1 + this.groupedServices.length) % this.groupedServices.length;
  // }

  // goToSlide(index: number) {
  //   this.currentSlide = index;
  // }

  openModal(service: any) {
    this.selectedService = service;
    this.showModal = true;
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.showModal = false;
    this.selectedService = null;
    document.body.style.overflow = 'auto';
  }

  // currentSlide = 0;

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