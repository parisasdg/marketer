import {Component, OnInit} from '@angular/core';
import {ServerService} from "../../server.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-marketer',
  templateUrl: './add-marketer.component.html',
  styleUrls: ['./add-marketer.component.scss']
})
export class AddMarketerComponent implements OnInit {

  phoneNumber = new FormControl('', [Validators.required, Validators.pattern(/[0][9][0-9][0-9]{8}$/g)]);
  password = new FormControl('', Validators.required);
  fullName = new FormControl('', Validators.required)
  city = new FormControl('', Validators.required)
  addressDetail = new FormControl('', Validators.required)
  zipPostalCode = new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/g)]);

  registerForm = new FormGroup({
    phoneNumber: this.phoneNumber,
    password: this.password,
    fullName: this.fullName,
    city: this.city,
    addressDetail: this.addressDetail,
    zipPostalCode: this.zipPostalCode
  });

  constructor(fb: FormBuilder, private router: Router, private service: ServerService) {
  }

  getErrorMessagePhoneNumber() {
    if (this.phoneNumber.hasError('required')) {
      return 'لطفا تلفن را وارد نمایید';
    }
    return this.phoneNumber.hasError('pattern') ? 'تلفن معتبر نمی باشد' : '';
  }

  // @ts-ignore
  getErrorMessagePassword() {
    if (this.password.hasError('required')) {
      return 'لطفا رمز را وارد نمایید';
    }
  }

  // @ts-ignore
  getErrorMessageName() {
    if (this.fullName.hasError('required')) {
      return 'لطفا نام خود را وارد نمایید';
    }
  }

  // @ts-ignore
  getErrorMessageCity() {
    if (this.city.hasError('required')) {
      return 'لطفا شهر را وارد نمایید';
    }
  }

  // @ts-ignore
  getErrorMessageAddress() {
    if (this.addressDetail.hasError('required')) {
      return 'لطفا آدرس را وارد نمایید';
    }
  }

  getErrorMessagepostalcode() {
    if (this.zipPostalCode.hasError('required')) {
      return 'لطفا کدپستی را وارد نمایید';
    }

    return this.zipPostalCode.hasError('pattern') ? 'کدپستی معتبر نمی باشد' : '';
  }

  ngOnInit(): void {
  }


  registerSubmit(): void {
    this.registerForm.disable();
    this.service.registration(this.registerForm.value).subscribe((response: any) => {
      console.log(response)
      this.registerForm.enable();
      this.router.navigate(['marketerList']);
      if (response.token) {
        localStorage.setItem('token', response.token);
      }
    });
  }
}
