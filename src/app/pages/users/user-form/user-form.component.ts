import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { User } from '../../../models/user';
import { UsersService } from '../../../services/users.service';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  form: FormGroup;
  title: string;
  mode: string;
  user: User = new User();

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private usersService: UsersService
  ) {
    this.form = formBuilder.group({
      firstName: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],
      lastName: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],
      userName: ['', [
        Validators.required,
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
      ]],
      gender: ['', [
        Validators.required,
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(6)
      ]]
    });
  }

  ngOnInit() {
    let id = this.route.params.subscribe(params => {
      let id = params['id'];
      this.title = id ? 'Edit User' : 'New User';
      this.mode = id ? 'edit' : 'add';
      if (!id)
        return;
      /**/
      console.log("Id : " + id);
      console.log("Mode  : " + this.title);
      this.usersService.getUserByUserId(id)
        .subscribe(
        data => this.user = data,
        response => {
          if (response.status == 404) {
            this.router.navigate(['NotFound']);
          }
        });
    });
  }

  save() {
    var result,
      userValue = this.form.value;
    console.log("Get User Id " + userValue);
    console.log("Get Username " + userValue.firstName);
    // Update
    if (this.mode == "edit") {
      result = this.usersService.updateUser(this.user);
      // Add
    } else {
      result = this.usersService.addUser(userValue);
    }
    result.subscribe(data => this.router.navigate(['users']));
  }
}
