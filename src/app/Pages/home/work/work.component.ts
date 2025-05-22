import { Component } from '@angular/core';
import { GlassWorkComponent } from './glass-work/glass-work.component';
import { ItWorkComponent } from './it-work/it-work.component';
import { CivilWorkComponent } from './civil-work/civil-work.component';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [
    GlassWorkComponent,
    ItWorkComponent,
    CivilWorkComponent
  ],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css'
})
export class WorkComponent {

}
