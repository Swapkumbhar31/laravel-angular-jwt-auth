import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AccountService} from "../../services/account.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  errors: any[];
  constructor(
    private accountService: AccountService,
    private router: Router
  ) {
    this.form = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      confirm_password: new FormControl(),
    })
  }

  ngOnInit(): void {
  }

  submit() {
    if (this.form.valid) {
      this.accountService
        .register(this.form.value)
        .then((response) => {
          this.router.navigateByUrl('/profile');
        }, (error) => {
          this.errors = error.errors;
        });
    }
  }
}
