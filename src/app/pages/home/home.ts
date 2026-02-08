import { Component } from '@angular/core';
import { Hero } from "../../components/hero/hero";
import { Resume } from "../../components/resume/resume";
import { About } from "../../components/about/about";
import { Services } from "../../components/services/services";
import { Stats } from "../../components/stats/stats";
import { Portfolio } from "../../components/portfolio/portfolio";
import { Pricing } from "../../components/pricing/pricing";
import { Faq } from "../../components/faq/faq";
import { Testimonial } from "../../components/testimonial/testimonial";
import { ContactForm } from "../../components/contact-form/contact-form";

@Component({
  selector: 'app-home',
  imports: [Hero, Resume, About, Services, Stats, Portfolio, Pricing, Faq, Testimonial, ContactForm],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
