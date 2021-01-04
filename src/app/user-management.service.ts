import { Injectable } from '@angular/core';
import { User } from './login/login.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

// TODO not working because of CORS on server side (tumblr):

export class UserManagementService {

  // Tumblr will give CORS origin error. Using this proxy we can fix that error
  private  serviceURL: string = 'https://thingproxy.freeboard.io/fetch/';
  token: string = "empty token";
  constructor(private http: HttpClient) { }

  public doLogin(user: User) {
    this.http.post(this.serviceURL + 'https://www.tumblr.com/login',user).subscribe((data:any) => {
      this.token = data;
      console.log("Did login > ",user);
      console.log("Did login > ",data);
    });
    
  }
}



