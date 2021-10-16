import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { PasswordValidators } from './password.validators';

@Component({
  selector: 'change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.css'],
})
export class ChangePasswordFormComponent {
  // form = new FormGroup(
  //   {
  //     oldPassword: new FormControl(
  //       '',
  //       Validators.required,
  //       PasswordValidators.checkOldPassword
  //     ),
  //     newPassword: new FormControl('', [
  //       Validators.required,
  //       Validators.minLength(4),
  //     ]),
  //     confirmPassword: new FormControl('', [
  //       Validators.required,
  //       Validators.minLength(4),
  //     ]),
  //   },
  //   PasswordValidators.passwordsShouldMatch
  // );

  form: FormGroup;
  constructor(fb: FormBuilder) {
    this.form = fb.group(
      {
        oldPassword: [
          '',
          Validators.required,
          PasswordValidators.checkOldPassword,
        ],
        newPassword: ['', [Validators.required, Validators.minLength(4)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(4)]],
      },
      PasswordValidators.passwordsShouldMatch
    );
  }

  get oldPassword() {
    return this.form.get('oldPassword') as FormControl;
  }

  get newPassword() {
    return this.form.get('newPassword') as FormControl;
  }

  get confirmPassword() {
    return this.form.get('confirmPassword') as FormControl;
  }
}
