import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  frameworks = ['vue','react', 'angular'];

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

  handleSubmit(e:any){
    e.preventDefault();
    console.log(this.form.value);
    const errors = this.validateForm();
    if(errors){
      this.error = errors;
      return;
    }
    this.error = '';
    this.submitting = true;
    //submit ...
    /*setTimeout(() => {
      this.submitting = false;
    },2000);*/
  }

}
