import { UserService } from './../../../services/user.service';
import { CommonModule, NgClass } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-section-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, CommonModule, HttpClientModule],
  templateUrl: './section-login.component.html',
  styleUrl: './section-login.component.scss'
})
export class SectionLoginComponent {

  public isRegisterForm: boolean = false;
  private authData: any;
  private userData: any;

  public loginForm = new FormGroup({
    Email: new FormControl('', [Validators.required, Validators.email]),
    Password: new FormControl('', [Validators.required, Validators.minLength(4)])
  });

  public registerForm = new FormGroup({
    Username: new FormControl('', [Validators.required, Validators.minLength(4)]),
    Email: new FormControl('', [Validators.required, Validators.email]),
    Password: new FormControl('', [Validators.required, Validators.minLength(4)])
  });

  constructor(private auth: AuthService, private userService: UserService) {}

  onSubmitLogin() {

    this.auth.authUser(this.loginForm.value.Email, this.loginForm.value.Password).subscribe(
      (data) => {
        this.authData = data;
        console.log('Data recived:', this.authData);
        localStorage.setItem('user', JSON.stringify(this.authData));
      },
      (error) => {
        window.alert(error['error']['message']);
      }

    )
    console.log(this.loginForm.value);
  }

  onSubmitRegister() {
    this.userService.createUser(this.registerForm.value.Username, this.registerForm.value.Email, this.registerForm.value.Password).subscribe(
      (data) => {
        this.userData = data;
        this.isRegisterForm = !this.isRegisterForm;
        window.alert('Usuario registrado. Faça o login');
      },
      (error) => {
        window.alert(error['error']['message'])
      }
    )
    console.log(this.registerForm.value);
  }

  switchForm() {
    this.isRegisterForm = !this.isRegisterForm;
    console.log(this.isRegisterForm);
  }
}
