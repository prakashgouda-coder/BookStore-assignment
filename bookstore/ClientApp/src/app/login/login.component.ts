import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";
import { AuthenticationService } from "../authentication.service";
import { User } from "../user";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  returnUrl: string;
    loginUser: User;
    loggedinuser: any;
    loggedinuser$: Object;
  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    this.loginUser = new User();
    this.registerForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });
  }

  // get return url from route parameters or default to '/'

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.loginUser.email = this.f.email.value;
    this.loginUser.password = this.f.password.value;
     
      this.authenticationService.loginUser(this.loginUser).subscribe(data => {

          this.route.navigate(['/home']);

      },
          error => {
              console.log('Error ');
              //this.alertService.error(error);
              //this.loading = false;
          });
      this.route.navigate(['/home']); // to be removed
  }

    authenticateUser() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.loginUser.email = this.f.email.value;
        this.loginUser.password = this.f.password.value;

        this.authenticationService.loginUser(this.loginUser).subscribe(data => {

            this.route.navigate(['/home']);

        },
            error => {
                console.log('Error ');
                //this.alertService.error(error);
                //this.loading = false;
            }); 
    }
}

// custom validator to check that two fields match
export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      // return if another validator has already found an error on the matchingControl
      return;
    }

    // set error on matchingControl if validation fails
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}
