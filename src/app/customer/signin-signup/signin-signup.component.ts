import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Users } from '../../core/models/object-model';
import { LoginSignupService } from '../../shared/services/login-signup.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-signin-signup',
  standalone: true,
  imports: [CommonModule, RouterLink, HttpClientModule, ReactiveFormsModule],
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
      name: ['', Validators.required],
      mobNumber: ['', Validators.required],
      age: ['', Validators.required],
      dob: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      addLine1: ['', Validators.required],
      addLine2: [''],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.required],
      language: ['', Validators.required],
      gender: ['', Validators.required],
      aboutYou: ['', Validators.required],
      uploadPicture: ['', Validators.required],
      agreetc: ['', Validators.required],
      role: ['', Validators.required],
    });
  }

  // C'est une méthode abrégée utilisant la syntaxe getter en TypeScript. L'utilisation du mot-clé get permet de définir une propriété sur une classe qui est calculée dynamiquement lorsque cette propriété est consultée
  // En résumé, cette méthode rf fournit un moyen pratique d'accéder aux contrôles du formulaire d'inscription dans le code TypeScript de l'application. Au lieu de répéter this.signUpform.controls chaque fois qu'on a besoin d'accéder aux contrôles du formulaire, on peut simplement utiliser this.rf. Cela rend le code plus concis et plus facile à lire
  get rf() {
    return this.signUpform.controls;
  }

  onSubmitSignUp() {
    this.signUpsubmitted = true;
    if (this.signUpform.invalid) {
      return;
    }
    this.user_register_data = this.signUpform.value;
    this.loginService.userRegister(this.user_register_data).subscribe(data => {
      alert("User register success!")
      this.router.navigateByUrl('/sign-in')
    })
  }

  onSubmitSignIn() {
    
  }

}
