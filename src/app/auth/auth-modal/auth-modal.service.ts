import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthModalService {

  constructor() {}

  isShown = new Subject<boolean>();

  show() {
    this.isShown.next(true);
  }

  hide() {
    this.isShown.next(false);
  }
}
