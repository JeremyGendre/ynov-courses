import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RickUsersModel} from "../models/RickUsers.model";
import {UsersModel} from "../models/Users.model";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public httpClient: HttpClient) { }

  getRickUsers(){
    return this.httpClient.get<{results : Array<RickUsersModel>}>('https://rickandmortyapi.com/api/character');
  }

  getUsers(){
    return this.httpClient.get<Array<UsersModel>>('https://705c-92-103-197-34.eu.ngrok.io/users');
  }

  createUser(user:UsersModel){
    return this.httpClient.post<UsersModel>('https://705c-92-103-197-34.eu.ngrok.io/users',{
      ...user
    });
  }
}
