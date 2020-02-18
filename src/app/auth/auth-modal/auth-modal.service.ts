import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface AuthOTPRequestData {
  phone: string;
  otp: string;
}

@Injectable({ providedIn: 'root' })
export class AuthModalService {
  OTPData: AuthOTPRequestData;
  private loggedIn: boolean = localStorage.getItem('loggedIn') === 'true';

  isLoggedIn() {
    return this.loggedIn;
  }

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

  checkOTP(otp: string) {
    return otp === '1234';
  }

  signin(phone: string, otp: string) {
    this.loggedIn = this.checkOTP(otp);
    localStorage.setItem('loggedIn', 'true');
  }

  signout() {
    this.loggedIn = false;
    localStorage.setItem('loggedIn', 'false');
  }
}
