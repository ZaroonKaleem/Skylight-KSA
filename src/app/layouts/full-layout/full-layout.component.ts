import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { FacebookFloatComponent } from '../../Common/facebook-float/facebook-float.component';
import { FooterComponent } from '../../Common/footer/footer.component';
import { HeaderComponent } from '../../Common/header/header.component';
import { InstagramFloatComponent } from '../../Common/instagram-float/instagram-float.component';
import { SnapchatFloatComponent } from '../../Common/snapchat-float/snapchat-float.component';
import { WhatsappFloatComponent } from '../../Common/whatsapp-float/whatsapp-float.component';
import { HomeComponent } from '../../Pages/home/home.component';
import { filter } from 'rxjs';

@Component({
  selector: 'app-full-layout',
  standalone: true,
  imports: [
  RouterOutlet,
      WhatsappFloatComponent,
      FacebookFloatComponent,
      InstagramFloatComponent,
      SnapchatFloatComponent,
      HeaderComponent,
      FooterComponent,
      RouterOutlet,
      HomeComponent
  ],
  templateUrl: './full-layout.component.html',
  styleUrl: './full-layout.component.css'
})
export class FullLayoutComponent {
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
