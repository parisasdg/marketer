import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ThemePalette} from '@angular/material/core';
import {Router} from "@angular/router";
import {ServerService} from "../../server.service";

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  breakpoint = 1;

  task: Task = {
    name: 'Indeterminate',
    completed: false,
    color: 'primary',
  };
  hide = true;
  PhoneNumber = new FormControl('', [Validators.required, Validators.pattern(/[0][9][0-9][0-9]{8}$/g)]);
  password = new FormControl('', Validators.required);
  LoginForm = new FormGroup({
    PhoneNumber: this.PhoneNumber,
    password: this.password,
  });

  getErrorMessage() {
    if (this.PhoneNumber.hasError('required')) {
      return 'لطفا تلفن را وارد نمایید';
    }

    return this.PhoneNumber.hasError('pattern') ? 'تلفن معتبر نمی باشد' : '';

  }
  // @ts-ignore
  getErrorMessagePassword(){
    if (this.password .hasError('required')) {
      return 'لطفا رمز را وارد نمایید';
    }
  }

  constructor(fb: FormBuilder, private router: Router,
              private service: ServerService) {
  }

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 700) ? 1 : 10;
  }

  onResize(event: any) {
    this.breakpoint = (event.target.innerWidth <= 700) ? 1 : 10;
    console.log(this.breakpoint)
  }

  Loginsubmit(): void {
    this.LoginForm.disable();
    this.service.Login(this.LoginForm.value).subscribe((response: any) => {
      console.log(response)
      this.LoginForm.enable();
      if (response.token) {
        this.router.navigate(['/marketerList']);
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));
      } else {
      }
    });
  }

}
