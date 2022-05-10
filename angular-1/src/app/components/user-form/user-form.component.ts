import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {UsersModel} from "../../models/Users.model";
import {frameworks} from "../../models/Frameworks";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  @Output() submitEvent = new EventEmitter<UsersModel>();
  frameworks = frameworks;
  error:string = '';
  submitting:boolean = false;
  form = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    framework: new FormControl()
  });

  constructor() { }

  ngOnInit(): void {
  }

  validateForm(): string|null{
    const value = this.form.value;
    if(!value.firstname || !value.lastname || !value.framework){
      return 'Tous les champs doivent être remplis';
    }
    return null;
  }

  resetData():void{
    this.form.reset();
  }

  handleSubmit(e:any){
    e.preventDefault();
    const errors = this.validateForm();
    if(errors){
      this.error = errors;
      return;
    }
    this.error = '';
    this.submitting = true;
    //submit ...
    setTimeout(() => {
      this.submitEvent.emit(this.form.value);
      this.submitting = false;
      this.resetData();
    },2000);
  }

}
