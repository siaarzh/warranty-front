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

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  // MODAL UI

  isShown = new Subject<boolean>();

  show(): void {
    this.isShown.next(true);
  }

  hide(): void {
    this.isShown.next(false);
  }

  // AUTHENTICATION SERVICE

  setPhone(phone: string): void {
    localStorage.setItem('phone', phone);
  }

  deletePhone(): void {
    localStorage.removeItem('phone');
  }

  get phone(): string {
    return localStorage.getItem('phone');
  }

  checkOTP(otp: string): boolean {
    return otp === '1234';
  }

  signin(phone: string, otp: string): void {
    this.loggedIn = this.checkOTP(otp);
    localStorage.setItem('loggedIn', 'true');
  }

  signout(): void {
    this.loggedIn = false;
    localStorage.setItem('loggedIn', 'false');
  }
}
