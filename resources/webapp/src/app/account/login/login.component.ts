import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AccountService} from "../../services/account.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  isError = false;
  constructor(
    private accountService: AccountService,
    private router: Router
  ) {
    this.form = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  submit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.accountService.login(this.form.value).then(value => {
        this.router.navigateByUrl('/profile');
      }).catch(reason => {
        this.isError =true;
      })
    }
  }

}
