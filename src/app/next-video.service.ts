import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NextVideoService {
  
  nextVideoSubscriber: Subscriber<any>;
  nextVideoObserver: Observable<any>;

  constructor() { 
    this.nextVideoObserver = new Observable((observer)=>{
      this.nextVideoSubscriber = observer;
    });
  }
}
