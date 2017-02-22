import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../../services/login.service';

@Component({
  selector: 'app-navbar-toolbar-right',
  templateUrl: './navbar-toolbar-right.component.html',
  styleUrls: ['./navbar-toolbar-right.component.css']
})
export class NavbarToolbarRightComponent implements OnInit {

  ngOnInit() {
  }
    myLocalStorage;

  constructor (private loginService:LoginService) {
    this.myLocalStorage=localStorage;
  }


  onClick() {
    if (this.loginService.checkLogin()) {
      this.loginService.logout();
    }
  }

}
