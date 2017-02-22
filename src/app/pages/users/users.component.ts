import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from "../../services/users.service";
import { User } from "./../../models/user";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  private users: Array<User> = new Array<User>();
  private user: User = new User();

  constructor(private usersService: UsersService ,private router :Router) {

  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.usersService.getUsers().subscribe(
      data => {
        this.users = JSON.parse(JSON.stringify(data));
        console.log(JSON.parse(JSON.stringify(data)));
        for (let i = 0; i < this.users.length; i++) {

        }
        console.log(" DATA : " + data);
        console.log(" Users : " + this.users);
        console.log(" Users Amount : " + this.users.length);
        console.log(" Users Amount : " + this.users[0]);
      },
      error => console.log(error)
    )
  }

  deleteUser(user) {
    let result;
    if (confirm("Are you sure you want to delete " + user.firstName + "?")) {
      var index = this.users.indexOf(user);
      this.users.splice(index, 1);

     result = this.usersService.deleteUser(user)
        .subscribe(null,
        err => {
          alert("Could not delete user.");
          // Revert the view back to its original state
          this.users.splice(index, 0, user);
        });       
    }
      result.subscribe(data => this.router.navigate(['users']));    
  }

}
