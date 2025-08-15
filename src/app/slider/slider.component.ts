import { AfterViewInit, Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { RouterModule } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {

  // ngAfterViewInit(): void {
  //   $('.slider').slick({
  //     autoplay: true,
  //     autoplaySpeed: 30000000,
  //     dots: false,
  //     arrows: true,
  //     fade: true,
  //     prevArrow: '<button type="button" class="custom-prev" style="position: absolute; top: 50%; transform: translateY(-50%); background-color: rgba(0, 0, 0, 0.5); color: #FFDEDE; font-size: 3rem; padding: 10px; border: none; border-radius: 50%; cursor: pointer; z-index: 99; width:80px; left:20px">&#10094;</button>',
  //     nextArrow: '<button type="button" class="custom-next" style="position: absolute; top: 50%; transform: translateY(-50%); background-color: rgba(0, 0, 0, 0.5); color: #FFDEDE; font-size: 3rem; padding: 10px; border: none; border-radius: 50%; cursor: pointer; z-index: 99; width:80px; right:20px">&#10095;</button>'
  //   });
  // }
}