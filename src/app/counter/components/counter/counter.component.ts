import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})

export class CounterComponent implements OnInit {
  constructor() { }
  public counter: number = 10;

  increaseCounter( value: number ): void {
    this.counter += value;
  }

  decrementCounter( value: number ): void {
    this.counter += value;
  }

  resetCounter(): void {
    this.counter = 10;
  }
  ngOnInit() { }
}
