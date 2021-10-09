import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  registerForm: FormGroup;
  constructor(
    public loginCredentialsService: LoginServiceService,
    private router: Router
  ) {
    this.registerForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.registerForm.valid) {
      this.loginCredentialsService.storeLoginDetails(this.registerCredential());
      this.router.navigate(['./login']);
    }
  }
  registerCredential() {
    return this.registerForm.value;
  }

}
