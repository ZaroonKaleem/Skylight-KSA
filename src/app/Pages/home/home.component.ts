import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { WorkComponent } from '../work/work.component';
import { ClientsComponent } from '../clients/clients.component';
import { ChooseUsComponent } from '../choose-us/choose-us.component';
import { NumbersComponent } from '../numbers/numbers.component';
import { ServicesSectionComponent } from '../services-section/services-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    WorkComponent,
    ClientsComponent,
    ChooseUsComponent,
    NumbersComponent,
    ServicesSectionComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
