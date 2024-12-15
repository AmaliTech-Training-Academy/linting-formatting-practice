import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  template: `
    <ul>
      <li *ngFor="let user of users">{{ user.name }} ({{ user.age }})</li>
    </ul>
  `,
  styles: [`
    ul { list-style-type: none; padding: 0; }
    li { margin-bottom: 10px; }
  `]
})
export class UserListComponent implements OnInit {
  users: {name: string; age: number}[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.getUsers();
  }
}
