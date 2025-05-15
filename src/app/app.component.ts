import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Route, Router, RouterOutlet } from '@angular/router';
import { WhatsappFloatComponent } from './Common/whatsapp-float/whatsapp-float.component';
import { HeaderComponent } from './Common/header/header.component';
import { FooterComponent } from './Common/footer/footer.component';
import { filter } from 'rxjs';
import { HomeComponent } from './Pages/home/home.component';
import { HeroComponent } from './Pages/hero/hero.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    WhatsappFloatComponent,
    HeaderComponent,
    FooterComponent,
    RouterOutlet,
    HomeComponent,
    HeroComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Skylight';

  isHomePage!: boolean;

  constructor(private router: Router){}

  ngOnInit(): void {
     this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.isHomePage = event.urlAfterRedirects === '/Home';
      });
  }

  onActivate(event: any){
  window.scroll(0,0);
}

}
