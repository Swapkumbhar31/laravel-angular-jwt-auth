import { Component, OnInit } from '@angular/core';
import {AccountService} from "../../services/account.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {
  isAuthenticated = false;
  constructor(
    private accountService: AccountService,
    private router: Router
  ) {
    this.accountService.identity().then(user => {
      this.isAuthenticated = !!user;
    });
  }

  ngOnInit(): void {
  }

  logout() {
    this.accountService.logout().then((result) => {
      if (result) {
        this.router.navigateByUrl('/login');
      }
    });
  }
}
