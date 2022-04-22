import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss']
})
export class CountDownComponent implements OnInit {

  days = '0';

  hours = '0';

  minutes = '0';

  seconds = '0';

  leftTime = 0;

  // currentTime should come from backend Api

  @Input()
  currentTime = +new Date();

  @Input()
  endTime = 1682093605000;

  constructor() {
  }

  ngOnInit(): void {

    setInterval(() => {
      this.leftTime = this.endTime - this.currentTime;

      if (this.leftTime <= 0) {
        this.days = '0';
        this.hours = '0';
        this.minutes = '0';
        this.seconds = '0';

        return;
      }

      const days = Math.floor(this.leftTime / (1000 * 60 * 60 * 24));
      this.days = days.toString();
      if (days < 10) {
        this.days = '0' + days;
      }

      const hours = Math.floor((this.leftTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.hours = hours.toString();
      if (hours < 10) {
        this.hours = '0' + hours;
      }

      const minutes = Math.floor((this.leftTime % (1000 * 60 * 60)) / (1000 * 60));
      this.minutes = minutes.toString();
      if (minutes < 10) {
        this.minutes = '0' + minutes;
      }

      const seconds = Math.floor((this.leftTime % (1000 * 60)) / 1000);
      this.seconds = seconds.toString();
      if (seconds < 10) {
        this.seconds = '0' + seconds;
      }

      this.currentTime += 1000;
    }, 1000);
  }

}
