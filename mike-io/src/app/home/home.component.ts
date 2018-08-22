import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host:{'style':'width:100%'}
})
export class HomeComponent implements OnInit {
  showIntro: boolean = false;
  second: boolean = false;
  third: boolean = false;
  fourth: boolean = false;
  showSkills: boolean = false;

  constructor() { }

  ngOnInit() {

  }

  onComplete(key: number) {
    switch (key) {
      case 1:
        this.second = true;
        break;
        case 2:
        this.third = true;
        break;
        case 3:
        setTimeout(() => {
        this.showIntro = true;
        this.fourth = true;
        }, 500);
        
        break;
        case 4:
        setTimeout(() => {
          this.showSkills = true;
        }, 500);
        
        break;
      default:
        break;
    }
  }

}
