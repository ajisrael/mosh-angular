import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValidators {
  static passwordsShouldMatch(
    control: AbstractControl
  ): ValidationErrors | null {
    let newPassword = control.get('newPassword');
    let confirmPassword = control.get('confirmPassword');

    if (newPassword?.value !== confirmPassword?.value) {
      return { passwordsDoNotMatch: true };
    }
    return null;
  }

  static async checkOldPassword(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value !== '1234') {
          resolve({ passwordIncorrect: true });
        } else {
          resolve(null);
        }
      }, 2000);
    });
  }
}
