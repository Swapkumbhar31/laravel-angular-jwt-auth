import {Injectable} from '@angular/core';
import {User} from "../interfaces/user";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  user: User;
  private userSubscription;

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  register(user: User) {
    return this.httpClient.post(environment.host + 'auth/register', user, {observe: 'response'}).toPromise()
      .then((result) => {
        this.storeToken(result.body);
        return result.body;
      })
      .catch((error: HttpErrorResponse) => {
        return error.error;
      });
  }

  identity(): Promise<User> {
    if (this.user) {
      return of(this.user).toPromise();
    } else {
      this.userSubscription = this.httpClient.post<User>(environment.host + 'auth/me', null)
        .toPromise()
        .then((result) => {
          this.user = result;
          return result;
        });
    }
    return this.userSubscription;
  }

  storeToken(response) {
    localStorage.setItem('access_token', response.access_token);
  }

  login(credentials: { email: string, password }) {
    return this.httpClient.post(environment.host + 'auth/login', credentials,
      {observe: 'response'})
      .toPromise()
      .then((result) => {
        this.storeToken(result.body);
        return result.body;
      })
      .catch((error: HttpErrorResponse) => {
        return error.error;
      });
  }

  logout(): Promise<boolean> {
    return new Promise<boolean>(resolve => {
      this.httpClient.post(environment.host + 'auth/logout', null).subscribe(() => {
        localStorage.removeItem('access_token');
        resolve(true);
      });
    });
  }
}
