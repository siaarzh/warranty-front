import { Component, ElementRef, Input, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription, timer } from 'rxjs';

import { AuthModalService } from './auth-modal.service';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.sass']
})
export class AuthModalComponent implements OnInit, OnDestroy {
  // Modal
  private authModalSub: Subscription;
  isVisible = false;
  isConfirmLoading = false;
  isLoggingIn = false;
  selectedAuthModalTab = 0;

  // OTP
  private authOTPSub: Subscription;
  private rowsSub: Subscription;
  private OTPTimer: Subscription;
  private OTPCode: string;
  authOTPForm: FormGroup;
  OTPRequested = false;
  OTPTimerStarted = false;
  OTPTimeLeft: number = null;
  OTPRememberPhone = true;
  @Input() OTPLength = 4;
  @ViewChildren('OTPFormRow') rows: QueryList<ElementRef>;
  @ViewChild('PhoneInput', {static: true}) phoneRef: ElementRef;

  // EMAIL
  authEmailForm: FormGroup;

  constructor(
    private authModalService: AuthModalService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.authModalSub = this.authModalService.isShown.subscribe((show: boolean) => {
      this.isVisible = show;
    });
    this.initializeForms();
    this.authOTPSub = this.authOTPForm.valueChanges.subscribe(() => {
      // console.log(this.authOTPForm.getRawValue());
      this.OTPCode = (this.authOTPForm.getRawValue().otp as string[]).join('');
      // console.log(this.OTPCode);
    });
  }

  setFocus() {
    if (this.rows.length > 0) {
      this.rows.first.nativeElement.focus();
    }
  }

  ngOnDestroy() {
    this.authModalSub.unsubscribe();
    this.authOTPSub.unsubscribe();
    this.rowsSub.unsubscribe();
    this.OTPTimer.unsubscribe();
  }

  handleCancel() {
    this.authModalService.hide();
  }

  handleOk() {
    // ...
  }

  private initializeForms() {
    // OTP login form init
    let userPhone = ' ';
    // TODO:
    //  - issue 001:
    //      "Closing and opening modal with remember=false and having phone.length!=0 will not autofill phone control"
    if (this.authModalService.phone) {
      userPhone = this.authModalService.phone;
    }
    const OTPInputs = new FormArray([]);

    // create OTP object
    for (let i = 0; i < this.OTPLength; i++) {
      OTPInputs.push(new FormControl('', Validators.required));
    }

    this.authOTPForm = new FormGroup({
      phone: new FormControl({
          value: userPhone,
          disabled: false,
        },
        [
          Validators.required,
          Validators.pattern(/\d{11}/),
        ],
      ),
      otp: OTPInputs,
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

  get OTPControls() {
    return (this.authOTPForm.get('otp') as FormArray).controls;
  }

  get invalidOTP() {
    let invalidState = this.authOTPForm.controls.otp.invalid;
    this.OTPControls.forEach((key) => {
      invalidState = invalidState && key.touched;
    });
    return invalidState;
  }

  startOTPTimer() {
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

  getOTP() {
    this.OTPRequested = true;
    if (this.authOTPForm.controls.remember.value) {
      this.authModalService.setPhone(this.authOTPForm.controls.phone.value);
    }
    this.authOTPForm.controls.phone.disable();
    this.authOTPForm.controls.otp.reset();
    this.rowsSub = this.rows.changes.subscribe(() => {
      this.setFocus();
    });
    this.rowsSub.unsubscribe();
    this.startOTPTimer();
  }

  keyUpEvent(event, index) {
    // TODO: - Remove detection of keyUpEvent in phone control, since it directly invokes the "Zaprosit SMS kod" button
    let pos = index;
    if (event.code === 'Backspace' || event.code === 'Delete') {
      pos = index - 1;
    } else {
      pos = index + 1;
    }
    if (pos > -1 && pos < this.OTPLength) {
      // TODO: Remove access to private property
      // @ts-ignore
      this.rows._results[pos].nativeElement.focus();
      // this.rows.filter((element, inx) => inx === pos).nativeElement.focus();
    }
  }

  public onReset() {
    this.authOTPForm.reset();
    this.authOTPForm.patchValue({
      phone: ' ',
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
    if (this.OTPCode === '1234') {
      console.log('log in data submitted. loading user console...');
      this.isLoggingIn = true;
      setTimeout(() => {
        // dummy loading spinner
        this.router.navigate(['/console']);
      }, 1000);
    } else {
      this.authOTPForm.patchValue({
        otp: ['', '', '', '']
      });
    }
  }

  onAuthModalOpen() {
    // focus on phone input when modal is open
    this.authOTPForm.patchValue({
      phone: this.authModalService.phone ? this.authModalService.phone : ' '
    });
    this.focusOnPhoneInput();
  }

  private focusOnPhoneInput(timeout: number = 50) {
    setTimeout(() => {
      // give the tabset time to animate scroll
      this.authOTPForm.controls.phone.markAsPristine();
      this.phoneRef.nativeElement.focus();
    }, timeout);
  }
}
