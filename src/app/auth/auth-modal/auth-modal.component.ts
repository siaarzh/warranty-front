import { Component, Input, OnDestroy, OnInit, ViewChildren } from '@angular/core';
import { AuthModalService } from './auth-modal.service';
import { Subscription } from 'rxjs';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.sass']
})
export class AuthModalComponent implements OnInit, OnDestroy {
  private authModalSub: Subscription;
  private authOTPSub: Subscription;
  isVisible = false;
  isConfirmLoading = false;
  authOTPForm: FormGroup;
  authEmailForm: FormGroup;

  // OTP
  OTPRequested = false;
  @Input() OTPLength = 4;
  @ViewChildren('OTPFormRow') rows: any;

  constructor(
    private authModalService: AuthModalService,
  ) {
  }

  ngOnInit() {
    this.authModalSub = this.authModalService.isShown.subscribe((show: boolean) => {
      this.isVisible = show;
    });
    this.initForms();
    this.authOTPSub = this.authOTPForm.valueChanges.subscribe((v) => {
      console.log(v);
    });
  }

  ngOnDestroy() {
    this.authModalSub.unsubscribe();
    this.authOTPSub.unsubscribe();
  }

  handleCancel() {
    this.authModalService.hide();
  }

  handleOk() {
    // ...
  }

  private initForms() {
    // OTP login form init
    const userPhone = '';
    const OTPInputs = new FormArray([]);

    // create OTP object
    for (let i = 0; i < this.OTPLength; i++) {
      OTPInputs.push(new FormControl('', Validators.required));
    }

    this.authOTPForm = new FormGroup({
      phone: new FormControl(userPhone),
      otp: OTPInputs,
    });

    // email login form init:
    const userEmail = '';
    const userPassword = '';

    this.authEmailForm = new FormGroup({
      email: new FormControl(userEmail),
      password: new FormControl(userPassword),
    });
  }

  get OTPControls() { // a getter!
    return (this.authOTPForm.get('otp') as FormArray).controls;
  }

  getOTP() {
    this.OTPRequested = true;
  }

  keyUpEvent(event, index) {
    let pos = index;
    if (event.code === 'Backspace') {
      pos = index - 1;
    } else {
      pos = index + 1;
    }
    if (pos > -1 && pos < this.OTPLength) {
      this.rows._results[pos].nativeElement.focus();
    }
  }

  onReset() {
    this.authOTPForm.reset();
    this.OTPRequested = false;
  }
}
