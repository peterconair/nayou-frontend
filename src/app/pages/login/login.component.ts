import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import { LoginService } from './../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private model = { 'username': '', 'password': '' };
  private currentUserName;
  router: Router;


  constructor(private loginService: LoginService, router: Router) {
    this.currentUserName = localStorage.getItem("currentUserName");
    this.router = router;
  }

  ngOnInit() {
  }


  onSubmit() {
    this.loginService.sendCredential(this.model).subscribe(
      data => {
        console.log(data);
        localStorage.setItem("token", JSON.parse(JSON.stringify(data))._body);
        this.loginService.sendToken(localStorage.getItem("token")).subscribe(
          data => {
            this.currentUserName = this.model.username;
            localStorage.setItem("currentUserName", this.model.username);
            this.model.username = '';
            this.model.password = '';
          },
          error => console.log(error)

        );

      },
      error => console.log(error)
    );

  }
}
