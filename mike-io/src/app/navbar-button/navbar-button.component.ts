import { Component, OnInit, HostListener, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar-button',
  templateUrl: './navbar-button.component.html',
  styleUrls: ['./navbar-button.component.scss']
})
export class NavbarButtonComponent implements OnInit {
  @Output() menuShow = new EventEmitter<boolean>();
  isShowing: boolean = true;
  public innerWidth: any;

  ngOnInit() {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth <= 1070) {
      // this.isShowing = false;
      // this.menuShow.emit(this.isShowing);
    } else {
      // this.isShowing = true;
      // this.menuShow.emit(this.isShowing);
    }
  }

  onMenuButtonClick() {
    this.isShowing = !this.isShowing;
    this.menuShow.emit(this.isShowing);
  }
}
