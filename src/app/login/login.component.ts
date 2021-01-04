import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserManagementService } from '../user-management.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: User;
  public formGroup: FormGroup;

  constructor(private userManagement: UserManagementService) { 
    
    this.formGroup = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });
  }

  ngOnInit(): void {
  }

  login() {
    this.user = new User();
    this.user.username = this.formGroup.get("username").value;
    this.user.password = this.formGroup.get("password").value;
    
    console.log(this.user);

    this.userManagement.doLogin(this.user);


  }

}

export class User {
  username: string = "";
  password: string = "";
}

