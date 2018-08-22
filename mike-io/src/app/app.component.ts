import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menuShow: boolean = true;
  contactShow: boolean = true;
  
  onMenuButtonClick(menuShow: boolean) {
    this.menuShow = menuShow;
  }

  onContactButtonClick(contactShow: boolean) {
    this.contactShow = contactShow;
  }
}
