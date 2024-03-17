import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-section-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, CommonModule],
  templateUrl: './section-login.component.html',
  styleUrl: './section-login.component.scss'
})
export class SectionLoginComponent {

  public isRegisterForm: boolean = false;
  public loginForm = new FormGroup({
    Email: new FormControl('', [Validators.required, Validators.email]),
    Password: new FormControl('', [Validators.required, Validators.minLength(4)])
  });
  public registerForm = new FormGroup({
    Username: new FormControl('', [Validators.required, Validators.minLength(4)]),
    Email: new FormControl('', [Validators.required, Validators.email]),
    Password: new FormControl('', [Validators.required, Validators.minLength(4)])
  });

  onSubmitLogin() {
    console.log(this.loginForm.value);
  }

  onSubmitRegister() {
    console.log(this.registerForm.value);
  }

  switchForm() {
    this.isRegisterForm = !this.isRegisterForm;
    console.log(this.isRegisterForm);
  }
}
