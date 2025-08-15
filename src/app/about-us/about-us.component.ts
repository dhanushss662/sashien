import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NOTIMP } from 'node:dns';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent{
testimonials = [
    {
      image: '../../assets/pic/master.jpg',
      message: 'Printing and typesetting industry has been standard dummy text ever since the 1500s...',
      name: 'Bernice Grant',
      designation: 'Senior Trainer'
    },
    {
      image: '../../assets/pic/master.jpg',
      message: 'Printing and typesetting industry has been standard dummy text ever since the 1500s...',
      name: 'Bernice Grant',
      designation: 'Senior Trainer'
    },
  ];

    slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "arrows": false,
    "dots": false,
    "autoplay": true,
    "autoplaySpeed" : 5000,
    "infinite": true
  };
}
