import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  homeActive: boolean = true;
  contactActive: boolean = true;

  innerWidth: number;
  
  @Output() contactShow = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  checkActive(key: string): string {
    switch (key) {
      case 'contact':
        return this.contactActive ? 'active' : null;
      case 'home':
        return this.homeActive ? 'active' : null;
      default:
        break;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth <= 1280) {
      this.contactActive = false;
      this.contactShow.emit(this.contactActive);
    } else {
      this.contactActive = true;
      this.contactShow.emit(this.contactActive);
    }
  }

  onContactButtonClick() {
    this.contactActive = !this.contactActive;
    this.contactShow.emit(this.contactActive);
  }

}
