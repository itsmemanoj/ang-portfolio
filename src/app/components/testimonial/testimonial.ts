import { Component, AfterViewInit, Inject, PLATFORM_ID, ViewChildren, QueryList, ElementRef, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

declare function initSwiperWithCustomPagination(el: any, config: any): any;


@Component({
  selector: 'app-testimonial',
  imports: [],
  templateUrl: './testimonial.html',
  styleUrls: ['./testimonial.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})


export class Testimonial implements AfterViewInit {

  // Use ViewChildren to safely reference elements in the template
  @ViewChildren('swiperRef') swiperElements!: QueryList<ElementRef<any>>;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    this.initSwiper();
  }

  private initSwiper(): void {
    // Ensure we are on the browser
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.swiperElements.forEach((elRef) => {
      const swiperEl = elRef.nativeElement;
      
      // Swiper v12 web component - initialize if not already done
      if (swiperEl && typeof swiperEl.initialize === 'function') {
        swiperEl.initialize();
      }
    });
  }

  
}
