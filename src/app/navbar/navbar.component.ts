import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

isSticky: boolean = false;
 isMenuOpen :boolean=false;

@HostListener('window:scroll', [])
onWindowScroll(){
  const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  this.isSticky = offset>100;
}

  public toggleMenu(){
    this.isMenuOpen =!this.isMenuOpen;
  }
}
