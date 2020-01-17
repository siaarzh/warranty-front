import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthModalService } from './auth-modal.service';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.sass']
})
export class AuthModalComponent implements OnInit, AfterViewInit, OnDestroy {
  private authModalSub: Subscription;
  private authOTPSub: Subscription;
  private rowsSub: Subscription;
  isVisible = false;
  isConfirmLoading = false;
  authOTPForm: FormGroup;
  authEmailForm: FormGroup;
  selectedIndex = 0;

  // OTP
  OTPRequested = false;
  @Input() OTPLength = 4;
  @ViewChildren('OTPFormRow') rows: QueryList<ElementRef>;
  @ViewChild('PhoneInput', {static: true}) phoneRef: ElementRef;

  constructor(
    private authModalService: AuthModalService,
  ) { }

  ngOnInit() {
    this.authModalSub = this.authModalService.isShown.subscribe((show: boolean) => {
      this.isVisible = show;
    });
    this.initForms();
    this.authOTPSub = this.authOTPForm.valueChanges.subscribe((v) => {
      console.log(v);
    });
  }

  ngAfterViewInit() {

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
  }

  handleCancel() {
    this.authModalService.hide();
  }

  handleOk() {
    // ...
  }

  private initForms() {
    // OTP login form init
    const userPhone = ' ';
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
    // TODO: Create OTP timeout functionality
    this.OTPRequested = true;
    this.authOTPForm.controls.phone.disable();
    this.authOTPForm.patchValue({
      otp: ['', '', '', ''],
    });
    this.rowsSub = this.rows.changes.subscribe(() => {
      this.setFocus();
    });
  }

  keyUpEvent(event, index) {
    // TODO: - Remove detection of keyUpEvent in phone control, since it directly invokes the "Zaprosit SMS kod" button
    let pos = index;
    if (event.code === 'Backspace') {
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
      phone: ' '
    });
    this.OTPRequested = false;
    this.authOTPForm.controls.phone.enable();
    this.authEmailForm.reset();

    this.selectedIndex = 0;
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
    console.log('submitted');
  }

  onAuthModalOpen() {
    // focus on phone input when modal is open
    this.authOTPForm.patchValue({
      phone: ' '
    });
    this.focusOnPhoneInput();
  }

  private focusOnPhoneInput(timeout: number = 50) {
    setTimeout(() => {
      // give the tabset time to animate scroll
      this.phoneRef.nativeElement.focus();
    }, timeout);
  }
}
