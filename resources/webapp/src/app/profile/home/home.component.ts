import {Component, OnInit} from '@angular/core';
import {AccountService} from "../../services/account.service";
import {User} from "../../interfaces/user";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  user: User;

  constructor(
    private accountService: AccountService
  ) {
    this.accountService.identity().then((user) => {
      this.user = user;
    });
  }

  ngOnInit(): void {
  }

}
