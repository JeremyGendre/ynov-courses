import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RickUsersModel} from "../models/RickUsers.model";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public httpClient: HttpClient) { }

  getUsers(){
    return this.httpClient.get<{results : Array<RickUsersModel>}>('https://rickandmortyapi.com/api/character');
  }
}
