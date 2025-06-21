import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component'
import { CareerComponent } from './Pages/career/career.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { AboutComponent } from './Pages/about/about.component';
import { PartnerComponent } from './Pages/partner/partner.component';
import { ServicesComponent } from './Pages/services/services.component';
import { LandingLinksComponent } from './Pages/landing-links/landing-links.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { FullLayoutComponent } from './layouts/full-layout/full-layout.component';

export const routes: Routes = [


      {
    path: '',
    component: FullLayoutComponent,
    children: [
    {
        path: '',
        component: HomeComponent,
        title: 'Home - SKYLIGHTS | KSA'
    },
    {
        path: 'career',
        component: CareerComponent,
        title: 'Careers - SKYLIGHT | KSA'
    },
    {
        path: 'contact-us',
        component: ContactComponent,
        title: 'Contact - SKYLIGHT | KSA'
    },
    {
        path: 'about',
        component: AboutComponent,
        title: 'About Us - SKYLIGHT | KSA'
    },
    {
        path: 'partners',
        component: PartnerComponent,
        title: 'Partners - SKYLIGHTS | KSA'
    },
    {
        path: 'services',
        component: ServicesComponent,
        title: 'Services - SKYLIGHT | KSA'
    },
    ],
  },
  {
    path: 'online',
    component: BlankLayoutComponent,
    children: [
    {
        path: '',
        component: LandingLinksComponent,
        title: 'Our Info'
    }
    ],
  },
  

];
