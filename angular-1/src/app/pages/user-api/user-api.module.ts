import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserApiComponent} from "./user-api.component";
import {RouterModule} from "@angular/router";

const routes = [
  {path:'', component: UserApiComponent},
];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserApiModule { }
