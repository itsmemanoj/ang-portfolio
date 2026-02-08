import { Component, signal, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import AOS from 'aos';
import { Home } from './pages/home/home';
import { Header } from "./shared/header/header";
import { Footer } from "./shared/footer/footer";
import { Preloader } from "./components/preloader/preloader";
import { ScrollTop } from "./components/scroll-top/scroll-top";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Header, Footer, Preloader, ScrollTop],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  protected readonly title = signal('my-portfolio');

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.aosInit();
      window.addEventListener('load', () => this.aosInit());
    }
  }

  private aosInit(): void {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
}
