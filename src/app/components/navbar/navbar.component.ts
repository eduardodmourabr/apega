import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  dropdownIsOpen: boolean = false;

  constructor() { }

  toggleDropdown(event: MouseEvent, dropdownId: string) {
    event.preventDefault();
    const target = document.getElementById(dropdownId);
    if (target instanceof HTMLElement) {
      this.closeDropdowns(target);
      this.dropdownIsOpen = !this.dropdownIsOpen;
      if (this.dropdownIsOpen) {
        target.classList.add('show');
      } else {
        target.classList.remove('show');
      }
    }
  }

  handleSmallScreens() {
    const navbarMenu = document.querySelector('.navbar-menu');
    if (navbarMenu instanceof HTMLElement) {
      navbarMenu.classList.toggle('active');
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const clickedElement = event.target as HTMLElement;
    const navbarMenu = document.querySelector('.navbar-menu');
    if (navbarMenu instanceof HTMLElement && !navbarMenu.contains(clickedElement)) {
      this.closeDropdowns();
    }
  }

  closeDropdowns(excludeElement?: HTMLElement) {
    const allDropdowns = document.querySelectorAll('.navbar .dropdown');
    allDropdowns.forEach((dropdown) => {
      const dropdownElement = dropdown as HTMLElement;
      if (dropdownElement !== excludeElement) {
        dropdownElement.classList.remove('show');
      }
    });
    this.dropdownIsOpen = false;
  }

}
