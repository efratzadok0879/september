import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User, AuthenticationService, Global, createValidatorArr, ValidateId } from '../../imports';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', '../login/login.component.css']
})

export class RegisterComponent {

  //----------------PROPERTIRS-------------------

  registerFormGroup: FormGroup;
  //allow access from html page to 'Object' type
  objectHolder: typeof Object = Object;
  isExistUserName: boolean = false;
  isExistPassword: boolean = false;
  imageFile: any;

  //----------------CONSTRUCTOR------------------

  constructor(private formBuilder: FormBuilder, private authenticationService: AuthenticationService, private router: Router) {
    this.registerFormGroup = this.formBuilder.group({
      id: ['', createValidatorArr("id", 9, 9).concat(ValidateId)],
      name: ['', createValidatorArr("name", 2, 15, /^[A-Za-z]+$/)],
      password: ['', createValidatorArr("password", 5, 10)],
      age: ['', createValidatorArr("age", 1, 120)],
      isMale: ['', createValidatorArr("isMale")],
    });
  }

  //----------------METHODS-------------------

  onSubmit() {
    let user: User = this.registerFormGroup.value;
    this.register(user);
  }

  register(user: User) {
    this.isExistUserName = false;
    this.isExistPassword = false;
    this.authenticationService.register(user).subscribe(
      res => {
        //enter current user into localStorage
        localStorage.setItem(Global.CurrentUser, `${user.name}`);
        let token: string = res.token;
        localStorage.setItem(Global.Token, JSON.stringify(token));
        alert("register succeeded");

      },
      err => console.log(err));
  }

  //----------------GETTERS-------------------

  //getters of the form group controls

  get id() {
    return this.registerFormGroup.controls["id"];
  }
  get name() {
    return this.registerFormGroup.controls["name"];
  }

  get password() {
    return this.registerFormGroup.controls["password"];
  }

  get age() {
    return this.registerFormGroup.controls["age"];
  }

  get isMale() {
    return this.registerFormGroup.controls["isMale"];
  }
}
