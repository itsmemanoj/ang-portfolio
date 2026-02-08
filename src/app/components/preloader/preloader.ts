import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.html',
  styleUrls: ['./preloader.css'],
})
export class Preloader implements AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const preloader = document.querySelector('#preloader') as HTMLElement | null;
    if (preloader) {
      window.addEventListener('load', () => {
        preloader.remove();
      });
    }
  }
}
