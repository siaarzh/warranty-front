import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface AuthOTPRequestData {
  phone: string;
  otp: string;
}

@Injectable({providedIn: 'root'})
export class AuthModalService {

  OTPData: AuthOTPRequestData;

  constructor() {}

  // MODAL UI

  isShown = new Subject<boolean>();

  show() {
    this.isShown.next(true);
  }

  hide() {
    this.isShown.next(false);
  }

  // AUTHENTICATION SERVICE

  setPhone(phone: string) {
    localStorage.setItem('phone', phone);
  }

  deletePhone() {
    localStorage.removeItem('phone');
  }

  get phone() {
    return localStorage.getItem('phone');
  }

}
