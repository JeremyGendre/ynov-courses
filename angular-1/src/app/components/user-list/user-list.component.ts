import {Component, Input, OnInit} from '@angular/core';
import {UsersModel} from "../../models/Users.model";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @Input() users: Array<UsersModel> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
