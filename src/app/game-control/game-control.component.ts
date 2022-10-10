import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();//This EventEmitter in the end only hold a number as a values. And dont forget the ()parentheses to instantiate this event so to really get an instance of this object.
  interval;
  lastNumber = 0;

  constructor() { }

  ngOnInit(): void {
  }
  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1);//emit with incrementing no.
      this.lastNumber++;

    }, 1000);//Here I want to emit an event every thousand milliseconds, which woule be 1sec.
    //And the func here is a six arrow function again. And this is the function that gets executed on each tick.
  }

  onPauseGame() {
    clearInterval(this.interval);
  }

}
