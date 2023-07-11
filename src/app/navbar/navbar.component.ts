import { Component, HostListener  } from '@angular/core';
import { ViewportScroller } from '@angular/common';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private viewportScroller: ViewportScroller) {}
  activeNavMenu: string = 'about';
  scrollTo(section: string): void {
    this.activeNavMenu = section;
    const offset = 60; // Adjust the offset value as needed
    const element = document.getElementById(section);

    if (element) {
      const yOffset = element.getBoundingClientRect().top + window.pageYOffset;
      this.viewportScroller.scrollToPosition([0, yOffset - offset]);
    }
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    // You can add any logic here if needed
  }
}
