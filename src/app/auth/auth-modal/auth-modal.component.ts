import { Component, ElementRef, Input, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription, timer } from 'rxjs';

import { AuthModalService } from './auth-modal.service';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.sass'],
})
export class AuthModalComponent implements OnInit, OnDestroy {
  // Modal
  private authModalSub: Subscription;
  isVisible = false;
  isLoggingIn = false;
  selectedAuthModalTab = 0;

  // OTP
  private authOTPSub: Subscription;
  private OTPTimer: Subscription;
  authOTPForm: FormGroup;
  invalidOTP = false;
  OTPRequested = false;
  OTPTimerStarted = false;
  OTPTimeLeft: number = null;
  OTPRememberPhone = true;
  @ViewChild('PhoneInput', { static: true }) phoneRef: ElementRef;
  @ViewChild('OTPInput', { static: false }) otpRef: ElementRef;

  // EMAIL
  authEmailForm: FormGroup;

  constructor(private authModalService: AuthModalService, private router: Router) {}

  ngOnInit(): void {
    this.authModalSub = this.authModalService.isShown.subscribe((show: boolean) => {
      this.isVisible = show;
    });
    this.initializeForms();
    this.authOTPSub = this.authOTPForm.valueChanges.subscribe(() => {
      // console.log('DEBUG: ', this.authOTPForm.getRawValue());
      if (this.authOTPForm.controls.otp.touched) {
        this.invalidOTP = false;
      }
    });
  }

  ngOnDestroy(): void {
    this.authModalSub.unsubscribe();
    this.authOTPSub.unsubscribe();
    this.OTPTimer.unsubscribe();
  }

  handleCancel(): void {
    this.authModalService.hide();
  }

  private initializeForms(): void {
    // OTP login form init
    let userPhone = ' ';
    // TODO:
    //  - issue 001:
    //      "Closing and opening modal with remember=false and having phone.length!=0 will not autofill phone control"
    if (this.authModalService.phone) {
      userPhone = this.authModalService.phone;
    }

    this.authOTPForm = new FormGroup({
      phone: new FormControl(
        {
          value: userPhone,
          disabled: false,
        },
        [Validators.required, Validators.pattern(/\d{11}/)],
      ),
      otp: new FormControl(
        {
          value: null,
          disabled: false,
        },
        [Validators.required, Validators.pattern(/\d{4}/)],
      ),
      remember: new FormControl(this.OTPRememberPhone),
    });

    // email login form init:
    const userEmail = '';
    const userPassword = '';

    this.authEmailForm = new FormGroup({
      email: new FormControl(userEmail),
      password: new FormControl(userPassword),
    });
  }

  startOTPTimer(): void {
    if (this.OTPTimer) {
      this.OTPTimer.unsubscribe();
    }
    this.OTPTimeLeft = 60;
    this.OTPTimerStarted = true;
    this.OTPTimer = timer(0, 1000).subscribe(val => {
      if (this.OTPTimeLeft > 0) {
        this.OTPTimeLeft = 59 - val;
      } else {
        this.OTPTimerStarted = false;
      }
    });
  }

  getOTP(): void {
    this.OTPRequested = true;
    this.invalidOTP = false;
    if (this.authOTPForm.controls.remember.value) {
      this.authModalService.setPhone(this.authOTPForm.controls.phone.value);
    }
    // this.authOTPForm.controls.phone.disable();
    this.authOTPForm.controls.otp.reset();
    this.focusOnOTPInput();
    this.startOTPTimer();
  }

  public onReset(): void {
    this.authOTPForm.reset();
    this.invalidOTP = false;
    this.authOTPForm.patchValue({
      phone: null,
      remember: true,
    });
    this.authModalService.setPhone(null);
    this.OTPRequested = false;
    this.authOTPForm.controls.phone.enable();
    this.authEmailForm.reset();
    if (this.OTPTimer) {
      this.OTPTimer.unsubscribe();
    }

    this.selectedAuthModalTab = 0;
    this.focusOnPhoneInput();
  }

  onSubmit() {
    // if (!this.OTPRequested && this.authOTPForm.controls.phone.valid) {
    //   console.log('phone number OK!');
    //   this.getOTP();
    // } else {
    //   console.log('phone number invalid');
    //   return;
    // }
    // if (this.OTPRequested) {
    //   this.onReset();
    // }
    if (this.authOTPForm.controls.otp.value === '1234') {
      console.log('DEBUG: ', 'log in data submitted. loading user console...');
      this.isLoggingIn = true;
      setTimeout(() => {
        // dummy loading spinner
        this.router.navigate(['/console']);
      }, 1000);
    } else {
      this.authOTPForm.patchValue({
        otp: null,
      });
      this.invalidOTP = true;
    }
  }

  onAuthModalOpen() {
    // focus on phone input when modal is open
    this.authOTPForm.patchValue({
      phone: this.authModalService.phone ? this.authModalService.phone : ' ',
    });
    this.focusOnPhoneInput();
  }

  private focusOnPhoneInput(timeout = 50) {
    setTimeout(() => {
      // give the tab-set time to animate scroll
      this.authOTPForm.controls.phone.markAsPristine();
      this.phoneRef.nativeElement.focus();
    }, timeout);
  }

  private focusOnOTPInput(timeout = 50) {
    setTimeout(() => {
      // give the tab-set time to animate scroll
      this.otpRef.nativeElement.focus();
    }, timeout);
  }

  onPhoneInputEnterPressed($event: KeyboardEvent): void {
    // This is a temporary workaround for LastPass
    // https://github.com/KillerCodeMonkey/ngx-quill/issues/351#issuecomment-476017960
    $event.stopPropagation();
  }

  onOTPInputEnterPressed($event: KeyboardEvent): void {
    // This is a temporary workaround for LastPass
    // https://github.com/KillerCodeMonkey/ngx-quill/issues/351#issuecomment-476017960
    $event.stopPropagation();

    this.onSubmit();
  }
}
