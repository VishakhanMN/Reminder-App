import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private getCredentials: any;
  public flag = 0;
  private checkCredentials: any;
  loginForm: FormGroup;
  constructor(
    public loginCredentialsService: LoginServiceService,
    private router: Router
  ) {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() { }

  onSubmit() {
    if (this.loginForm.valid) {
      this.getCredentials = this.loginCredentialsService.returnLoginCredentials();
      this.getCredentials.forEach(user => {
        if ((user.username == this.loginForm.value.username) && (user.password == this.loginForm.value.password)) {
          this.flag = 1;
        }
      });

      if (this.flag == 1) {
        this.router.navigate(['./home']);
      }
      else {
        alert('Invalid User... Kindly register as a new user');
        this.loginForm.reset();
      }

    }
  }
  loggedCredential() {
    return this.loginForm.value;
  }

  public addNewUser(): void {
    this.router.navigate(['./register-user'])
  }

}
