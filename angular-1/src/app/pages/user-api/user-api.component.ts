import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../services/http.service";
import {UsersModel} from "../../models/Users.model";

@Component({
  selector: 'app-user-api',
  templateUrl: './user-api.component.html',
  styleUrls: ['./user-api.component.scss']
})
export class UserApiComponent implements OnInit {

  users: Array<UsersModel> = [];

  constructor(public httpService: HttpService) { }

  ngOnInit(): void {
    //TODO : replace with real API
    /*this.httpService.getUsers().subscribe(data => {
      console.log(data);
    });*/
    this.users = [
      {id:0, lastname:'Gendre', firstname: 'Jérémy', framework: 'react'},
      {id:0, lastname:'Pelcat', firstname: 'Martin', framework: 'react'},
      {id:0, lastname:'Un', firstname: 'Débile', framework: 'angular'},
    ];
  }

  handleNewUser(newUserForm:UsersModel){
    this.users = [...this.users, newUserForm];
  }

}
