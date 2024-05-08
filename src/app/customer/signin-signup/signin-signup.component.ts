import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Users } from '../../core/models/object-model';
import { LoginSignupService } from '../../shared/services/login-signup.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-signin-signup',
  standalone: true,
  imports: [CommonModule, RouterLink, HttpClientModule],
  templateUrl: './signin-signup.component.html',
  styleUrl: './signin-signup.component.scss'
})
export class SigninSignupComponent {
  registerForm: boolean = false;
  signUpform!: FormGroup; 
  signInform!: FormGroup; 
  signUpsubmitted = false;
  href: string = '';
  user_data: any;
  user_login_dto!: Users;
  user_register_data: any;
  signInformValue: any = {};

  constructor(private formBuilder: FormBuilder, private router: Router, private loginService: LoginSignupService) { }
  
  ngOnInit(): void{
    this.href = this.router.url;
    if (this.href == '/sign-in') {
      this.registerForm = true
    } else if (this.href == '/sign-up') {
      this.registerForm = false
    }

    this.signUpform = this.formBuilder.group({

    })
  }

}
