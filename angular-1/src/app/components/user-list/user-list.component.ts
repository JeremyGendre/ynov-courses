import {Component, Input, OnInit} from '@angular/core';
import {UsersModel} from "../../models/Users.model";
import {frameworks} from "../../models/Frameworks";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @Input() users: Array<UsersModel> = [];

  frameworks:Array<string> = frameworks;
  filterFramework:string|null = null;

  constructor() { }

  ngOnInit(): void {
  }

  public get displayedUsers(){
    if(!this.filterFramework) return this.users;
    return this.users.filter(user => user.framework.toLowerCase() === this.filterFramework);
  }

  handleFilterChange(filter:string){
    if(this.filterFramework === filter) {
      this.filterFramework = null;
      return;
    }
    this.filterFramework = filter;
  }

}
