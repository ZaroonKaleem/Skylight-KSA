import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component'
import { CareerComponent } from './Pages/career/career.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { AboutComponent } from './Pages/about/about.component';
import { PartnerComponent } from './Pages/partner/partner.component';

export const routes: Routes = [
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
        title: 'PARTNERS - SKYLIGHTS | KSA'
    }
];
