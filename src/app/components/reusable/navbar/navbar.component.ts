import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  hideNavbar = false;
  prevScrollPos = window.pageYOffset;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScrollPos = window.pageYOffset;
    this.hideNavbar = currentScrollPos > this.prevScrollPos;
    this.prevScrollPos = currentScrollPos;
  }
}
