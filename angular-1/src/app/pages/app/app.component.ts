import { Component, OnInit } from '@angular/core';
import {RickUsersModel} from "../../models/RickUsers.model";
import {FormControl} from "@angular/forms";
import {HttpService} from "../../services/http.service";

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-1';
  boxes = [
    {
      title: 'Headline 1', id: 1,
      content: 'lorem ipsum lorem ispum 1',
      color: '#F04040',
    },
    {
      title: 'Headline 2', id: 2,
      content: 'lorem ipsum lorem ispum 2',
      color: '#8A6F6F',
    },
    {
      title: 'Headline 3', id: 3,
      content: 'lorem ipsum lorem ispum 3',
      color: '#C2F040',
    },
  ];
  users: Array<RickUsersModel> = [];
  ibanValue: FormControl = new FormControl();

  constructor(public httpService: HttpService){}

  ngOnInit(): void {
    this.httpService.getRickUsers().subscribe(data => {
      console.log(data.results);
      this.users = data.results;
    });
  }

  handleClickBox(userId: number): void{
    this.users = this.users.filter(user => user.id !== userId);
  }
}
