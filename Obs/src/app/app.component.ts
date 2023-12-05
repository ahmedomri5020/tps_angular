import { Component, OnDestroy } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  counter$: Observable<number> = interval(1000);
  counterSubscription: Subscription | undefined;
  currentCount = 0;

  startCounter() {
    this.counterSubscription = this.counter$.subscribe(
      count => this.currentCount = count
    );
  }

  stopCounter() {
    if (this.counterSubscription) {
      this.counterSubscription.unsubscribe();
    }
  }

  ngOnDestroy() {
    this.stopCounter();
  }
}
