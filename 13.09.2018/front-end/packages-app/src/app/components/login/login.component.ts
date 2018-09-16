import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Global, AuthenticationService, createValidatorArr } from '../../imports';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  //----------------PROPERTIRS-------------------

  loginFormGroup: FormGroup;
  isExistUser: boolean = true;

  //allow access 'Object' type via interpolation
  objectHolder: typeof Object = Object;

  //----------------CONSTRUCTOR------------------

  constructor(private formBuilder: FormBuilder, private router: Router, private authenticationService: AuthenticationService) {
    this.loginFormGroup = this.formBuilder.group({
      name: ['', createValidatorArr("name", 3, 15, /^[A-Za-z]+$/)],
      password: ['', createValidatorArr("password", 5, 10)],

    });
  }

  //----------------METHODS-------------------

  onSubmit() {
    this.login();
  }

  login() {
    this.authenticationService.login(this.name.value, this.password.value)
      .subscribe(respones => {
        localStorage.setItem(Global.Token,respones.token)
        localStorage.setItem(Global.CurrentUser, this.name.value);
          alert("login succseeded!")
      },
    err=>{
      console.log(err);
      this.isExistUser = false;
    });
  }

  //----------------GETTERS-------------------

  //getters of the form group controls

  get name() {
    return this.loginFormGroup.controls["name"];
  }
  get password() {
    return this.loginFormGroup.controls["password"];
  }
}
